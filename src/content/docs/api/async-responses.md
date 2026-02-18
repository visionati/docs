---
title: Async Responses
description: How to poll for results from file upload, batch, and video requests.
sidebar:
  order: 5
---

When the API can't return results immediately, it processes your request asynchronously. You get back a `response_uri` to poll for results.

## When You Get an Async Response

- A single `file` parameter (base64 or Data URI)
- Multiple `url[]` parameters
- Multiple `file[]` parameters
- Video URLs (YouTube, Vimeo, X, or direct video files)

The only request type that returns results immediately (synchronous) is a **single image URL**. Everything else is async.

:::caution
Base64 file uploads are **always async**, even for a single image. This is the most common integration mistake. If you're uploading files instead of passing URLs, your code must handle polling.
:::

## How to Detect an Async Response

Check the `status` field in the response JSON:

| `status` Value | Meaning |
|----------------|---------|
| `"completed"` | Results are ready in the `all` key |
| `"queued"` | Request is waiting to be processed (poll `response_uri`) |
| `"processing"` | Request is being processed (keep polling) |
| `"failed"` | Request failed (check the `error` field for details) |

### Async Response

```json
{
  "request_id": "267f99ce-c797-4855-807f-21b204edb7ed",
  "status": "queued",
  "success": true,
  "response_uri": "https://api.visionati.com/api/response/267f99ce-c797-4855-807f-21b204edb7ed"
}
```

### Sync Response

```json
{
  "request_id": "5ec7ecc6-8a61-417b-b7bb-1aa00b9ed7a7",
  "status": "completed",
  "credits_paid": 3,
  "credits": 1209,
  "all": {
    "assets": [...]
  }
}
```

## Endpoint

```
GET https://api.visionati.com/api/response/<request_id>
```

## Polling for Results

Poll the `response_uri` until the `status` field is `"completed"` or `"failed"`.

**Recommended polling interval: 2 seconds.** The polling endpoint is lightweight (a Redis lookup), so 1-2 second intervals are fine.

:::note
Async results are available for **24 hours** after the request completes. After that, the polling endpoint returns a "not found" error. In practice this is never an issue since clients poll within seconds, but long-running batch workflows should retrieve results promptly.
:::

### Processing

While the request is still being processed, `status` will be `"queued"` or `"processing"`:

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

When `status` is `"completed"`, the response includes the full `all` object with results for each asset, identical to a synchronous single-image response. The `credits_paid` and `credits` fields are also included.

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
  "status": "completed",
  "credits_paid": 6,
  "credits": 1203,
  "all": {
    "assets": [
      {
        "name": "https://example.com/photo1.jpg",
        "tags": {},
        "descriptions": [],
        "nsfw": []
      },
      {
        "name": "https://example.com/photo2.jpg",
        "tags": {},
        "descriptions": [],
        "nsfw": []
      }
    ],
    "errors": []
  }
}
```

## Code Examples

Every example below uses a single `analyze` function that handles both sync and async responses automatically. The key logic: check `status` — if it's `"completed"`, you're done. If it's `"failed"`, raise an error. Otherwise, poll until it is.

### curl

```bash
# Submit the request
curl -X POST "https://api.visionati.com/api/fetch" \
  -H "X-API-Key: Token YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url": ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"]}'

# Poll for results (repeat every 2 seconds until status is "completed")
curl "https://api.visionati.com/api/response/267f99ce-c797-4855-807f-21b204edb7ed" \
  -H "X-API-Key: Token YOUR_API_KEY"
```

### Python

```python
import requests
import time

API_KEY = "YOUR_API_KEY"
BASE_URL = "https://api.visionati.com"
HEADERS = {
    "X-API-Key": f"Token {API_KEY}",
    "Content-Type": "application/json",
}

def analyze(payload):
    """Send a request and return results, handling async polling automatically."""
    response = requests.post(f"{BASE_URL}/api/fetch", json=payload, headers=HEADERS)
    data = response.json()

    # Pre-processing error (no status field)
    if "error" in data and "status" not in data:
        raise Exception(data["error"])

    # Sync response or immediate failure
    if data.get("status") == "completed":
        return data
    if data.get("status") == "failed":
        raise Exception(data.get("error", "Request failed"))

    # Async response — poll for results
    response_uri = data.get("response_uri")
    if not response_uri:
        raise Exception(f"Unexpected response: {data}")

    while True:
        time.sleep(2)
        poll = requests.get(response_uri, headers=HEADERS)
        result = poll.json()
        if result.get("status") == "completed":
            return result
        if result.get("status") == "failed":
            raise Exception(result.get("error", "Request failed"))

# Single URL (sync)
result = analyze({"url": "https://example.com/photo.jpg"})
print(result["all"]["assets"][0]["descriptions"])

# Multiple URLs (async — handled automatically)
result = analyze({
    "url": ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"]
})
for asset in result["all"]["assets"]:
    print(asset["name"], asset["descriptions"])

# Base64 file upload (always async — handled automatically)
import base64

with open("photo.jpg", "rb") as f:
    encoded = base64.b64encode(f.read()).decode("utf-8")

result = analyze({"file": encoded, "file_name": "photo.jpg"})
print(result["all"]["assets"][0]["descriptions"])
```

### JavaScript (Node.js)

```javascript
const API_KEY = "YOUR_API_KEY";
const BASE_URL = "https://api.visionati.com";
const HEADERS = {
  "X-API-Key": `Token ${API_KEY}`,
  "Content-Type": "application/json",
};

async function analyze(payload) {
  // Send the request
  const response = await fetch(`${BASE_URL}/api/fetch`, {
    method: "POST",
    headers: HEADERS,
    body: JSON.stringify(payload),
  });
  const data = await response.json();

  // Pre-processing error (no status field)
  if (data.error && !data.status) throw new Error(data.error);

  // Sync response or immediate failure
  if (data.status === "completed") return data;
  if (data.status === "failed") throw new Error(data.error || "Request failed");

  // Async response — poll for results
  const responseUri = data.response_uri;
  if (!responseUri) {
    throw new Error(`Unexpected response: ${JSON.stringify(data)}`);
  }

  while (true) {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    const poll = await fetch(responseUri, { headers: HEADERS });
    const result = await poll.json();
    if (result.status === "completed") return result;
    if (result.status === "failed") throw new Error(result.error || "Request failed");
  }
}

// Single URL (sync)
const result = await analyze({ url: "https://example.com/photo.jpg" });
console.log(result.all.assets[0].descriptions);

// Multiple URLs (async — handled automatically)
const batchResult = await analyze({
  url: ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
});
batchResult.all.assets.forEach((asset) => {
  console.log(asset.name, asset.descriptions);
});

// Base64 file upload (always async — handled automatically)
import { readFileSync } from "fs";

const encoded = readFileSync("photo.jpg").toString("base64");
const fileResult = await analyze({ file: encoded, file_name: "photo.jpg" });
console.log(fileResult.all.assets[0].descriptions);
```

### PHP

```php
<?php

$apiKey = "YOUR_API_KEY";
$baseUrl = "https://api.visionati.com";

function analyze(array $payload): array
{
    global $apiKey, $baseUrl;

    $headers = [
        "X-API-Key: Token $apiKey",
        "Content-Type: application/json",
    ];

    // Send the request
    $ch = curl_init("$baseUrl/api/fetch");
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
    curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($payload));
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    $response = curl_exec($ch);
    curl_close($ch);

    $data = json_decode($response, true);

    // Pre-processing error (no status field)
    if (!empty($data["error"]) && !isset($data["status"])) {
        throw new Exception($data["error"]);
    }

    // Sync response or immediate failure
    if (($data["status"] ?? "") === "completed") {
        return $data;
    }
    if (($data["status"] ?? "") === "failed") {
        throw new Exception($data["error"] ?? "Request failed");
    }

    // Async response — poll for results
    $responseUri = $data["response_uri"] ?? null;
    if (!$responseUri) {
        throw new Exception("Unexpected response: $response");
    }

    while (true) {
        sleep(2);
        $ch = curl_init($responseUri);
        curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $poll = curl_exec($ch);
        curl_close($ch);

        $result = json_decode($poll, true);
        if (($result["status"] ?? "") === "completed") {
            return $result;
        }
        if (($result["status"] ?? "") === "failed") {
            throw new Exception($result["error"] ?? "Request failed");
        }
    }
}

// Single URL (sync)
$result = analyze(["url" => "https://example.com/photo.jpg"]);
print_r($result["all"]["assets"][0]["descriptions"]);

// Multiple URLs (async — handled automatically)
$result = analyze([
    "url" => ["https://example.com/photo1.jpg", "https://example.com/photo2.jpg"],
]);
foreach ($result["all"]["assets"] as $asset) {
    echo $asset["name"] . "\n";
    print_r($asset["descriptions"]);
}

// Base64 file upload (always async — handled automatically)
$encoded = base64_encode(file_get_contents("photo.jpg"));
$result = analyze(["file" => $encoded, "file_name" => "photo.jpg"]);
print_r($result["all"]["assets"][0]["descriptions"]);
```
