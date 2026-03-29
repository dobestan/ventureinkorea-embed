# ventureinkorea-embed

[![npm](https://img.shields.io/npm/v/ventureinkorea-embed)](https://www.npmjs.com/package/ventureinkorea-embed)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/ventureinkorea-embed)

Embeddable widgets for [VentureInKorea](https://ventureinkorea.com) — the Korean venture startup database. Display certified venture companies, startup glossary terms, search, and guides on any website with a single script tag.

VentureInKorea tracks Korean government-certified venture companies (벤처인증기업), startup ecosystem terminology, and guides for entrepreneurs navigating the Korean startup landscape. The embed widgets bring this data to any website with zero dependencies, Shadow DOM isolation, and automatic dark mode support.

> **Try the live widgets at [widget.ventureinkorea.com](https://widget.ventureinkorea.com)**

## Table of Contents

- [Install](#install)
- [Quick Start](#quick-start)
- [Widget Types](#widget-types)
  - [Venture Card](#venture-card)
  - [Glossary Term](#glossary-term)
  - [Search](#search)
  - [Guide Card](#guide-card)
- [Themes & Styles](#themes--styles)
- [Widget Options](#widget-options)
- [Korean Venture Ecosystem](#korean-venture-ecosystem)
- [CDN Options](#cdn-options)
- [License](#license)

## Install

**CDN (recommended):**

```html
<script src="https://cdn.jsdelivr.net/npm/ventureinkorea-embed@1/dist/embed.min.js"></script>
```

**npm:**

```bash
npm install ventureinkorea-embed
```

## Quick Start

Add the script tag to your HTML, then use `data-ventureinkorea` attributes to embed widgets:

```html
<!-- Load the widget script -->
<script src="https://cdn.jsdelivr.net/npm/ventureinkorea-embed@1/dist/embed.min.js"></script>

<!-- Venture company card -->
<div data-ventureinkorea="entity" data-slug="example-venture"></div>

<!-- Startup glossary term -->
<div data-ventureinkorea="glossary" data-slug="venture-certification"></div>

<!-- Search box -->
<div data-ventureinkorea="search"></div>
```

That's it. The script auto-initializes on DOM ready, observes dynamic elements via MutationObserver, and lazy-loads via IntersectionObserver.

## Widget Types

### Venture Card

Display a Korean certified venture company with certification badge, industry, and founding year.

```html
<!-- Venture company card with dark theme -->
<div data-ventureinkorea="entity"
     data-slug="kakao"
     data-theme="dark"
     data-size="default">
</div>
```

**API:** `GET https://ventureinkorea.com/api/v1/ventures/{slug}/`

Shows: company name, certification type badge (벤처인증), industry tag, founded year, description excerpt, and link to full profile.

### Glossary Term

Embed startup and venture ecosystem terminology with definitions. Automatically injects DefinedTerm JSON-LD rich snippets into the host page.

```html
<!-- Glossary term card -->
<div data-ventureinkorea="glossary"
     data-slug="tips-program"
     data-theme="auto">
</div>
```

**API:** `GET https://ventureinkorea.com/api/v1/glossary/{slug}/`

Rich snippet opt-out: add `data-no-snippet="true"` to disable JSON-LD injection.

### Search

A search form that redirects users to VentureInKorea search results.

```html
<!-- Search widget -->
<div data-ventureinkorea="search"
     data-placeholder="Search Korean ventures..."
     data-size="large">
</div>
```

No API call required. Redirects to `https://ventureinkorea.com/search/?q={query}`.

### Guide Card

Display blog posts and guides about Korean startup ecosystem.

```html
<!-- Guide card -->
<div data-ventureinkorea="guide"
     data-slug="venture-certification-process"
     data-style-variant="minimal">
</div>
```

**API:** `GET https://ventureinkorea.com/api/v1/guides/{slug}/`

## Themes & Styles

### 4 Themes

| Theme | Description |
|-------|-------------|
| `light` | White background, dark text |
| `dark` | Dark background, light text |
| `sepia` | Warm parchment tones |
| `auto` | Follows `prefers-color-scheme` (default) |

### 3 Sizes

| Size | Max Width | Use Case |
|------|-----------|----------|
| `compact` | 280px | Sidebar, narrow columns |
| `default` | 420px | Standard embedding |
| `large` | 720px | Full-width sections |

### 2 Styles

| Style | Description |
|-------|-------------|
| `modern` | Elevated card with accent header bar (default) |
| `minimal` | Flat, thin borders, transparent backgrounds |

## Widget Options

All options are set via `data-*` attributes on the widget container element.

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-ventureinkorea` | `entity`, `glossary`, `search`, `guide` | (required) | Widget type |
| `data-slug` | string | (required*) | Entity/term/guide slug |
| `data-theme` | `light`, `dark`, `sepia`, `auto` | `auto` | Color theme |
| `data-size` | `compact`, `default`, `large` | `default` | Widget width |
| `data-style-variant` | `modern`, `minimal` | `modern` | Visual style |
| `data-placeholder` | string | `Search Korean ventures...` | Search placeholder text |
| `data-no-snippet` | `true` | `false` | Disable JSON-LD injection |

*`data-slug` is not required for the search widget.

## Korean Venture Ecosystem

### Venture Certification (벤처인증)

The Korean government's venture certification system (벤처기업확인제도) identifies innovative startups eligible for tax benefits, R&D funding, and preferential government procurement. Companies must meet criteria in technology innovation, R&D investment, or venture capital backing.

### Key Programs

| Program | Operator | Focus |
|---------|----------|-------|
| **TIPS** (Tech Incubator Program for Startup) | KISED | Pre-Series A, up to 500M KRW |
| **K-Startup Grand Challenge** | NIPA | Foreign startups entering Korea |
| **Born2Global** | Born2Global Centre | Korean startups going global |
| **DCAMP** (D.Camp) | Banks Foundation | Fintech and digital innovation |
| **SparkLabs** | SparkLabs Group | Accelerator with global network |

### Certification Types

| Type | Korean | Description |
|------|--------|-------------|
| Venture Capital-backed | 벤처투자기업 | VC investment ≥ 10% of capital |
| R&D Enterprise | 연구개발기업 | R&D spending ≥ 5% of revenue |
| Technology Innovation | 기술혁신기업 | Patent/IP commercialization |
| Pre-venture | 예비벤처기업 | Pre-revenue technology startup |

### Government Bodies

- **KISED** (창업진흥원): Korea Institute of Startup & Entrepreneurship Development
- **MSS** (중소벤처기업부): Ministry of SMEs and Startups
- **KVCA** (한국벤처캐피털협회): Korea Venture Capital Association

## CDN Options

| CDN | URL |
|-----|-----|
| **jsDelivr** (recommended) | `https://cdn.jsdelivr.net/npm/ventureinkorea-embed@1/dist/embed.min.js` |
| **unpkg** | `https://unpkg.com/ventureinkorea-embed@1/dist/embed.min.js` |

## Features

- **Zero dependencies** — no external libraries required
- **Shadow DOM** — complete CSS isolation from host page
- **Auto dark mode** — follows `prefers-color-scheme` with real-time `matchMedia` listener
- **IntersectionObserver** — lazy-loads widgets when they enter viewport
- **MutationObserver** — auto-detects dynamically added widget elements (SPA support)
- **sessionStorage caching** — 5-minute API response cache, reduces network requests
- **Rich snippets** — glossary widgets inject DefinedTerm JSON-LD into host page
- **< 10KB gzipped** — minimal bundle size

## License

MIT
