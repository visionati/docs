---
title: WooCommerce
description: Generate product descriptions from featured images with WooCommerce integration.
sidebar:
  order: 3
---

When WooCommerce is active, the plugin adds product description generation to your store. No extra installation needed.

## Single Product

1. Set a featured image on the product
2. Click **Generate Descriptions** in the Visionati meta box
3. Preview the short and long descriptions. Each has its own **Apply** button.
4. Click **Apply** on either description to save just that one, or **Apply to Product** to save both. **Discard** clears everything.

Both descriptions generate in parallel, so you're not waiting twice. The product's name, categories, attributes, and price are included automatically so the descriptions reference your actual product data. Turn this off in **Settings → Visionati → Automation → WooCommerce Product Context**.

## Bulk Descriptions

Go to **Products → Bulk Descriptions**, or select products in the Products list and choose **Generate descriptions with Visionati** from the Bulk Actions dropdown.

Use the status checkboxes to choose which products to include: **Published**, **Draft**, **Pending**, and **Private**. All are checked by default. The count updates live as you toggle them, so you know exactly how many products will be processed before clicking Start.

Only products with a featured image that are missing descriptions are queued. Products that already have both descriptions are skipped unless you enable **Overwrite Existing** in the settings. Alt text for the featured image is also generated if missing.

## Settings

WooCommerce settings appear automatically when WooCommerce is active. Everything is under **Settings → Visionati**:

| Setting | Where | Description |
|---------|-------|-------------|
| **WooCommerce context** | Context Settings | Role and optional model override for product descriptions. Default role: Ecommerce. |
| **WooCommerce Prompt** | Custom Prompts | Custom instructions that override the Ecommerce role. Supports `{product_name}`, `{categories}`, and `{price}` placeholders. |
| **WooCommerce Product Context** | Automation | Include product name, categories, attributes, and price in prompts. On by default. |

## Credits

Each product uses two credits at minimum (short description + long description), more with higher-cost models. If alt text is generated for the featured image during bulk processing, that adds one more. See [Credit System](/reference/credits/) for per-model pricing.