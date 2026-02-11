---
title: Async Responses
description: How to poll for results from batch and video requests.
sidebar:
  order: 5
---

When you submit multiple images, multiple files, or a video, the API processes them asynchronously. You get back a `response_uri` to poll for results.

## Endpoint

```
GET https://api.visionati.com/api/response/<request_id>
```

## When You Get an Async Response

- Multiple `url[]` parameters
- Multiple `file[]` parameters
- Video URLs (YouTube, Vimeo, X, or direct video files)

## Polling for Results

```bash
curl "https://api.visionati.com/api/response/267f99ce-c797-4855-807f-21b204edb7ed" \
  -H "X-API-Key: Token YOUR_API_KEY"
```

### Processing

While the request is still being processed:

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
  "status": "processing"
}
```

### Complete

When processing is complete, the response includes the full `all` object with results for each asset, identical to a synchronous single-image response. The `credits_paid` and `credits` fields are also included.

Poll the `response_uri` until the `status` field is no longer `"processing"` and the `all` key is present.
