---
title: Analyze Images & Videos
description: The main API endpoint for analyzing images and videos.
sidebar:
  order: 4
---

## Endpoint

```
POST https://api.visionati.com/api/fetch
```

GET requests with query parameters are also supported, but POST with a JSON body is recommended.

## Parameters

| Parameter | Required | Default | Description |
|-----------|----------|---------|-------------|
| `url` | No | — | URL of the image or video to analyze. Pass a string for one, or an array for multiple. Videos and multiple URLs return an async response. |
| `file` | No | — | Base64 value or Data URI of an image/video file. Pass a string for one, or an array for multiple. |
| `file_name` | No | — | Uploaded file name. String or array. |
| `backend` | No | all defaults | AI backend(s) to use. String or array. See [AI Backends](/reference/backends/) for valid values. |
| `feature` | No | all | Feature(s) to enable. String or array. See [Features](/reference/features/) for valid values. |
| `role` | No | general | Description persona. See [Roles](/reference/roles/) for valid values. |
| `language` | No | English | Output language for descriptions. See [Supported Languages](/reference/languages/). If unsupported by the upstream provider, results are returned in English. |
| `prompt` | No | — | Custom text prompt for descriptions. Overrides `role`. |
| `tag_score` | No | 0.9 | Minimum tag confidence score. Float between 0 and 1. |
| `capture_interval` | No | 1 | Seconds between video frame captures. Integer greater than 0. |
| `max_frames` | No | 3 | Maximum video frames to process. Set to 0 for no limit. |

## Limits

- **File size**: 20MB maximum per file
- **URL length**: 2048 characters maximum for the request query string

## Single Image Request

```bash
curl -X POST "https://api.visionati.com/api/fetch" \
  -H "X-API-Key: Token YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com/photo.jpg"}'
```

### Response

```json
{
  "request_id": "5ec7ecc6-8a61-417b-b7bb-1aa00b9ed7a7",
  "user_id": 1,
  "urls": ["https://example.com/photo.jpg"],
  "files": 0,
  "file_names": [],
  "features": [],
  "backends": [],
  "role": "general",
  "tag_score": 0.9,
  "capture_interval": 0,
  "max_frames": 3,
  "credits_paid": 3,
  "credits": 1209,
  "all": {
    "assets": [
      {
        "name": "https://example.com/photo.jpg",
        "tags": {
          "sculpture": [
            { "name": "sculpture", "score": 0.9821, "source": "clarifai" },
            { "name": "sculpture", "score": 0.8460, "source": "googlevision" }
          ],
          "temple": [
            { "name": "temple", "score": 0.9730, "source": "clarifai" },
            { "name": "temple", "score": 0.7803, "source": "googlevision" }
          ]
        },
        "colors": {
          "#9c735a": [
            {
              "hex": "#9c735a",
              "score": 0.4203,
              "pixel_fraction": 0.0764,
              "red": 156,
              "green": 115,
              "blue": 90,
              "source": "googlevision"
            }
          ]
        },
        "nsfw": [
          { "label": "sfw", "score": 0.9802, "source": "clarifai" },
          { "label": "nsfw", "score": 0.0197, "source": "clarifai" },
          { "label": "adult", "likelihood": "UNLIKELY", "source": "googlevision" },
          { "label": "violence", "likelihood": "UNLIKELY", "source": "googlevision" }
        ],
        "descriptions": [
          {
            "description": "A serene Buddha statue seated in the lotus position within an intricately carved wooden mandorla...",
            "source": "openai"
          }
        ]
      }
    ],
    "errors": []
  }
}
```

### Response Fields

| Field | Description |
|-------|-------------|
| `request_id` | Unique identifier for this request |
| `user_id` | Your user ID |
| `urls` | The URLs you submitted |
| `files` | Number of files submitted |
| `features` | Features you requested (empty means all) |
| `backends` | Backends you requested (empty means all defaults) |
| `role` | The role used for descriptions |
| `tag_score` | The minimum tag score filter applied |
| `credits_paid` | Credits charged for this request |
| `credits` | Your remaining credit balance |
| `all.assets` | Array of analyzed images/videos |
| `all.errors` | Any errors from individual backends |

### Asset Fields

Each asset in `all.assets` contains:

| Field | Description |
|-------|-------------|
| `name` | The URL or filename of the analyzed image |
| `tags` | Object of detected tags grouped by name, each with score and source |
| `colors` | Dominant colors with hex values, RGB, scores, and pixel fractions |
| `nsfw` | Content moderation scores from each detection backend |
| `descriptions` | AI-generated descriptions from each LLM backend |
| `faces` | Detected faces with emotions, age, and gender (if `faces` feature enabled) |
| `texts` | OCR-extracted text with bounding polygons (if `texts` feature enabled) |
| `brands` | Detected logos/brands with confidence scores (if `brands` feature enabled) |

## Batch Request

When you send multiple URLs or files, the API returns an async response with a `response_uri` to poll for results.

```bash
curl -X POST "https://api.visionati.com/api/fetch" \
  -H "X-API-Key: Token YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url": ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"]}'
```

### Response

```json
{
  "request_id": "267f99ce-c797-4855-807f-21b204edb7ed",
  "user_id": 1,
  "urls": ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
  "files": 0,
  "file_names": [],
  "features": [],
  "backends": [],
  "role": "general",
  "tag_score": 0.9,
  "capture_interval": 0,
  "max_frames": 3,
  "success": true,
  "response_uri": "https://api.visionati.com/api/response/267f99ce-c797-4855-807f-21b204edb7ed"
}
```

Use the `response_uri` to poll for results. See [Async Responses](/api/async-responses/) for details.

## Video Requests

Videos are always processed asynchronously. The API extracts frames at the specified `capture_interval` and analyzes each frame as a separate image.

See [Video Processing](/reference/video-processing/) for details on how video analysis works.
