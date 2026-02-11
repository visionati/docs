# Visionati Documentation

Documentation site for the Visionati visual AI platform. Built with [Astro Starlight](https://starlight.astro.build/).

## Development

```bash
npm install
npx astro dev --port 4321
```

The site will be available at `http://localhost:4321`.

## Build

```bash
npx astro build
```

Build output goes to `dist/`. Search indexing (Pagefind) runs during the build step.

## Deploy

```bash
./deploy.sh
```

## Structure

```
src/
├── assets/           # Images and logo
├── content/docs/     # Documentation pages (Markdown/MDX)
│   ├── index.mdx     # Landing page
│   ├── getting-started.md
│   ├── api/          # API Reference (6 pages)
│   ├── browser-extension/  # Browser Extension (2 pages)
│   ├── content-analyzer/   # Content Analyzer (2 pages)
│   └── reference/    # Reference (backends, features, roles, credits, video, languages)
├── fonts/            # Self-hosted web fonts
└── styles/           # Custom CSS
public/               # Static assets (favicons, CNAME)
astro.config.mjs      # Starlight configuration
```

## Docs Site

Production: [docs.visionati.com](https://docs.visionati.com)