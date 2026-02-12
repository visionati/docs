---
title: Getting Started
description: Create your account and get set up with Visionati.
sidebar:
  order: 0
---

Everything in Visionati starts with an account. Whether you're using the API, the Browser Extension, or the Content Analyzer, you'll need one.

## Create an Account

Sign up at <a href="https://api.visionati.com" target="_blank" rel="noopener">api.visionati.com</a>. You'll use this account across all Visionati products.

## Add Credits

Visionati runs on a credit system. One credit equals one cent. A single-backend request can cost as little as 1 credit, while using all default backends with all features runs around 10 credits.

| Package | Price | Credits |
|---------|-------|---------|
| Starter | $5 | 500 |
| Small Business | $25 | 2,550 |
| Professional | $50 | 5,250 |
| Enterprise | Contact | Custom |

Purchase credits from your account page. See [Credit System](/reference/credits/) for full details on how costs are calculated.

## Get Your API Key

Your API key is available on your account page. You'll need it for:

- **API**: passed in the `X-API-Key` header with every request
- **Browser Extension**: entered in the extension options after install

The **Content Analyzer** uses your logged-in session, so no API key is needed there.

## Configure Your Backends

By default, Visionati enables seven AI backends: Claude, Gemini, Grok, OpenAI, Clarifai, Google Vision, and Rekognition. You can change which backends are active in your account settings.

See [AI Backends](/reference/backends/) for the full list and per-feature costs.

## Next Steps

Pick the product that fits your use case:

- **[API Reference](/api/)**: Integrate image and video analysis into your app
- **[Browser Extension](/browser-extension/)**: Analyze any image you see while browsing
- **[Content Analyzer](/content-analyzer/)**: Upload images and get results in a web interface