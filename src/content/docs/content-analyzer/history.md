---
title: History
description: How analysis history works in the Visionati Content Analyzer.
sidebar:
  order: 3
---

Every successful analysis is saved to your browser automatically. You can re-view past results without making another API call or spending credits.

## How It Works

After an analysis completes, the full results, your form state (role, prompt, and prompt toggle), and a preview image are stored locally in your browser using IndexedDB.

Click the **History** button above the file picker to open a dropdown of previous analyses. Each entry shows:

- A thumbnail of the analyzed image (or a video icon for video submissions)
- The filename or URL
- The role used, or a truncated custom prompt if one was provided

Clicking an entry restores everything: the results render exactly as they did originally, and the form resets to match the role, prompt, and prompt toggle from that analysis.

## Configuring History Depth

You can choose how many entries to keep from the **Account** page under **Analyzer History**. The available options are 5, 10, 25, or 50 entries. The default is 10.

When the limit is reached, the oldest entry is removed automatically after the next analysis.

## Clearing History

Use **Clear History** at the bottom of the history dropdown to remove all entries. A confirmation dialog appears before anything is deleted.

## Storage

History is stored locally in your browser, not on the server. This means:

- History does not transfer between browsers or devices
- Clearing your browser data removes your history
- Images are resized to 800px wide before storage to keep usage reasonable
- If your browser blocks IndexedDB (some privacy modes do), the history button is hidden and the analyzer works normally without it