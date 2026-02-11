---
title: AI Backends
description: Available AI services and their capabilities.
sidebar:
  order: 1
---

Visionati aggregates multiple AI services. Each backend has different strengths and costs.

## Description Backends (LLMs)

These generate natural language descriptions of your images.

| Backend | Company | Cost |
|---------|---------|------|
| `claude` | Anthropic | 3 cents/description |
| `openai` | OpenAI | 2 cents/description |
| `grok` | xAI | 2 cents/description |
| `gemini` | Google | 1 cent/description |
| `jinaai` | Jina AI | 1 cent/description |
| `llava` | Replicate | 1 cent/description |
| `bakllava` | Replicate | 1 cent/description |

## Detection Backends (Computer Vision)

These detect tags, faces, colors, text, brands, and NSFW content.

| Backend | Tags | NSFW | Faces | Colors | Brands | Texts |
|---------|------|------|-------|--------|--------|-------|
| `clarifai` | 0.15 cents | 0.15 cents | — | — | — | — |
| `googlevision` | 0.2 cents | 0.2 cents | 0.2 cents | 0.2 cents | 0.2 cents | 0.2 cents |
| `imagga` | 0.15 cents | 0.15 cents | — | — | — | — |
| `rekognition` | 0.15 cents | 0.15 cents | 0.15 cents | — | — | — |

## Defaults

When no `backend` parameter is specified, the following backends are enabled:

**Claude, Gemini, Grok, OpenAI, Clarifai, Google Vision, Rekognition**

To use a different set, pass the `backend` or `backend[]` parameter with the values you want. Jina AI, LLaVA, BakLLaVA, and Imagga are available but not enabled by default and must be explicitly requested.

## All Valid Backend Values

`bakllava`, `clarifai`, `claude`, `gemini`, `googlevision`, `grok`, `imagga`, `jinaai`, `llava`, `openai`, `rekognition`
