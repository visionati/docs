---
title: Features
description: Available analysis features and what they return.
sidebar:
  order: 2
---

Features control what type of analysis is performed. By default, all features are enabled.

## Available Features

| Feature | Description | Backends |
|---------|-------------|----------|
| `descriptions` | AI-generated text about the image | All [LLM backends](/reference/backends/#description-backends-llms) |
| `tags` | Object/concept labels with confidence scores | Clarifai, Imagga, Google Vision, Rekognition |
| `colors` | Dominant colors with hex values and RGB | Google Vision |
| `faces` | Face detection with emotions, age, gender | Google Vision, Rekognition |
| `texts` | OCR text extraction with bounding boxes | Google Vision |
| `nsfw` | Content moderation scores | Clarifai, Imagga, Google Vision, Rekognition |
| `brands` | Logo and brand detection | Google Vision |

## Selecting Features

To request only specific features, use the `feature` parameter:

```bash
# Only get tags and descriptions
curl -X POST "https://api.visionati.com/api/fetch" \
  -H "X-API-Key: Token YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com/photo.jpg", "feature": ["tags", "descriptions"]}'
```

Requesting fewer features reduces credit cost since only the relevant backends are charged.

## All Valid Feature Values

`brands`, `colors`, `descriptions`, `faces`, `nsfw`, `tags`, `texts`
