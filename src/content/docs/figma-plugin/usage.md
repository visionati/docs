---
title: Usage
description: How to install, configure, and use the Visionati Figma plugin.
sidebar:
  order: 2
---

## Installation

1. Open the <a href="https://www.figma.com/community/plugin/1605062423418694180/visionati" target="_blank" rel="noopener">Visionati plugin page</a> on the Figma Community
2. Click **Install**
3. The plugin is now available in any Figma file under **Plugins → Visionati**

### Installing from Source

If you want to run a development build instead of the Community version:

1. Download or clone the <a href="https://github.com/visionati/visionati-figma" target="_blank" rel="noopener">plugin repository</a>
2. In Figma desktop, go to **Plugins → Development → Import plugin from manifest**
3. Select the `manifest.json` file from the plugin directory

## Setup

1. Open the plugin: **Plugins → Visionati → Open Visionati**
2. If this is your first time, the plugin opens the Settings tab automatically
3. Enter your Visionati API key. Don't have one? <a href="https://api.visionati.com/signup" target="_blank" rel="noopener">Sign up for an account</a>.
4. Pick your AI model (default: Gemini)
5. Choose your output language (default: English)
6. Optionally write a custom prompt to override the default roles
7. Click **Save Settings**

Settings are stored locally on your machine and persist between sessions.

## Generating Descriptions

### Select and Generate

1. Select one or more layers that contain images
2. In the Generate tab, choose which fields to generate using the pill toggles:
   - **Alt Text** (green, checked by default): Short, accessibility-focused descriptions
   - **Caption** (blue): Brief captions for displaying alongside images
   - **Description** (violet): Longer, detailed descriptions
3. Click **Selection** to generate for the selected layers

The plugin finds all image nodes in the selection (including images nested inside frames and groups), exports each as PNG, sends them to the Visionati API, and displays the results.

### Scan an Entire Page

Click **Scan Page** to find and process every image node on the current page. Useful for filling in alt text across an entire design file.

### Review and Apply

Results appear in the Generated Results section, grouped by node. Each node card shows:

- A thumbnail of the image
- The node name
- One entry per field, color-coded to match the annotation category

For each field, you can:

- **Apply**: Write the annotation to the node. Click the text first to edit it before applying.
- **Discard**: Remove this field from the results (only shown when the node has multiple fields).

For each node:

- **Discard**: Remove the entire node from results.
- **Apply All** (shown when multiple fields are pending): Write all pending fields for this node at once.

At the top of the results:

- **Apply All** (global): Write every pending field across all nodes.
- A summary shows the image count, field count, and how many have been applied.

### Editing Before Apply

Click the description text on any unapplied field to open an inline editor. Edit the text, then click **Apply** to write the edited version. Your edits are preserved if the results re-render (e.g., from a selection change that restores cached results).

## Working with Existing Annotations

### Current Annotations

When you select nodes that have annotations, the **Current Annotations** section appears above Generated Results. It shows every annotation on the selected nodes, color-coded by category (green for Alt Text, blue for Caption, violet for Description).

From Current Annotations you can:

- **Edit inline**: Click the annotation text to open an editor. Save or Cancel.
- **Remove one**: Click the × button on any annotation to delete it.
- **Remove All**: Click Remove All on a node to clear every annotation from that node.

### Results Caching

When you change your selection, any generated results are stashed and associated with that set of nodes. If you select the same nodes again, your results (including which fields you've already applied) are restored. This means you can click away to check something and come back without losing work.

## Menu Commands

Access these from **Plugins → Visionati**:

| Command | What It Does |
|---------|-------------|
| **Open Visionati** | Opens the plugin panel on the Generate tab. |
| **Generate for Selection** | Opens the plugin and immediately starts generating for the current selection using the default field (Alt Text). |
| **Scan All Images on Page** | Opens the plugin and immediately starts generating for every image on the page. |
| **Settings** | Opens the plugin directly to the Settings tab. |

### Relaunch Button

After you apply annotations to a node, a **Generate with Visionati** button appears on that node in Figma's design panel. Click it to re-open the plugin and update annotations.

## Settings Reference

| Setting | Description |
|---------|-------------|
| **API Key** | Your Visionati API key. Required. |
| **AI Model** | Default AI model for all fields. Default: Gemini. See [AI Backends](/reference/backends/). |
| **Language** | Output language for all generated text. Default: English. See [Supported Languages](/reference/languages/). |
| **Custom Prompt** | Optional instructions that override the default role for all fields. Leave blank to use the per-field roles (Alt Text, Caption, General). |

## Batch Tips

- **Start with Alt Text only**: It's the most common need and the fastest to review. Add Caption or Description in a second pass if needed.
- **Use Scan Page for audits**: Select nothing, click Scan Page, and the plugin finds every image node on the page. Good for catching images you missed.
- **Pick the right model for the job**: Gemini is fast and the lowest cost. Claude produces more nuanced descriptions but costs more. See [Credit System](/reference/credits/) for per-model pricing.
- **Custom prompts apply to all fields**: If you set a custom prompt, it overrides Alt Text, Caption, and Description roles equally. Clear it when you're done.
- **Large pages are batched automatically**: The plugin groups images into batches of 10 per API call. A page with 32 images and 3 fields makes 12 API calls in parallel (4 batches times 3 fields). Progress tracks completed images, not API calls.

## Credits

Each field you generate costs credits based on the AI model. Three fields on one image means three separate API calls. See [Credit System](/reference/credits/) for per-model pricing.

The status bar at the bottom of the plugin shows your remaining credit balance after each generation.