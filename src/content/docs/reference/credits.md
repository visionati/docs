---
title: Credit System
description: How Visionati credits are calculated and charged.
sidebar:
  order: 4
---

The Visionati API runs on a credit system. One credit equals one cent. Credits are charged per image (or per frame for videos) based on which backends and features you request.

## How Credits Are Calculated

Each backend charges per feature it supports. The total credit cost for a request is the sum of all active backend-feature combinations.

For example, if you enable **Clarifai** (tags: 0.15 cents, NSFW: 0.15 cents) and **OpenAI** (descriptions: 2 cents), a request with all features enabled would cost:

- Clarifai tags: 0.15
- Clarifai NSFW: 0.15
- OpenAI descriptions: 2.00
- **Total: 2.30 cents (3 credits)**

Credits are rounded up to the nearest whole number.

## Backend Costs

See [AI Backends](/reference/backends/) for the per-feature cost of each backend.

## Long Prompt Surcharge

Custom prompts over 2500 characters add a surcharge for every 2500-character block. The surcharge equals the backend's base rate per description (e.g., 3 cents for Claude, 2 cents for OpenAI, 1 cent for Gemini). This applies only to description (LLM) backends.

## Video Credits

Videos are processed by extracting frames. Each frame is charged as a separate image. The total cost is:

**credits per frame x number of frames extracted**

Use the `max_frames` parameter to control costs. See [Video Processing](/reference/video-processing/).

## Credit Packages

| Package | Price | Credits | Bonus |
|---------|-------|---------|-------|
| Starter | $5 | 500 | — |
| Small Business | $25 | 2,550 | 2% |
| Professional | $50 | 5,250 | 5% |
| Enterprise | Contact | Custom | Negotiable |

Purchase credits at <a href="https://api.visionati.com" target="_blank" rel="noopener">api.visionati.com</a>.

## Tips for Reducing Costs

- **Select only the features you need** using the `feature` parameter
- **Select only the backends you need** using the `backend` parameter
- **Use `max_frames`** to limit video processing costs
- Simple requests (e.g., tags only from one backend) cost very little
