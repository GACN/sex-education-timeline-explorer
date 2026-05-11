const byId = (id) => document.getElementById(id);
const characterMap = new Map(CHARACTERS.map((c) => [c.id, c]));
const episodeMap = new Map(EPISODES.map((e) => [e.id, e]));

const state = {
  view: "timeline",
  episode: 1,
  character: "Otis",
  relation: 0,
  dark: false
};

function esc(value) {
  return String(value).replace(/[&<>"']/g, (m) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  }[m]));
}

function episodeLabel(id) {
  const e = episodeMap.get(id);
  return e ? `${id} · 第 ${e.season} 季第 ${e.episode} 集` : id;
}

function charChip(name, selected = false) {
  return `<button class="chip ${selected ? "selected" : ""}" data-character="${esc(name)}">${esc(name)}</button>`;
}

function init() {
  byId("characterCount").textContent = CHARACTERS.length;
  byId("relationCount").textContent = RELATIONSHIPS.length;
  initNav();
  initEpisodeJump();
  initCharacters();
  initSearch();
  byId("themeToggle").addEventListener("click", toggleTheme);
  renderTimeline();
  renderCharacter();
  renderRelations();
  renderSearch();
  document.body.addEventListener("click", handleBodyClick);
}

function initNav() {
  document.querySelectorAll(".rail-item").forEach((button) => {
    button.addEventListener("click", () => {
      state.view = button.dataset.view;
      document.querySelectorAll(".rail-item").forEach((b) => b.classList.toggle("active", b === button));
      document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
      byId(`${state.view}View`).classList.add("active");
    });
  });
}

function initEpisodeJump() {
  const jump = byId("episodeJump");
  jump.innerHTML = EPISODES.map((e) => `<button class="jump-chip" data-episode="${e.n}">${e.id}</button>`).join("");
  byId("episodeSlider").addEventListener("input", (event) => {
    state.episode = Number(event.target.value);
    renderTimeline();
  });
}

function initCharacters() {
  const select = byId("characterSelect");
  select.innerHTML = CHARACTERS.map((c) => `<option value="${esc(c.id)}">${esc(c.id)} · ${esc(c.role)}</option>`).join("");
  select.value = state.character;
  select.addEventListener("change", () => {
    state.character = select.value;
    renderCharacter();
  });
  byId("characterSearch").addEventListener("input", renderCharacter);
}

function initSearch() {
  byId("globalSearch").addEventListener("input", renderSearch);
}

function toggleTheme() {
  state.dark = !state.dark;
  document.body.classList.toggle("dark", state.dark);
}

function handleBodyClick(event) {
  const characterButton = event.target.closest("[data-character]");
  if (characterButton) {
    state.character = characterButton.dataset.character;
    byId("characterSelect").value = state.character;
    renderCharacter();
    showView("characters");
    return;
  }
  const episodeButton = event.target.closest("[data-episode]");
  if (episodeButton) {
    state.episode = Number(episodeButton.dataset.episode);
    byId("episodeSlider").value = state.episode;
    renderTimeline();
    showView("timeline");
    return;
  }
  const relationButton = event.target.closest("[data-relation]");
  if (relationButton) {
    state.relation = Number(relationButton.dataset.relation);
    renderRelations();
    showView("relations");
  }
}

function showView(viewName) {
  state.view = viewName;
  document.querySelectorAll(".rail-item").forEach((b) => b.classList.toggle("active", b.dataset.view === viewName));
  document.querySelectorAll(".view").forEach((view) => view.classList.remove("active"));
  byId(`${viewName}View`).classList.add("active");
}

function renderTimeline() {
  const episode = EPISODES[state.episode - 1];
  byId("episodeOutput").textContent = episode.id;
  byId("episodeSlider").value = episode.n;
  document.querySelectorAll(".jump-chip").forEach((chip) => chip.classList.toggle("active", Number(chip.dataset.episode) === episode.n));
  byId("episodeFocus").innerHTML = `
    <div class="episode-meta">
      <span class="badge">${episode.id}</span>
      <span class="badge">Season ${episode.season}</span>
      <span class="badge">Episode ${episode.episode}</span>
    </div>
    <h2>${episodeLabel(episode.id)}</h2>
    <p>${esc(episode.summary)}</p>
    <div class="chips">${episode.characters.map((name) => charChip(name)).join("")}</div>
    <p style="margin:14px 0 0"><a class="source-link" href="${esc(episode.pdf)}">打开这一集 PDF</a></p>
  `;

  const characterEvents = CHARACTERS
    .map((character) => {
      const found = character.events.find((event) => event[0] === episode.id);
      return found ? { character, event: found } : null;
    })
    .filter(Boolean);
  byId("episodeLineHint").textContent = characterEvents.length
    ? `这一集命中 ${characterEvents.length} 条人物线。`
    : "这一集只有总剧情摘要，未标到单独人物节点。";
  byId("episodeEvents").innerHTML = characterEvents.map(({ character, event }) => `
    <article class="event-card">
      <h3>${esc(character.id)}</h3>
      <p>${esc(event[1])}</p>
      <div class="chips">${event[2].map((name) => charChip(name)).join("")}</div>
    </article>
  `).join("") || `<div class="empty">没有找到独立人物节点。</div>`;
}

function renderCharacter() {
  const query = byId("characterSearch").value.trim().toLowerCase();
  const selected = characterMap.get(state.character) || CHARACTERS[0];
  const visibleEvents = selected.events.filter((event) => {
    if (!query) return true;
    return [selected.id, selected.role, selected.core, event[0], event[1], event[2].join(" ")]
      .join(" ")
      .toLowerCase()
      .includes(query);
  });
  byId("characterProfile").innerHTML = `
    <div>
      <div class="episode-meta">
        <span class="badge">${esc(selected.role)}</span>
        <span class="badge">${selected.events.length} 个节点</span>
      </div>
      <h2>${esc(selected.id)}</h2>
      <p>${esc(selected.core)}</p>
    </div>
    <div class="avatar" style="background:${esc(selected.color)}">${esc(selected.id.slice(0, 1))}</div>
  `;
  byId("characterTimeline").innerHTML = visibleEvents.map((event) => `
    <article class="timeline-item">
      <button class="episode-tag" data-episode="${episodeMap.get(event[0]).n}">${event[0]}</button>
      <div class="timeline-body">
        <h3>${episodeLabel(event[0])}</h3>
        <p>${esc(event[1])}</p>
        <div class="chips">${event[2].map((name) => charChip(name, name === selected.id)).join("")}</div>
      </div>
    </article>
  `).join("") || `<div class="empty">没有匹配到人物节点。</div>`;
}

function renderRelations() {
  const rel = RELATIONSHIPS[state.relation] || RELATIONSHIPS[0];
  byId("relationDetail").innerHTML = `
    <div class="episode-meta"><span class="badge">${esc(rel.type)}</span></div>
    <h2>${esc(rel.a)} × ${esc(rel.b)}</h2>
    <p>${esc(rel.arc)}</p>
    <div class="chips">${rel.episodes.map((id) => `<button class="chip" data-episode="${episodeMap.get(id).n}">${id}</button>`).join("")}</div>
  `;
  byId("relationList").innerHTML = RELATIONSHIPS.map((item, index) => `
    <article class="relation-card ${index === state.relation ? "active" : ""}" data-relation="${index}">
      <h3>${esc(item.a)} × ${esc(item.b)}</h3>
      <p>${esc(item.type)}</p>
      <div class="chips">${item.episodes.slice(0, 6).map((id) => `<span class="chip">${id}</span>`).join("")}</div>
    </article>
  `).join("");
  renderGraph();
}

function renderGraph() {
  const svg = byId("relationGraph");
  const names = Array.from(new Set(RELATIONSHIPS.flatMap((r) => [r.a, r.b])));
  const centerX = 460;
  const centerY = 280;
  const radius = 215;
  const positions = new Map();
  names.forEach((name, index) => {
    const angle = (Math.PI * 2 * index / names.length) - Math.PI / 2;
    positions.set(name, {
      x: centerX + Math.cos(angle) * radius,
      y: centerY + Math.sin(angle) * radius
    });
  });
  const edges = RELATIONSHIPS.map((r, index) => {
    const a = positions.get(r.a);
    const b = positions.get(r.b);
    const width = Math.min(8, 2 + r.episodes.length * .45);
    return `<line class="edge" data-relation="${index}" x1="${a.x}" y1="${a.y}" x2="${b.x}" y2="${b.y}" stroke-width="${width}"></line>`;
  }).join("");
  const nodes = names.map((name) => {
    const p = positions.get(name);
    const c = characterMap.get(name);
    const color = c ? c.color : "#6750A4";
    return `
      <g class="node" data-character="${esc(name)}" transform="translate(${p.x} ${p.y})">
        <circle r="23" fill="${esc(color)}"></circle>
        <text text-anchor="middle" y="44">${esc(name)}</text>
      </g>
    `;
  }).join("");
  svg.innerHTML = `<g>${edges}</g><g>${nodes}</g>`;
}

function renderSearch() {
  const query = byId("globalSearch").value.trim().toLowerCase();
  byId("themeStrip").innerHTML = THEMES.map((theme) => `
    <article class="theme-card">
      <h3>${esc(theme.label)}</h3>
      <p>${esc(theme.note)}</p>
      <div class="chips">${theme.episodes.map((id) => `<button class="chip" data-episode="${episodeMap.get(id).n}">${id}</button>`).join("")}</div>
    </article>
  `).join("");
  const results = [];
  EPISODES.forEach((episode) => {
    const hay = [episode.id, episode.summary, episode.characters.join(" ")].join(" ").toLowerCase();
    if (!query || hay.includes(query)) {
      results.push({ kind: "集数", title: episodeLabel(episode.id), text: episode.summary, chips: episode.characters, episode: episode.n });
    }
  });
  CHARACTERS.forEach((character) => {
    character.events.forEach((event) => {
      const hay = [character.id, character.role, event[0], event[1], event[2].join(" ")].join(" ").toLowerCase();
      if (query && hay.includes(query)) {
        results.push({ kind: "人物线", title: `${character.id} · ${event[0]}`, text: event[1], chips: event[2], episode: episodeMap.get(event[0]).n });
      }
    });
  });
  RELATIONSHIPS.forEach((rel, index) => {
    const hay = [rel.a, rel.b, rel.type, rel.arc, rel.episodes.join(" ")].join(" ").toLowerCase();
    if (query && hay.includes(query)) {
      results.push({ kind: "关系", title: `${rel.a} × ${rel.b}`, text: rel.arc, chips: rel.episodes, relation: index });
    }
  });
  byId("searchResults").innerHTML = results.slice(0, query ? 80 : 32).map((result) => `
    <article class="search-card">
      <div class="episode-meta">
        <span class="badge">${esc(result.kind)}</span>
        ${result.episode ? `<button class="chip" data-episode="${result.episode}">定位集数</button>` : ""}
        ${Number.isInteger(result.relation) ? `<button class="chip" data-relation="${result.relation}">查看关系</button>` : ""}
      </div>
      <h3>${esc(result.title)}</h3>
      <p>${esc(result.text)}</p>
      <div class="chips">${result.chips.map((chip) => episodeMap.has(chip) ? `<button class="chip" data-episode="${episodeMap.get(chip).n}">${chip}</button>` : charChip(chip)).join("")}</div>
    </article>
  `).join("") || `<div class="empty">没有搜索结果。</div>`;
}

init();
