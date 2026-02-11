---
title: Getting Started
description: How to start using the Visionati API.
sidebar:
  order: 2
---

Before using the API, you'll need an account, credits, and an API key. See [Getting Started](/getting-started/) if you haven't set that up yet.

## Your First Request

```bash
curl -X POST "https://api.visionati.com/api/fetch" \
  -H "X-API-Key: Token YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com/photo.jpg"}'
```

This sends the image to all your default backends with all features enabled and returns a JSON response with descriptions, tags, NSFW scores, and more.

## Narrow Your Request

You don't always need everything. Specify only the backends and features you want to reduce cost and response time:

```bash
curl -X POST "https://api.visionati.com/api/fetch" \
  -H "X-API-Key: Token YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "url": "https://example.com/photo.jpg",
    "backend": ["openai", "googlevision"],
    "feature": ["descriptions", "tags"]
  }'
```

## Use a Role

Roles control how LLM backends describe your image. The default is `general`, but you can use specialized roles:

```bash
curl -X POST "https://api.visionati.com/api/fetch" \
  -H "X-API-Key: Token YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com/product.jpg", "role": "ecommerce"}'
```

See [Roles](/reference/roles/) for all options.

## Use a Custom Prompt

For full control, pass your own prompt. This overrides the role:

```bash
curl -X POST "https://api.visionati.com/api/fetch" \
  -H "X-API-Key: Token YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com/photo.jpg", "prompt": "List every plant species visible"}'
```

## What's Next

- [Authentication](/api/authentication/) for details on API key usage
- [Analyze Images & Videos](/api/analyze/) for the full endpoint reference
- [Credit System](/reference/credits/) to understand how costs work
