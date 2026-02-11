# Docs TODO

## Pre-Deploy Checklist

- [x] **Verify credit packages** — $5/500, $25/2,550, $50/5,250 confirmed accurate
- [ ] **Update rates.yml** — `visagoapi/rates.yml` still has old pricing. Needs to match new docs rates:
  - `claude`: 1 → 3 cents/description
  - `openai`: 1 → 2 cents/description
  - `grok`: 1 → 2 cents/description
  - `clarifai`: 0.12 → 0.15 cents (tags, nsfw)
  - `imagga`: 0.12 → 0.15 cents (tags, nsfw)
  - `googlevision`: 0.15 → 0.2 cents (all features)
  - `rekognition`: 0.1 → 0.15 cents (tags, nsfw, faces)
- [ ] **Final build and test** — `npx astro build` and verify search works, all links resolve, no broken images
- [ ] **Deploy**

## Done ✅

- [x] Landing page: hero with swirl image, product cards, capabilities, reference links
- [x] Getting Started universal page (account, credits, API key, backends)
- [x] Search enabled (Pagefind)
- [x] Stock Starlight styling with image borders and logo sizing
- [x] Reference tables consolidated (API values as identifiers, removed redundant columns)
- [x] Video processing updated (file uploads, max_frames caution, Content Analyzer note)
- [x] Cross-links updated (API getting started, authentication → universal Getting Started)
- [x] Credits page: "One credit equals one cent"
- [x] Languages list verified against source code
- [x] Sidebar and hero buttons alphabetized
- [x] Legacy Ruby/Middleman files removed
- [x] Deploy script updated for Astro (npx astro build, dist/)
- [x] README replaced with Visionati docs README
- [x] LICENSE updated to MIT
- [x] LLM pricing tiered: Claude 3¢, OpenAI/Grok 2¢, Gemini/Jina/LLaVA/BakLLaVA 1¢
- [x] Detection pricing updated: Google Vision 0.2¢, Clarifai/Imagga/Rekognition 0.15¢
- [x] Credit packages verified accurate