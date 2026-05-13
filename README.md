# Sex Education Timeline Explorer

一个用于浏览《Sex Education》四季人物线、关系交集和剧情时间线的静态网页项目。

This repository contains a static timeline explorer for all four seasons of
*Sex Education*. It organizes episode-level notes, character arcs, relationship
intersections, and searchable themes into a browser-friendly interface.

## 在线内容

- `index.html`：主页面
- `styles.css`：页面样式
- `app.js`：交互逻辑
- `data.js`：32 集时间线、人物线和关系数据
- `LOCAL_AI.md`：本地 OpenAI-compatible 文本模型问答说明
- `local_chat.py`：基于 `data.js` 检索上下文的本地问答脚本
- `docs/Sex Education Transcripts - All Seasons.docx`：四季 32 集 PDF 台词合并后的 Word 文件

## 小说更新

- `docs/novel/经纬咨询室_完整小说_v2.epub`：带目录的 EPUB 小说版本
- `docs/novel/经纬咨询室_完整小说_v2.md`：Markdown 合订本
- `docs/novel/成稿说明_完整小说v1.md`：当前成稿说明和版本说明

## 使用方式

直接打开 `index.html` 即可浏览时间线。如果通过 GitHub Pages 部署，也可以作为纯静态网页访问，不需要后端服务。

本地运行一个简单服务器：

```sh
python3 -m http.server 8080
```

然后在浏览器打开：

```text
http://localhost:8080
```

## 功能

- 按集数查看 32 集剧情节点
- 按人物查看成长线和关键事件
- 查看主要人物之间的关系交集
- 搜索人物、关系、事件和主题关键词
- 可选使用本地文本模型对时间线资料进行问答

## 合并文档

四季 PDF 台词已经整理成一个 Word 文件：

```text
docs/Sex Education Transcripts - All Seasons.docx
```

合并范围为 Season 1 到 Season 4，每季 8 集，共 32 集。

## 说明

这是一个学习和整理用途的非官方项目。剧集名称、人物和相关文本归原权利方所有。
