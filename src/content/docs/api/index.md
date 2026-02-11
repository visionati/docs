---
title: Introduction
description: What the Visionati API is and why you would use it.
sidebar:
  order: 1
---

The Visionati API lets you analyze images and videos with multiple AI services through a single integration. Instead of building and maintaining connections to ten different providers, you send one request and get results from all of them.

## Why Use It

Every AI service has blind spots. Google Vision might catch the landmark but miss the mood. OpenAI nails the description but doesn't extract text. Clarifai tags objects that others overlook. The Visionati API runs them all and gives you every perspective in one response.

One API key, one endpoint, one response format. You pick which backends and features to enable, and only pay for what you use.

## What You Get

- **Descriptions**: Natural language text from multiple LLMs (Claude, Gemini, Grok, OpenAI, and more), each with its own take on the image
- **Tags**: Object and concept labels with confidence scores from computer vision backends
- **Colors**: Dominant colors with hex values, RGB, and pixel fractions
- **Faces**: Face detection with emotions, age, and gender
- **Texts**: OCR text extraction with bounding boxes
- **NSFW**: Content moderation scores from multiple backends
- **Brands**: Logo and brand detection

All returned as structured JSON.

## Who It's For

- **Ecommerce platforms**: Generate product descriptions, auto-tag catalog images, and flag inappropriate user uploads at scale
- **Real estate tech**: Turn property photos into listing descriptions, tag room types, and check photo quality
- **Media companies**: Tag and caption photos for asset management, moderate user-submitted content, and generate accessible alt text
- **SaaS products**: Add image understanding to your app without managing multiple AI vendor relationships
- **Content platforms**: Automate moderation, generate searchable metadata, and surface content insights
- **Accessibility tools**: Generate alt text and image descriptions in over 160 languages

## Base URL

```
https://api.visionati.com
```
