# Wishplace Blog

Static multilingual blog for [wishplace.app](https://wishplace.app), built with [Eleventy (11ty)](https://www.11ty.dev/) and deployed to **GitHub Pages** via GitHub Actions.

---

## URL structure

| Path | What it is |
|------|-----------|
| `/en/` | English article list / home |
| `/it/` | Italian article list / home |
| `/en/<slug>/` | English article |
| `/it/<slug>/` | Italian article |

The root (`/`) automatically redirects to `/en/` or `/it/` based on browser language.

---

## Project structure

```
WishplaceBlog/
│
├── .eleventy.js                 ← Eleventy config: collections, filters, passthrough copies
├── package.json                 ← npm scripts (build / start) + single dev dependency
├── .gitignore
│
├── .github/
│   └── workflows/
│       └── deploy.yml           ← CI: build with Eleventy → deploy _site/ to GitHub Pages
│
└── src/                         ← everything Eleventy reads
    │
    ├── index.html               ← landing page (copied as-is, not processed)
    ├── assets/                  ← images, fonts, icons  (passthrough)
    ├── legal/                   ← legal pages           (passthrough)
    ├── auth/                    ← auth pages            (passthrough)
    ├── download/                ← download pages        (passthrough)
    │
    ├── _data/
    │   └── site.js              ← global data: site URL, language list, current year
    │
    ├── _includes/
    │   └── layouts/
    │       ├── base.njk         ← HTML shell (header, footer, OG tags, hreflang <link>s)
    │       └── article.njk      ← article page (lang badge, date, switcher, back link)
    │                              extends base.njk via `layout: base.njk`
    │
    ├── css/
    │   └── blog.css         ← all styles — plain CSS, no frameworks
    │
    ├── en/
    │   └── index.njk        → /en/        EN article list
    ├── it/
    │   └── index.njk        → /it/        IT article list
    │
    └── posts/               ← Markdown articles
        ├── en/
        │   ├── en.11tydata.js           ← sets layout, lang="en", permalink=/en/<slug>/
        │   ├── inverse-market-real-estate.md   → /en/inverse-market-real-estate/
        │   └── product-update-april-2026.md    → /en/product-update-april-2026/
        └── it/
            ├── it.11tydata.js           ← sets layout, lang="it", permalink=/it/<slug>/
            └── mercato-inverso-immobiliare.md  → /it/mercato-inverso-immobiliare/
```

> **Output directory:** Eleventy writes the finished site to `_site/` (git-ignored).  
> **Passthrough directories** (`assets/`, `legal/`, etc.) are copied verbatim — Eleventy never processes them.

---

## Writing articles

Create a Markdown file in `src/posts/<lang>/your-slug.md`:

```markdown
---
title: "Your Article Title"
slug: your-slug
date: 2026-05-01
description: One-line summary shown in listings and meta tags.
translations:
  - lang: en
    url: /en/your-slug/
  - lang: it
    url: /it/il-tuo-slug/
---

Article body in Markdown…
```

- The `slug` field drives the URL (`/en/your-slug/`) via the directory data file.
- `translations` generates `<link rel="alternate" hreflang="…">` tags in `<head>` and the language switcher on the article page.
- Omit `translations` (or list only one) to publish a single-language article — the switcher won't appear.

### Adding a new language

1. Create `src/posts/<code>/` and add `<code>.11tydata.js` (copy from `en.11tydata.js`, change `lang` and permalink prefix).
2. Add a list page at `src/<code>/index.njk` (copy from `en/index.njk`, update collection name and labels).
3. Add a new collection in `.eleventy.js` (`postsEs`, `postsFr`, …).
4. Add the language to `src/_data/site.js`.

---

## Local development

### Prerequisites

| Tool | Version | Notes |
|------|---------|-------|
| **Node.js** | 18 or 20 LTS | `node -v` to check; download from [nodejs.org](https://nodejs.org) |
| **npm** | bundled with Node | no separate install needed |

### First-time setup

```bash
# 1. Clone the repo (if you haven't already)
git clone https://github.com/<your-org>/wishplace-blog.git
cd wishplace-blog

# 2. Install the only dev dependency (Eleventy)
npm install
```

### Start the dev server

```bash
npm start
```

Eleventy starts a local server with **live-reload**:

```
[11ty] Server at http://localhost:8080
```

Open your browser and visit:

| URL | What you see |
|-----|-------------|
| `http://localhost:8080/` | Instantly redirects to /en/ or /it/ |
| `http://localhost:8080/en/` | English article list |
| `http://localhost:8080/it/` | Italian article list |
| `http://localhost:8080/en/inverse-market-real-estate/` | Sample EN article |
| `http://localhost:8080/it/mercato-inverso-immobiliare/` | Sample IT article |

Every time you **save a file** (template, Markdown, CSS) Eleventy rebuilds only the affected pages and the browser reloads automatically.

### One-off production build

```bash
npm run build
```

Output is written to `_site/`. The folder structure mirrors the final URLs exactly — you can inspect any file to verify the rendered HTML.

```bash
# Quick sanity-check: list all output files
find _site -type f | sort
```

### Serve the production build locally

If you want to preview `_site/` exactly as GitHub Pages will serve it (no live reload):

```bash
# Using Python (ships with macOS)
python3 -m http.server 8080 --directory _site

# Or with npx serve
npx serve _site
```

Then open `http://localhost:8080`.

### Troubleshooting

| Symptom | Fix |
|---------|-----|
| `command not found: eleventy` | Run `npm install` first |
| Port 8080 already in use | `npm start -- --port 3000` |
| Changes not appearing | Hard-refresh the browser (`⌘ Shift R` on macOS) |
| Build error on a `.md` file | Check that `slug:` is set in the frontmatter |

---

## Deployment

Push to `main` → GitHub Actions builds the site with Eleventy and deploys `_site/` to GitHub Pages automatically.

**One-time setup (GitHub repo settings):**

1. **Settings → Pages → Source**: set to *GitHub Actions* (not a branch).
2. Ensure the `github-pages` environment exists (it is created automatically on the first deployment).

---

## Design

Plain CSS (`css/blog.css`) — no Tailwind, no React, no build pipeline beyond Eleventy. Uses the **Inter** typeface (Google Fonts) and a sleek black accent (`#000000`) consistent with the Wishplace brand.
