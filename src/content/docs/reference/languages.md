---
title: Supported Languages
description: Languages available for AI-generated descriptions.
sidebar:
  order: 6
---

Visionati supports 160 languages for AI-generated descriptions. Set the `language` parameter to any of the values below. If the language is not supported by the upstream AI provider, results are returned in English.

The default language is **English**.

## Language List

Abkhazian, Afar, Afrikaans, Albanian, Amharic, Arabic, Aragonese, Armenian, Assamese, Aymara, Azerbaijani, Bashkir, Basque, Bengali (Bangla), Bhutani, Bihari, Bislama, Breton, Bulgarian, Burmese, Byelorussian (Belarusian), Cambodian, Catalan, Cherokee, Chewa, Chinese, Chinese (Simplified), Chinese (Traditional), Corsican, Croatian, Czech, Danish, Divehi, Dutch, Edo, English, Esperanto, Estonian, Faeroese, Farsi, Fiji, Finnish, French, Frisian, Fulfulde, Galician, Gaelic (Scottish), Gaelic (Manx), Georgian, German, Greek, Greenlandic, Guarani, Gujarati, Haitian Creole, Hausa, Hawaiian, Hebrew, Hindi, Hungarian, Icelandic, Ido, Igbo, Indonesian, Interlingua, Interlingue, Inuktitut, Inupiak, Irish, Italian, Japanese, Javanese, Kannada, Kanuri, Kashmiri, Kazakh, Kinyarwanda (Ruanda), Kirghiz, Kirundi (Rundi), Konkani, Korean, Kurdish, Laothian, Latin, Latvian (Lettish), Limburgish (Limburger), Lingala, Lithuanian, Macedonian, Malagasy, Malay, Malayalam, Maltese, Maori, Marathi, Moldavian, Mongolian, Nauru, Nepali, Norwegian, Occitan, Oriya, Oromo (Afaan Oromo), Papiamentu, Pashto (Pushto), Polish, Portuguese, Punjabi, Quechua, Rhaeto-Romance, Romanian, Russian, Samoan, Sangro, Sanskrit, Serbian, Serbo-Croatian, Sesotho, Setswana, Shona, Sichuan Yi, Sindhi, Sinhalese, Siswati, Slovak, Slovenian, Somali, Spanish, Sundanese, Swahili (Kiswahili), Swedish, Syriac, Tagalog, Tajik, Tamazight, Tamil, Tatar, Telugu, Thai, Tibetan, Tigrinya, Tonga, Tsonga, Turkish, Turkmen, Twi, Uighur, Ukrainian, Urdu, Uzbek, Venda, Vietnamese, Volapük, Wallon, Welsh, Wolof, Xhosa, Yiddish yi, Yoruba, Zulu

## Usage

```bash
curl -X POST "https://api.visionati.com/api/fetch" \
  -H "X-API-Key: Token YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"url": "https://example.com/photo.jpg", "language": "Japanese"}'
```

:::note
Language names are case-insensitive. `japanese`, `Japanese`, and `JAPANESE` all work.
:::