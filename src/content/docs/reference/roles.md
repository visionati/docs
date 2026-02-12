---
title: Roles
description: Predefined description personas for different use cases.
sidebar:
  order: 3
---

Roles control how LLM backends describe your images. Each role uses a specialized prompt tailored for a specific use case. Most integrations start with `general` and switch to a specialized role when a specific output format is needed.

## Available Roles

| Role | Description |
|------|-------------|
| `general` | The default. Standard image descriptions covering essential elements and overall scene. |
| `alttext` | Concise, accessibility-focused alt text. A short phrase or single sentence describing essential content. |
| `artist` | Artistic analysis: composition, color palette, mood, and techniques. |
| `caption` | Short, concise captions. |
| `comedian` | Witty, humorous descriptions. |
| `critic` | Detailed critical analysis of composition, technique, and emotional impact. |
| `ecommerce` | Product descriptions for online stores. Highlights features, benefits, and selling points. |
| `inspector` | The most detailed, thorough inspection. Describes every element in the image. |
| `promoter` | Marketing-focused. Emphasizes positive aspects and unique qualities. |
| `prompt` | Generates prompts to recreate the image in image generation tools. |
| `realtor` | Real estate property descriptions. Covers layout, style, and selling points. |
| `tweet` | Tweet-formatted with hashtags and emojis. |

## Custom Prompts

Instead of using a predefined role, you can pass a `prompt` parameter with your own instructions. The custom prompt overrides the selected role.

```bash
curl -X POST "https://api.visionati.com/api/fetch" \
  -H "X-API-Key: Token YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com/photo.jpg", "prompt": "List every plant species visible"}'
```

:::note
Long prompts (over 2500 characters) incur an additional credit charge per description backend. See [Credit System](/reference/credits/) for details.
:::
