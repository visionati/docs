---
title: Introduction
description: What the Visionati WordPress plugin does and why you would use it.
sidebar:
  order: 1
---

The Visionati WordPress plugin generates alt text, captions, and descriptions for every image in your Media Library, powered by your choice of AI model.

## Why Use It

Most WordPress sites have hundreds of images with no alt text at all. Screen readers depend on alt text to describe images to visually impaired users. Search engines use it to understand and index your images. Missing alt text hurts both accessibility compliance and SEO rankings.

Manually writing alt text for an entire media library is tedious. Visionati generates it from the image itself, using the AI model you choose: Claude (Anthropic), Gemini (Google), OpenAI, Grok (xAI), or others. One click per image, or bulk generate for your whole library.

## What You Get

- **Alt text**: Concise, accessibility-focused descriptions using the dedicated Alt Text role
- **Captions**: Short text suitable for image captions
- **Descriptions**: Longer descriptions for the Media Library description field
- **WooCommerce product descriptions**: Short and long product descriptions generated from the featured image, with product name, categories, and attributes for context

Each field uses the right AI role automatically. Alt text gets the Alt Text role (concise, no "image of" preamble). Captions get the Caption role. WooCommerce gets the Ecommerce role. You can override any of these in the settings.

## Key Features

- **Preview before apply**: Generate a description, review it, then Apply or Discard. No surprises, no wasted changes.
- **Per-field generation**: Separate Alt Text, Caption, and Description buttons on every image in the Media Library. Each runs independently.
- **Bulk generate**: Process your entire library from a dedicated page under Media, with confirmation dialog, progress tracking, and a results log
- **Auto-generate on upload**: New images get alt text, captions, or descriptions immediately (configurable per field)
- **Pick your AI model**: Choose from Claude, Gemini, OpenAI, Grok, Jina AI, LLaVA, or BakLLaVA. One global default, with optional per-context overrides. See [AI Backends](/reference/backends/).
- **Per-context model overrides**: Use a different model for any context. Gemini as the default for fast media fields, Claude for WooCommerce product descriptions.
- **Context-aware roles**: Each field uses the most appropriate role by default (Alt Text, Caption, General, Ecommerce). Customize per context in the settings.
- **Custom prompts**: Write your own instructions for any context, overriding the selected role
- **160+ languages**: All AI-generated text respects your language setting. See [Supported Languages](/reference/languages/).
- **WooCommerce integration**: Generate short and long product descriptions from featured images. Apply each description independently or both at once. Bulk action on the Products list.
- **Debug mode**: Toggle in settings, traces to the browser console (F12). No server access needed.

## Who It's For

- **Site owners**: Fix accessibility and SEO gaps across your entire media library without writing a word
- **Content teams**: Generate alt text and captions as part of the publishing workflow, not as an afterthought
- **Ecommerce stores**: Turn product photos into product descriptions. WooCommerce integration handles short and long descriptions with product context.
- **Agencies**: Bulk generate alt text for client sites. Configure once, run across the library.
- **Multilingual sites**: Generate alt text in any of 160+ supported languages

## Requirements

- WordPress 6.0 or later
- PHP 7.4 or later
- A Visionati API key ([sign up](https://api.visionati.com/signup))
- WooCommerce (optional, for product description features)

## How It Works

Images are sent securely as base64 data directly from your server. The Visionati API never needs to reach back to your WordPress site. This works everywhere: localhost, staging sites, password-protected sites, and private networks.

Visionati uses a credit-based system. See [Credit System](/reference/credits/) for details.