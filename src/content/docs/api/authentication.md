---
title: Authentication
description: How to authenticate with the Visionati API.
sidebar:
  order: 3
---

Visionati uses API keys for authentication. If you don't have an account and API key yet, see [Getting Started](/getting-started/).

## API Key Header

Include your API key in every request using the `X-API-Key` header:

```bash
curl -X POST "https://api.visionati.com/api/fetch" \
  -H "X-API-Key: Token YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com/photo.jpg"}'
```

The header format is:

```
X-API-Key: Token YOUR_API_KEY
```

:::caution[Deprecated Header]
Older integrations may use the `Authorization` header. This still works but is deprecated to improve CORS compatibility. Use `X-API-Key` for all new integrations.

```
Authorization: Token YOUR_API_KEY
```
:::

## Getting Your API Key

Your API key is on your account page. See [Getting Started](/getting-started/) for full setup steps.
