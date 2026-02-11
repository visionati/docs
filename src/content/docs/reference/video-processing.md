---
title: Video Processing
description: How Visionati processes and analyzes videos.
sidebar:
  order: 5
---

Visionati analyzes videos by extracting frames at regular intervals and analyzing each frame as a separate image. This is frame-based analysis, not continuous video understanding.

## How It Works

1. Videos are downloaded from the source URL or decoded from the uploaded file
2. Frames are extracted at the specified `capture_interval` (default: every 1 second)
3. Each frame is analyzed as a separate image using your selected backends and features
4. Results are aggregated per frame in the response

## Supported Sources

### URLs

| Source | Examples |
|--------|----------|
| YouTube | `https://youtube.com/watch?v=...`, `https://youtu.be/...` |
| Vimeo | `https://vimeo.com/...` |
| X (Twitter) | `https://x.com/.../status/...` |
| Direct URLs | `.mp4`, `.webm`, `.mov`, `.mkv`, `.avi` files |

URLs have no file size limit. This is how you process longer videos: point the API at a YouTube or Vimeo link and control costs with `max_frames`.

### File Uploads

You can also upload video files directly using the `file` parameter (base64 or data URI). Supported formats: mp4, webm, mov, mkv, avi.

Uploaded files are limited to **20MB**, so this is best suited for short clips. For longer videos, use a URL instead.

## Parameters

| Parameter | Default | Description |
|-----------|---------|-------------|
| `capture_interval` | 1 | Seconds between frame captures |
| `max_frames` | 3 | Maximum frames to process. Set to 0 for no limit. |

:::caution
Setting `max_frames` to 0 removes the frame limit. A 10-minute video at `capture_interval=1` would extract 600 frames, each charged separately. Use this with care.
:::

## Async Processing

All video requests are processed asynchronously. The initial response includes a `response_uri` to poll for results. See [Async Responses](/api/async-responses/).

## Cost

Each extracted frame is charged as a separate image. A 30-second video with `capture_interval=1` and `max_frames=3` would analyze 3 frames, each charged at the normal per-image rate.

See [Credit System](/reference/credits/) for how per-image costs are calculated.

## Content Analyzer

The <a href="https://api.visionati.com/analyze" target="_blank" rel="noopener">Content Analyzer</a> accepts video uploads and URLs but extracts only **1 frame**. For full control over `capture_interval` and `max_frames`, use the API directly.