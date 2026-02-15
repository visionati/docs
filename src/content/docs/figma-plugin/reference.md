---
title: Reference
description: Field types, annotation architecture, supported images, and troubleshooting for the Visionati Figma plugin.
sidebar:
  order: 3
---

## Field Types

The plugin generates three types of image copy. Each maps to a fixed AI role, an annotation category color, and a use case.

| Field | Role | Annotation Color | Use Case |
|-------|------|-------------------|----------|
| **Alt Text** | Alt Text | Green | Short descriptions for screen readers and accessibility. The most common need. |
| **Caption** | Caption | Blue | Brief text for displaying alongside images in layouts or documentation. |
| **Description** | General | Violet | Longer, detailed descriptions for content pages, asset libraries, or documentation. |

You can generate any combination of fields at once. Each field gets its own API call with its own role. A custom prompt (set in Settings) overrides all roles equally.

## How Annotations Work

The plugin writes results using Figma's first-party [Annotations API](https://www.figma.com/plugin-docs/api/Annotation/), not component descriptions or text layers. This means:

- **Visible in Dev Mode**: Developers see annotations during handoff without needing the plugin installed. Each annotation is color-coded by its category (green, blue, violet).
- **Visible in the design panel**: On paid Figma plans, annotations appear in the native Inspect panel when a node is selected. On free plans, use the plugin's Current Annotations section to read them back.
- **No document structure changes**: The plugin does not convert images to components, add hidden text layers, or modify the layer hierarchy in any way.
- **Per-field replace**: Applying a Caption does not touch an existing Alt Text annotation on the same node. Each field is matched by its annotation category ID. Only the matching category is replaced; all other annotations (including manually-added ones) are preserved.
- **Multiple annotations per node**: A single image node can have all three field annotations simultaneously, each with its own color.

### Annotation Format

Each annotation is written as Markdown with a bold prefix:

```
**ALT TEXT**
A golden retriever sitting on a wooden dock at sunset.
```

The prefix (`ALT TEXT`, `CAPTION`, or `DESCRIPTION`) makes the field type immediately visible when reading annotations in Dev Mode or the design panel.

### Annotation Categories

The plugin creates three annotation categories in the document on first use:

| Category | Color | Created When |
|----------|-------|-------------|
| Alt Text | Green | First time you generate or apply an Alt Text field |
| Caption | Blue | First time you generate or apply a Caption field |
| Description | Violet | First time you generate or apply a Description field |

Categories persist in the document. If you delete a category through Figma's UI, the plugin recreates it the next time you generate that field type.

### Relaunch Buttons

After applying annotations to a node, the plugin sets a relaunch button on that node. This adds a **Generate with Visionati** entry to the node's context in Figma's design panel, making it easy to re-open the plugin and update annotations later.

## Supported Images

The plugin processes any node that has at least one visible image fill. This includes:

- Rectangle, ellipse, and polygon nodes with an image fill
- Frames with an image fill (background images)
- Images nested inside groups, frames, and components

The plugin traverses descendants recursively, so selecting a top-level frame processes all images nested inside it.

### Export and Resolution

Images are exported as PNG via Figma's `exportAsync` API. The longest dimension is capped at 2048 pixels. AI models internally resize to roughly this range anyway, so higher resolution would increase upload size without improving results.

A 4000×3000 image exports at 2048×1536 (about 4x fewer pixels than the original). This keeps payloads manageable when processing large batches.

### Formats

Any image that Figma can render as a fill is supported. This includes JPEG, PNG, GIF, WebP, and any other format Figma accepts. The plugin exports the rendered result as PNG regardless of the source format.

SVG nodes that don't have image fills are not detected. Vector artwork without a raster image fill is skipped.

## Batching

When processing multiple images, the plugin groups them into batches of 10 per API call. For each selected field, each batch gets its own API call. All calls run in parallel.

For example, 32 images with 3 fields selected:
- 4 batches (10 + 10 + 10 + 2 images)
- 3 fields per batch
- 12 API calls total, all in parallel

The progress bar tracks completed images (not API calls). If one batch fails, others continue. Partial results from successful batches are preserved and shown in the results panel.

## Credits

Each field on each image costs credits based on the AI model. A single image with all three fields selected makes three API calls.

See [Credit System](/reference/credits/) for per-model pricing and [AI Backends](/reference/backends/) for model details.

The status bar at the bottom of the plugin shows your remaining credit balance after each generation.

## Troubleshooting

| Problem | Cause | Fix |
|---------|-------|-----|
| "API key is required" | No API key entered in Settings. | Open Settings, enter your key, click Save. |
| "No images found in the selection" | The selected layers don't contain any nodes with image fills. | Select a frame, group, or individual node that has an image fill. Vector shapes and text nodes without image fills are skipped. |
| "No images found on this page" | The current page has no nodes with image fills. | Switch to a page that contains images, or add images to the current page. |
| "Failed to export any images" | Figma couldn't export the selected nodes as PNG. | Try selecting a different node. Very large or deeply nested nodes occasionally fail to export. |
| Results show wrong image for a node | The API's file name transformation didn't match back to the correct node. | This is rare. Try processing fewer images at once. |
| A field shows "No descriptions returned" | The AI model produced empty output for that role. | Try a different model in Settings. Some models handle certain roles better than others. |
| "Timed out waiting for results" | The API took longer than 60 seconds to process. | Try again. Large batches or complex images take longer. If it persists, try a smaller selection or a different model. |
| Annotations don't appear in the design panel | Annotation visibility requires a paid Figma plan. | Use the plugin's Current Annotations section to view annotations. They are still written to the document and visible in Dev Mode. |
| Annotations from a previous run are missing | Someone deleted the annotation category, which removes all annotations in that category. | Regenerate the field. The plugin recreates the category automatically. |
| Plugin opens to Settings on every launch | No API key is saved. | Enter your key and click Save. The key is stored locally on your machine via Figma's client storage. |
| "Node not found" when clicking Apply | The node was deleted or moved to a different page after generating. | Regenerate for the current selection. |