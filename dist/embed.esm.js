var $="ventureinkorea_embed_";function D(e){try{let t=sessionStorage.getItem($+e);if(!t)return null;let r=JSON.parse(t);return Date.now()-r.ts>3e5?(sessionStorage.removeItem($+e),null):r.data}catch{return null}}function O(e,t){try{let r={data:t,ts:Date.now()};sessionStorage.setItem($+e,JSON.stringify(r))}catch{}}async function x(e,t){let r=t,n=D(r);if(n)return n;let a=e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""),i=await fetch(a,{headers:{Accept:"application/json"}});if(!i.ok)throw new Error(`API error ${i.status}: ${a}`);let s=await i.json();return O(r,s),s}var u={site:"ventureinkorea",name:"VentureInKorea",domain:"ventureinkorea.com",accent:"#2563EB",attribute:"data-ventureinkorea",apiBase:"https://ventureinkorea.com/api/v1/",searchPath:"/search/",entityName:"Ventures",entitySlug:"ventures"};var l=`
/* ========== Reset ========== */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
a { color: inherit; text-decoration: none; }

/* ========== Themes ========== */
.ventureinkorea-widget[data-theme="light"] {
  --bg: #ffffff;
  --text: #1e293b;
  --text-muted: #64748b;
  --border: #e2e8f0;
  --surface: #f8fafc;
  --accent: #2563EB;
  --accent-light: #dbeafe;
  --accent-text: #1e40af;
}
.ventureinkorea-widget[data-theme="dark"] {
  --bg: #1a1a2e;
  --text: #f3f4f6;
  --text-muted: #9ca3af;
  --border: #374151;
  --surface: #111827;
  --accent: #3b82f6;
  --accent-light: #1e3a5f;
  --accent-text: #93c5fd;
}
.ventureinkorea-widget[data-theme="sepia"] {
  --bg: #f5f0e8;
  --text: #3d3529;
  --text-muted: #8b7d6b;
  --border: #d4c5a9;
  --surface: #ede8df;
  --accent: #2563EB;
  --accent-light: #d6cfc4;
  --accent-text: #1e40af;
}

/* ========== Base widget ========== */
.ventureinkorea-widget {
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  font-size: 14px;
  line-height: 1.5;
  color: var(--text);
  background: var(--bg);
  border: 1px solid var(--border);
  border-radius: 8px;
  overflow: hidden;
}

/* ========== Sizes ========== */
.ventureinkorea-widget[data-size="compact"] { max-width: 280px; font-size: 13px; }
.ventureinkorea-widget[data-size="default"] { max-width: 420px; }
.ventureinkorea-widget[data-size="large"] { max-width: 720px; }

/* ========== Loading ========== */
.ventureinkorea-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px;
}
.ventureinkorea-spinner {
  width: 24px;
  height: 24px;
  border: 3px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: ventureinkorea-spin 0.8s linear infinite;
}
@keyframes ventureinkorea-spin {
  to { transform: rotate(360deg); }
}

/* ========== Error ========== */
.ventureinkorea-error {
  padding: 16px;
  color: #dc2626;
  font-size: 13px;
  text-align: center;
}

/* ========== Powered by ========== */
.ventureinkorea-powered {
  padding: 8px 16px;
  font-size: 11px;
  color: var(--text-muted);
  text-align: right;
  border-top: 1px solid var(--border);
  background: var(--surface);
}
.ventureinkorea-powered a {
  color: var(--accent);
  text-decoration: underline;
}
.ventureinkorea-powered a:hover {
  color: var(--accent-text);
}

/* ========== Card body ========== */
.ventureinkorea-body {
  padding: 16px;
}
.ventureinkorea-widget[data-size="compact"] .ventureinkorea-body { padding: 12px; }
.ventureinkorea-widget[data-size="large"] .ventureinkorea-body { padding: 24px; }

/* ========== Title ========== */
.ventureinkorea-title {
  font-size: 1.15em;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 4px;
}
.ventureinkorea-title a:hover { color: var(--accent); }

/* ========== Subtitle / meta ========== */
.ventureinkorea-meta {
  font-size: 0.85em;
  color: var(--text-muted);
  margin-bottom: 8px;
}

/* ========== Description ========== */
.ventureinkorea-desc {
  font-size: 0.92em;
  color: var(--text);
  margin-bottom: 12px;
}

/* ========== Badge ========== */
.ventureinkorea-badge {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 4px;
  background: var(--accent-light);
  color: var(--accent-text);
  margin-right: 6px;
  margin-bottom: 4px;
}

/* ========== Link ========== */
.ventureinkorea-link {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 0.85em;
  font-weight: 600;
  color: var(--accent);
}
.ventureinkorea-link:hover { text-decoration: underline; }
.ventureinkorea-link svg { flex-shrink: 0; }

/* ========== Header bar ========== */
.ventureinkorea-header {
  padding: 10px 16px;
  background: var(--surface);
  border-bottom: 1px solid var(--border);
  font-size: 0.8em;
  font-weight: 600;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

/* ========== Search ========== */
.ventureinkorea-search-form {
  display: flex;
  gap: 8px;
}
.ventureinkorea-search-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--border);
  border-radius: 6px;
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  outline: none;
}
.ventureinkorea-search-input:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 2px var(--accent-light);
}
.ventureinkorea-search-btn {
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background: var(--accent);
  color: #fff;
  font-weight: 600;
  cursor: pointer;
}
.ventureinkorea-search-btn:hover { opacity: 0.9; }

/* ========== Copy button ========== */
.ventureinkorea-copy-btn {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 4px 8px;
  border: 1px solid var(--border);
  border-radius: 4px;
  background: var(--surface);
  color: var(--text-muted);
  font-size: 12px;
  cursor: pointer;
}
.ventureinkorea-copy-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
}

/* ========== Tags row ========== */
.ventureinkorea-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 8px;
}
`;var p=`
/* Modern style overrides */
.ventureinkorea-widget.ventureinkorea-style-modern {
  box-shadow: 0 1px 3px rgba(0,0,0,0.08), 0 1px 2px rgba(0,0,0,0.06);
}
.ventureinkorea-style-modern .ventureinkorea-header {
  border-bottom: 2px solid var(--accent);
}
.ventureinkorea-style-modern .ventureinkorea-title {
  font-size: 1.2em;
}
.ventureinkorea-style-modern .ventureinkorea-badge {
  border-radius: 12px;
  padding: 2px 10px;
}
`;var g=`
/* Minimal style overrides */
.ventureinkorea-widget.ventureinkorea-style-minimal {
  box-shadow: none;
  border-radius: 4px;
}
.ventureinkorea-style-minimal .ventureinkorea-header {
  background: transparent;
  border-bottom: 1px solid var(--border);
  padding: 8px 16px;
}
.ventureinkorea-style-minimal .ventureinkorea-badge {
  background: transparent;
  border: 1px solid var(--accent);
  color: var(--accent);
}
.ventureinkorea-style-minimal .ventureinkorea-powered {
  background: transparent;
}
`;var G={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function o(e){return e.replace(/[&<>"']/g,t=>G[t]??t)}function m(e){return e.attachShadow({mode:"open"})}function v(e,t,r,n){let a=document.createElement("style");a.textContent=t,e.appendChild(a);let i=document.createElement("div");return i.className="ventureinkorea-widget",i.setAttribute("data-theme",r),i.setAttribute("data-size",n),e.appendChild(i),i}function f(e){return e==="light"||e==="dark"||e==="sepia"?e:typeof window<"u"&&window.matchMedia?.("(prefers-color-scheme: dark)").matches?"dark":"light"}function h(e,t){if(t!=="auto"||typeof window>"u")return;let r=window.matchMedia("(prefers-color-scheme: dark)"),n=()=>{e.setAttribute("data-theme",r.matches?"dark":"light")};r.addEventListener("change",n)}function k(e){let t=e.getAttribute("data-theme")||"auto",r=e.getAttribute("data-size")||"default",n=e.getAttribute("data-style-variant")||"modern";return{theme:t,size:r,style:n}}function y(){return'<div class="ventureinkorea-loading"><div class="ventureinkorea-spinner"></div></div>'}function w(e){return`<div class="ventureinkorea-error">${o(e)}</div>`}function b(e){return`<div class="ventureinkorea-powered">Powered by <a href="https://${o(e)}" target="_blank" rel="noopener">${o(e)}</a></div>`}function S(){return'<svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.5 1.5H10.5V8.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M10.5 1.5L1.5 10.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>'}function L(){return'<svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="9" y="9" width="13" height="13" rx="2" stroke="currentColor" stroke-width="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" stroke="currentColor" stroke-width="2"/></svg>'}function C(e){e.querySelectorAll("[data-copy]").forEach(t=>{t.addEventListener("click",()=>{let r=t.getAttribute("data-copy")||"";navigator.clipboard.writeText(r).then(()=>{let n=t.innerHTML;t.innerHTML="&#10003;",setTimeout(()=>{t.innerHTML=n},1500)})})})}function P(e,t){let r=`https://${t}/ventures/${e.slug}/`,n=e.url||r,a="";e.certification_type&&(a+=`<span class="ventureinkorea-badge">${o(e.certification_type)}</span>`),e.industry&&(a+=`<span class="ventureinkorea-badge">${o(e.industry)}</span>`);let i=e.founded_year?`<span>Founded ${o(String(e.founded_year))}</span>`:"",s=e.description?`<div class="ventureinkorea-desc">${o(e.description.slice(0,200))}${e.description.length>200?"...":""}</div>`:"";return`
    <div class="ventureinkorea-header">Venture</div>
    <div class="ventureinkorea-body">
      <div class="ventureinkorea-title">
        <a href="${o(r)}" target="_blank" rel="noopener">${o(e.name)}</a>
      </div>
      <div class="ventureinkorea-tags">${a}</div>
      <div class="ventureinkorea-meta">${i}</div>
      ${s}
      <a class="ventureinkorea-link" href="${o(n)}" target="_blank" rel="noopener">
        View details ${S()}
      </a>
    </div>
    ${b(t)}
  `}function E(){let e=u.attribute;document.querySelectorAll(`[${e}="entity"]`).forEach(async t=>{let r=t.getAttribute("data-slug");if(!r)return;let n=k(t),a=f(n.theme),i=l+p+g,s=m(t),d=v(s,i,a,n.size);d.classList.add(`ventureinkorea-style-${n.style}`),h(d,n.theme),d.innerHTML=y();try{let c=await x(u.apiBase,`ventures/${r}/`);d.innerHTML=P(c,u.domain)}catch(c){d.innerHTML=w(c instanceof Error?c.message:"Failed to load venture")}})}var M="data-ventureinkorea-snippet",H=new Set;function A(e,t,r){if(typeof document>"u"||document.querySelector(`[${M}]`)?.getAttribute("data-no-snippet")==="true")return;let a=`term:${e}`;if(H.has(a))return;H.add(a);let i={"@context":"https://schema.org","@type":"DefinedTerm",name:e,description:t,url:r,inDefinedTermSet:{"@type":"DefinedTermSet",name:"VentureInKorea Glossary",url:"https://ventureinkorea.com/glossary/"}},s=document.createElement("script");s.type="application/ld+json",s.setAttribute(M,"true"),s.textContent=JSON.stringify(i),document.head.appendChild(s)}function R(e,t){let r=e.url||`https://${t}/glossary/${e.slug}/`;return`
    <div class="ventureinkorea-header">Glossary</div>
    <div class="ventureinkorea-body">
      <div class="ventureinkorea-title">
        <a href="${o(r)}" target="_blank" rel="noopener">${o(e.term)}</a>
      </div>
      <div class="ventureinkorea-desc">${o(e.definition)}</div>
      <div style="display:flex;align-items:center;gap:8px;">
        <a class="ventureinkorea-link" href="${o(r)}" target="_blank" rel="noopener">
          Learn more ${S()}
        </a>
        <button class="ventureinkorea-copy-btn" data-copy="${o(e.definition)}" title="Copy definition">
          ${L()}
        </button>
      </div>
    </div>
    ${b(t)}
  `}function z(){let e=u.attribute;document.querySelectorAll(`[${e}="glossary"]`).forEach(async t=>{let r=t.getAttribute("data-slug");if(!r)return;let n=k(t),a=f(n.theme),i=l+p+g,s=m(t),d=v(s,i,a,n.size);d.classList.add(`ventureinkorea-style-${n.style}`),h(d,n.theme),d.innerHTML=y();try{let c=await x(u.apiBase,`glossary/${r}/`);d.innerHTML=R(c,u.domain),C(s);let B=c.url||`https://${u.domain}/glossary/${c.slug}/`;t.getAttribute("data-no-snippet")!=="true"&&A(c.term,c.definition,B)}catch(c){d.innerHTML=w(c instanceof Error?c.message:"Failed to load term")}})}function q(e,t,r){return`
    <div class="ventureinkorea-header">Search</div>
    <div class="ventureinkorea-body">
      <form class="ventureinkorea-search-form" action="https://${o(e)}${o(t)}" method="get" target="_blank">
        <input
          class="ventureinkorea-search-input"
          type="text"
          name="q"
          placeholder="${o(r)}"
          autocomplete="off"
          required
        />
        <button class="ventureinkorea-search-btn" type="submit">Search</button>
      </form>
    </div>
    ${b(e)}
  `}function I(){let e=u.attribute;document.querySelectorAll(`[${e}="search"]`).forEach(t=>{let r=k(t),n=f(r.theme),a=l+p+g,i=m(t),s=v(i,a,n,r.size);s.classList.add(`ventureinkorea-style-${r.style}`),h(s,r.theme);let d=t.getAttribute("data-placeholder")||"Search Korean ventures...";s.innerHTML=q(u.domain,u.searchPath,d)})}function V(e,t){let r=e.url||`https://${t}/guides/${e.slug}/`,n=e.description?`<div class="ventureinkorea-desc">${o(e.description.slice(0,250))}${e.description.length>250?"...":""}</div>`:"";return`
    <div class="ventureinkorea-header">Guide</div>
    <div class="ventureinkorea-body">
      <div class="ventureinkorea-title">
        <a href="${o(r)}" target="_blank" rel="noopener">${o(e.title)}</a>
      </div>
      ${n}
      <a class="ventureinkorea-link" href="${o(r)}" target="_blank" rel="noopener">
        Read guide ${S()}
      </a>
    </div>
    ${b(t)}
  `}function _(){let e=u.attribute;document.querySelectorAll(`[${e}="guide"]`).forEach(async t=>{let r=t.getAttribute("data-slug");if(!r)return;let n=k(t),a=f(n.theme),i=l+p+g,s=m(t),d=v(s,i,a,n.size);d.classList.add(`ventureinkorea-style-${n.style}`),h(d,n.theme),d.innerHTML=y();try{let c=await x(u.apiBase,`guides/${r}/`);d.innerHTML=V(c,u.domain)}catch(c){d.innerHTML=w(c instanceof Error?c.message:"Failed to load guide")}})}function T(){E(),z(),I(),_()}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",T):T();typeof MutationObserver<"u"&&new MutationObserver(t=>{for(let r of t)if(r.addedNodes.length){T();break}}).observe(document.body,{childList:!0,subtree:!0});if(typeof IntersectionObserver<"u"){let e=new IntersectionObserver(t=>{for(let r of t)r.isIntersecting&&(e.unobserve(r.target),T())});document.querySelectorAll("[data-ventureinkorea]").forEach(t=>e.observe(t))}export{E as initEntity,z as initGlossary,_ as initGuide,I as initSearch};
