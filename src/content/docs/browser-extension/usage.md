---
title: Usage
description: How to install and use the Visionati Browser Extension.
sidebar:
  order: 2
---

## Installation

- <a href="https://chromewebstore.google.com/detail/visionati-image-scanner/ahdgcihhpfgniacmnapajdklkacdcpkn" target="_blank" rel="noopener">Chrome Web Store</a> (also works with Edge, Brave, and other Chromium browsers)
- <a href="https://addons.mozilla.org/en-US/firefox/addon/visionati-image-scanner/" target="_blank" rel="noopener">Firefox Add-ons</a>

## Setup

1. Install the extension from your browser's store
2. Click the extension icon and open **Options**
3. Enter your Visionati API key
4. Choose your preferred backends, role, and language
5. Optionally write a custom prompt that applies to every scan

## Scanning an Image

1. Right-click any image on a web page
2. Select **Scan with Visionati** from the context menu
3. Results appear in the extension popup (auto-opens on Chrome)

If auto-open is disabled or you're on Firefox, click the extension icon to view results.

## Scan History

The extension keeps a history of your recent scans so you can review past results without re-analyzing. You can set the history depth to 5, 10, 25, or 50 scans in the options page. Use the **Reset History** button to clear it.

## Configuration

All settings are configured in the extension options page. They apply to every scan.

| Setting | Description |
|---------|-------------|
| **API Key** | Your Visionati API key. Required. |
| **History Depth** | Number of past scans to keep (5, 10, 25, or 50). |
| **Auto-open Popup** | Automatically show results after a scan. Chrome only. |
| **Role** | Default description persona (General, Ecommerce, Realtor, etc). See [Roles](/reference/roles/). |
| **Language** | Output language for descriptions. See [Supported Languages](/reference/languages/). |
| **Custom Prompt** | Your own instructions that override the selected role. |
| **Backends** | Which AI services to use. Split into Description Backends (LLMs) and Detection Backends (computer vision). Recommended services are marked with an asterisk. |

## Default Backends

The extension enables the following backends by default:

**Claude, Gemini, Grok, OpenAI, Clarifai, Google Vision, Rekognition**

You can enable or disable any backend in the options page. See [AI Backends](/reference/backends/) for details on each service.

## Features

The extension always requests **descriptions**, **tags**, and **NSFW** detection. These are not configurable per-scan.