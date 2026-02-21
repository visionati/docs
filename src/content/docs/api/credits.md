---
title: Check Credits
description: Check your remaining credit balance.
sidebar:
  order: 7
---

## Endpoint

```
GET https://api.visionati.com/api/credits
```

Returns your current credit balance. Useful for checking your balance before making requests, building dashboards, or monitoring usage programmatically.

## Request

No parameters required. Just authenticate with your API key.

```bash
curl "https://api.visionati.com/api/credits" \
  -H "X-API-Key: Token YOUR_API_KEY"
```

## Response

```json
{
  "credits": 4500
}
```

| Field | Description |
|-------|-------------|
| `credits` | Your remaining credit balance. One credit equals one cent. |

## Code Examples

### Python

```python
import requests

response = requests.get(
    "https://api.visionati.com/api/credits",
    headers={"X-API-Key": "Token YOUR_API_KEY"},
)
data = response.json()
print(f"Remaining credits: {data['credits']}")
```

### JavaScript (Node.js)

```javascript
const response = await fetch("https://api.visionati.com/api/credits", {
  headers: { "X-API-Key": "Token YOUR_API_KEY" },
});
const data = await response.json();
console.log(`Remaining credits: ${data.credits}`);
```

### PHP

```php
$ch = curl_init("https://api.visionati.com/api/credits");
curl_setopt($ch, CURLOPT_HTTPHEADER, ["X-API-Key: Token YOUR_API_KEY"]);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
$response = curl_exec($ch);
curl_close($ch);

$data = json_decode($response, true);
echo "Remaining credits: " . $data["credits"];
```

## Errors

| Error | Description |
|-------|-------------|
| `Access denied.` | Invalid or missing API key. |

See [Errors](/api/errors/) for all possible error responses.

## Tips

- The `credits` field is also included in every [analyze response](/api/analyze/) as well as [completed async responses](/api/async-responses/), so you can track your balance without making a separate call.
- This endpoint is lightweight and can be polled frequently without concern.