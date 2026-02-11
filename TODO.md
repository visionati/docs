# Docs TODO

## Pre-Deploy Checklist

- [x] **Verify credit packages** — $5/500, $25/2,550, $50/5,250 confirmed accurate
- [x] **Update rates.yml** — `visagoapi/rates.yml` updated to match new docs rates
- [x] **Verify surcharge logic** — `rates.rb` confirmed: surcharge = `(prompt.length / 2500) * backend_rate`
- [ ] **Final build and test** — `npx astro build` and verify search works, all links resolve, no broken images
- [ ] **Deploy**

## Done ✅

- [x] Landing page: hero with swirl image, product cards, capabilities, reference links
- [x] Getting Started universal page (account, credits, API key, backends)
- [x] Search enabled (Pagefind)
- [x] Slate accent color theme with Barlow headings, squared corners, image borders, logo sizing
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
- [x] rates.yml updated in visagoapi
- [x] Surcharge logic verified against rates.rb
- [x] Non-default backends note added (Jina/LLaVA/BakLLaVA/Imagga)
- [x] Role choosing guidance and prompt role future-proofed
- [x] Features page: LLM backends linked to backends page
- [x] Em dashes replaced with colons in prose
- [x] Unused font files cleaned up (kept Barlow only)