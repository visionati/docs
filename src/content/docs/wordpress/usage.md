---
title: Usage
description: How to install, configure, and use the Visionati WordPress plugin.
sidebar:
  order: 2
---

## Installation

1. Download the latest release from <a href="https://github.com/visionati/visionati-wordpress" target="_blank" rel="noopener">GitHub</a> (click **Code → Download ZIP**)
2. In WordPress, go to **Plugins → Add New Plugin → Upload Plugin**
3. Upload the ZIP file and click **Install Now**
4. Activate the plugin
5. Go to **Settings → Visionati**

## Setup

1. Enter your Visionati API key and click **Verify** to confirm the connection. Don't have one? <a href="https://api.visionati.com/signup" target="_blank" rel="noopener">Sign up for an account</a>.
2. Pick your AI model under **API Settings**. The default is Gemini.
3. Choose your output language (default: English).
4. Review context settings if you want different roles or models for different fields.

## Generating Alt Text, Captions, and Descriptions

Open any image in the Media Library (grid view or list view). Below the standard fields you'll see three Visionati buttons:

- **Alt Text**: Concise, accessibility-focused alt text
- **Caption**: A short caption
- **Description**: A longer description

Click any button to generate. A preview appears with the result. Review it, then **Apply** to save or **Discard** to throw it away. All three buttons work independently, and you can generate multiple fields at once.

You can change which role and model each field uses in the settings.

## Bulk Generate

Go to **Media → Bulk Generate** to process images in bulk.

1. Check which fields to generate: **Alt Text** (checked by default), **Caption**, **Description**
2. Click **Start**
3. Confirm the number of images to process (warns if overwrite is enabled)
4. Watch the progress bar and results log
5. Click **Stop** at any time to pause. Click **Resume** to continue where you left off.

Only images missing content for the selected fields are queued. Images that already have all selected fields are skipped unless you enable **Overwrite Existing** in the settings. The page shows counts of how many images are missing each field.

You can also select images in the Media Library list view and choose **Generate with Visionati** from the Bulk Actions dropdown. This redirects to the Bulk Generate page with those images pre-queued.

## Auto-Generate on Upload

In **Settings → Visionati → Automation**, check which fields to auto-generate when new images are uploaded:

- **Alt Text**
- **Caption**
- **Description**

When multiple fields are enabled, they run in parallel, so three fields take roughly the same time as one. Leave all unchecked to disable auto-generation.

## Settings Reference

### API Connection

| Setting | Description |
|---------|-------------|
| **API Key** | Your Visionati API key. Click Verify to test the connection. |

### API Settings

| Setting | Description |
|---------|-------------|
| **AI Model** | Default AI model for all fields. Default: Gemini. See [AI Backends](/reference/backends/). |
| **Language** | Output language for all generated text. See [Supported Languages](/reference/languages/). |

### Context Settings

Override the default role and AI model for individual fields. Each row has a role dropdown and an optional model dropdown. When the model is set to Default, it uses the global AI Model above.

| Context | Default Role | Description |
|---------|-------------|-------------|
| **Alt Text** | Alt Text | Short, accessibility-focused descriptions. |
| **Caption** | Caption | Brief captions for displaying below images. |
| **Media Description** | General | Longer descriptions for the description field. |
| **WooCommerce** | Ecommerce | Product descriptions from featured images. |

:::note
The WooCommerce row and related settings below only appear when WooCommerce is active.
:::

### Custom Prompts

Write your own instructions for any field. When set, the custom prompt overrides the selected role. Leave blank to use the role.

| Setting | Description |
|---------|-------------|
| **Alt Text Prompt** | Overrides the Alt Text role. |
| **Caption Prompt** | Overrides the Caption role. |
| **Media Description Prompt** | Overrides the Media Description role. |
| **WooCommerce Prompt** | Overrides the Ecommerce role. Supports `{product_name}`, `{categories}`, and `{price}` placeholders. |

### Automation

| Setting | Description |
|---------|-------------|
| **Auto-generate on Upload** | Which fields to generate when images are uploaded (Alt Text, Caption, Description). |
| **Overwrite Existing** | Which fields can be overwritten during bulk and auto generation. Off by default. |
| **WooCommerce Product Context** | Include product name, categories, attributes, and price in WooCommerce prompts. On by default. |

## Credits

Each field you generate costs credits based on the AI model. Gemini costs 1 credit, Claude costs 3. See [Credit System](/reference/credits/) for full details.

## Supported Image Formats

JPEG, PNG, GIF, WebP, and BMP. Maximum file size: 20MB.