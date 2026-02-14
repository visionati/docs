---
title: Usage
description: How to install, configure, and use the Visionati WordPress plugin.
sidebar:
  order: 2
---

## Installation

1. Upload the `visionati` folder to `/wp-content/plugins/`
2. Activate the plugin through the Plugins menu
3. Go to **Settings → Visionati**

## Setup

1. Enter your Visionati API key and click **Verify** to confirm the connection. Don't have one? <a href="https://api.visionati.com/signup" target="_blank" rel="noopener">Sign up for an account</a>.
2. Pick your AI model under **API Settings**. The default is Gemini. Claude produces the best results.
3. Choose your output language (default: English)
4. Review context settings if you want different roles or models for different fields

## Generating Alt Text, Captions, and Descriptions

Open any image in the Media Library (grid view or list view). Below the standard fields you'll see three Visionati buttons:

- **Alt Text**: Generates concise, accessibility-focused alt text using the Alt Text role
- **Caption**: Generates a short caption using the Caption role
- **Description**: Generates a longer description using the General role (or your configured role)

Click any button to generate that field. All three buttons work independently — you can click all three and they run in parallel. The generated text fills the corresponding field automatically.

Each button makes a separate API call with the appropriate role for that context. You can change which role each context uses in the settings.

## Bulk Generate

Go to **Media → Bulk Generate** to process images in bulk.

1. Check which fields to generate: **Alt Text** (checked by default), **Caption**, **Description**
2. Click **Start**
3. Confirm the number of images to process (the dialog warns if overwrite is enabled)
4. Watch the progress bar and results log as each image is processed
5. Click **Stop** at any time to pause. Click **Resume** to continue — previous log entries and counters are preserved.

The page shows counts of images missing each field. Only images that need work for the selected fields are queued. Images that already have content for all selected fields are skipped unless you enable **Overwrite Existing** for those fields in the settings.

You can also select images in the Media Library list view and choose **Generate with Visionati** from the Bulk Actions dropdown. This redirects to the Bulk Generate page with those images pre-queued.

## Auto-Generate on Upload

In **Settings → Visionati → Automation**, check which fields to auto-generate when new images are uploaded:

- **Alt Text**
- **Caption**
- **Description**

Each checked field makes a separate API call with the appropriate role. When multiple fields are enabled, they run in parallel, so three fields take roughly the same time as one. Leave all unchecked to disable auto-generation.

## Settings Reference

### API Connection

| Setting | Description |
|---------|-------------|
| **API Key** | Your Visionati API key. Click Verify to test the connection. |

### API Settings

| Setting | Description |
|---------|-------------|
| **AI Model** | Global default AI model for all contexts. Default: Gemini. See [AI Backends](/reference/backends/). |
| **Language** | Output language for all generated text. See [Supported Languages](/reference/languages/). |

### Context Settings

Override the default role and AI model for each context. Each row has a role dropdown and an optional model dropdown. The model defaults to the global AI Model from API Settings.

| Context | Default Role | Default Model | Description |
|---------|-------------|---------------|-------------|
| **Alt Text** | Alt Text | Default | Short, accessibility-focused descriptions. |
| **Caption** | Caption | Default | Short captions for image captions. |
| **Media Description** | General | Default | Longer descriptions for the description field. |
| **WooCommerce** | Ecommerce | Default | Product descriptions from featured images. |

For example, you might use Gemini as the global default for fast, cheap media field generation, and override WooCommerce to Claude for higher quality product descriptions.

### Custom Prompts

Optional prompts that override the role for each context. Leave blank to use the selected role.

| Setting | Description |
|---------|-------------|
| **Alt Text Prompt** | Overrides the alt text role. |
| **Caption Prompt** | Overrides the caption role. |
| **Media Description Prompt** | Overrides the media description role. |
| **WooCommerce Prompt** | Overrides the WooCommerce role. Supports placeholders: `{product_name}`, `{categories}`, `{price}`. |

### Automation

| Setting | Description |
|---------|-------------|
| **Auto-generate on Upload** | Which fields to generate when images are uploaded (Alt Text, Caption, Description). |
| **Overwrite Existing** | Which fields can be overwritten during bulk and auto generation. Off by default. |
| **WooCommerce Product Context** | Include product name, categories, and attributes in WooCommerce prompts. On by default. |

## WooCommerce Integration

When WooCommerce is active, the plugin adds a **Visionati** meta box to the product edit screen.

### Single Product

1. Set a featured image on the product
2. Click **Generate Descriptions** in the Visionati meta box
3. Preview the short and long descriptions. Each has its own **Apply** button.
4. Click **Apply** on either description to save just that field, or **Apply to Product** to save both. **Discard** clears everything.

The plugin makes two API calls per product: one for the short description (2-3 sentences, plain text) and one for the long description (multiple paragraphs, HTML formatted). Both run in parallel, so generation is fast.

Product context (name, categories, attributes, price) is included in the prompt by default for better descriptions. Disable this in **Settings → Visionati → Automation → WooCommerce Product Context**.

### Bulk Product Descriptions

Go to **Products → Bulk Descriptions**, or select products in the WooCommerce Products list and choose **Generate descriptions with Visionati** from the Bulk Actions dropdown. Only products with featured images that are missing descriptions are queued. Products that already have both descriptions are skipped (unless overwrite is enabled).

During bulk processing, alt text for the featured image is also generated if missing.

## Credits

Each field generation is one API call with the selected AI model. WooCommerce product descriptions use two API calls per product (short + long), plus one more if alt text is generated for the featured image.

See [Credit System](/reference/credits/) for pricing details.

## Supported Image Formats

JPEG, PNG, GIF, WebP, and BMP. Maximum file size: 20MB.