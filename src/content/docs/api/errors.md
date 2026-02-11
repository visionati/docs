---
title: Errors
description: API error responses and their meanings.
sidebar:
  order: 6
---

The Visionati API returns errors as JSON with an `error` key. Always check for this key in any response.

```json
{"error": "Invalid URLs detected."}
```

## Error Messages

| Error | Description |
|-------|-------------|
| `Access denied.` | Invalid or missing API key. |
| `Access denied. Email not verified.` | Your account email has not been verified. Check your inbox. |
| `Access denied. Purchase credits on the profile page.` | Your account does not have API access. Purchase credits first. |
| `File/URL params are required.` | No `url` or `file` parameter was provided. |
| `File too large. Max 20MB.` | An uploaded file exceeds the 20MB size limit. |
| `Max request length exceeded.` | The request query string exceeds 2048 characters. Use POST with JSON for large requests. |
| `Invalid URLs detected.` | One or more URLs could not be validated. Check the URL format. |
| `No credits.` | Your account has zero credits remaining. |
| `Insufficient credits.` | You don't have enough credits for this request. Reduce backends/features or purchase more credits. |
| `Invalid request format.` | The request body could not be parsed. Check your JSON syntax. |
| `Request ID [id] not found.` | The async request ID does not exist or has expired. |
| `Request failed` | An error occurred during processing. The specific backend error is included in the message. |

## Backend Errors

Individual backend failures don't necessarily fail the entire request. If one backend encounters an error, the results from other backends are still returned. Backend errors appear in the `all.errors` array of the response.
