---
title: Usage
description: How to use the Visionati Content Analyzer.
sidebar:
  order: 2
---

## Step by Step

1. **Open** the <a href="https://api.visionati.com/analyze" target="_blank" rel="noopener">Content Analyzer</a> and log in
2. **Upload** an image or video using the file picker, paste a URL, or take a photo with your phone camera. You can upload up to 5 images at once.
3. **Pick a role** from the dropdown (or toggle the custom prompt field to write your own)
4. **Click Submit** and wait for results
5. **Browse results**: flip between descriptions with the arrows, review tags and NSFW flags
6. **Copy or share**: hit the copy icon to grab a description, or tweet it directly

## Input Options

| Method | Details |
|--------|---------|
| File upload | Up to 5 images or a video. Max 20MB per file. |
| URL | Paste any image or video URL. Supports YouTube, Vimeo, X, and direct links. |
| Camera | On mobile, capture a photo or video directly. |

## Choosing a Role

The role dropdown controls how LLM backends write their descriptions. The default is **General**. See [Roles](/reference/roles/) for all options.

## Custom Prompts

Toggle the prompt field to enter your own instructions. This overrides the selected role. For example:

- "List every plant species visible in this image"
- "Describe this product for a luxury fashion audience"
- "What architectural style is this building?"

## Configuring Backends

AI backends are configured in your profile settings, not at analysis time. Click the edit button on your profile to enable or disable specific services.

See [AI Backends](/reference/backends/) for the full list.

## Limits

- Up to **5 images** per analysis
- **1 frame** extracted for video
- Models configured in **profile settings**
- Role and prompt selected **at analysis time**
