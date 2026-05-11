#!/usr/bin/env python3
import argparse
import json
import os
import subprocess
import sys
import urllib.error
import urllib.request
from pathlib import Path

API_BASE = os.environ.get("LOCAL_AI_BASE", "http://127.0.0.1:4891/v1")
MODEL = os.environ.get("LOCAL_AI_MODEL", "gemma-4-E4B-it-ultra-uncensored-heretic-Q4_K_M")


def load_data(project_dir: Path):
    script = r"""
const fs = require('fs');
const vm = require('vm');
const ctx = {};
vm.createContext(ctx);
vm.runInContext(fs.readFileSync('data.js', 'utf8') + '\nthis.out={EPISODES,CHARACTERS,RELATIONSHIPS,THEMES};', ctx);
console.log(JSON.stringify(ctx.out));
"""
    result = subprocess.run(
        ["node", "-e", script],
        cwd=project_dir,
        text=True,
        capture_output=True,
        check=True,
    )
    return json.loads(result.stdout)


def make_chunks(data):
    chunks = []
    for episode in data["EPISODES"]:
        chunks.append({
            "kind": "episode",
            "title": episode["id"],
            "text": f'{episode["id"]} S{episode["season"]}E{episode["episode"]}: {episode["summary"]} 相关人物: {", ".join(episode["characters"])}'
        })
    for char in data["CHARACTERS"]:
        chunks.append({
            "kind": "character",
            "title": char["id"],
            "text": f'{char["id"]}: {char["role"]}. {char["core"]}'
        })
        for event in char["events"]:
            chunks.append({
                "kind": "character_event",
                "title": f'{char["id"]} {event[0]}',
                "text": f'{char["id"]} @ {event[0]}: {event[1]} 交集人物: {", ".join(event[2])}'
            })
    for rel in data["RELATIONSHIPS"]:
        chunks.append({
            "kind": "relationship",
            "title": f'{rel["a"]} x {rel["b"]}',
            "text": f'{rel["a"]} x {rel["b"]}: {rel["type"]}. {rel["arc"]} 相关集数: {", ".join(rel["episodes"])}'
        })
    for theme in data["THEMES"]:
        chunks.append({
            "kind": "theme",
            "title": theme["label"],
            "text": f'{theme["label"]}: {theme["note"]} 相关集数: {", ".join(theme["episodes"])}'
        })
    return chunks


def score_chunk(question, chunk, character_names):
    q = question.lower()
    text = (chunk["title"] + " " + chunk["text"]).lower()
    score = 0
    for token in q.replace("，", " ").replace("。", " ").replace("？", " ").replace("?", " ").split():
        if len(token) >= 2 and token in text:
            score += len(token)
    for name in character_names:
        if name in q and name in text:
            score += 12
            if name in chunk["title"].lower():
                score += 10
    if any(word in q for word in ["关系", "交集", "relationship", "变化", "发展"]) and chunk["kind"] == "relationship":
        score += 18
    if any(word in q for word in ["人物", "性格", "成长", "变化", "发展"]) and chunk["kind"] in {"character", "character_event"}:
        score += 10
    for marker in ["s01", "s02", "s03", "s04", "e01", "e02", "e03", "e04", "e05", "e06", "e07", "e08"]:
        if marker in q and marker in text:
            score += 8
    return score


def retrieve(question, chunks, character_names, limit=8, max_chars=4200):
    ranked = sorted(chunks, key=lambda c: score_chunk(question, c, character_names), reverse=True)
    selected = [c for c in ranked if score_chunk(question, c, character_names) > 0]
    if not selected:
        selected = ranked[:limit]
    compact = []
    total = 0
    for chunk in selected:
        size = len(chunk["text"])
        if compact and total + size > max_chars:
            break
        compact.append(chunk)
        total += size
        if len(compact) >= limit:
            break
    return compact


def call_model(question, context, api_base, model):
    prompt = (
        "下面是本地资料库检索出的《Sex Education》剧情、人设和关系资料。"
        "请只根据这些资料回答，资料不足就明确说不足。不要输出思考过程，不要输出 <|channel|> 标记。\n\n"
        f"资料:\n{context}\n\n问题:\n{question}"
    )
    body = {
        "model": model,
        "messages": [
            {"role": "system", "content": "你是中文剧情资料分析助手。直接给结论，按人物/集数组织。"},
            {"role": "user", "content": prompt},
        ],
        "temperature": 0.2,
        "max_tokens": 1200,
    }
    req = urllib.request.Request(
        api_base.rstrip("/") + "/chat/completions",
        data=json.dumps(body).encode("utf-8"),
        headers={"Content-Type": "application/json"},
    )
    try:
        with urllib.request.urlopen(req, timeout=180) as response:
            data = json.load(response)
    except urllib.error.HTTPError as exc:
        detail = exc.read().decode("utf-8", "ignore")
        raise RuntimeError(f"HTTP {exc.code}: {detail}") from exc
    return data["choices"][0]["message"]["content"]


def clean_answer(text):
    if "<|channel>final" in text:
        return text.split("<|channel>final", 1)[1].strip()
    if "<|channel|>final" in text:
        return text.split("<|channel|>final", 1)[1].strip()
    if "<channel|>" in text:
        return text.split("<channel|>", 1)[1].strip()
    return (
        text.replace("<|channel>thought", "")
        .replace("<|channel|>thought", "")
        .replace("<|channel>analysis", "")
        .replace("<|channel|>analysis", "")
        .strip()
    )


def main():
    parser = argparse.ArgumentParser(description="Ask the local OpenAI-compatible model about the Sex Education timeline data.")
    parser.add_argument("question", nargs="*", help="Question to ask. If omitted, interactive mode starts.")
    parser.add_argument("--api-base", default=API_BASE)
    parser.add_argument("--model", default=MODEL)
    parser.add_argument("--context-limit", type=int, default=8)
    parser.add_argument("--max-context-chars", type=int, default=4200)
    args = parser.parse_args()

    project_dir = Path(__file__).resolve().parent
    data = load_data(project_dir)
    chunks = make_chunks(data)
    character_names = [c["id"].lower() for c in data["CHARACTERS"]]

    def ask(question):
        selected = retrieve(question, chunks, character_names, args.context_limit, args.max_context_chars)
        context = "\n".join(f'- [{c["kind"]}] {c["text"]}' for c in selected)
        print("=== 检索到的资料片段 ===")
        for c in selected:
            print(f'- {c["title"]} ({c["kind"]})')
        print("\n=== 本地模型回答 ===")
        print(clean_answer(call_model(question, context, args.api_base, args.model)))

    if args.question:
        ask(" ".join(args.question))
        return

    print("输入问题，Ctrl+C 退出。")
    while True:
        try:
            question = input("\n问题> ").strip()
        except (EOFError, KeyboardInterrupt):
            print()
            return
        if question:
            ask(question)


if __name__ == "__main__":
    main()
