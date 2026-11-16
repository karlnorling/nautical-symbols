# @nautical-symbols/assets

Static image assets for the **International Code of Signals** flags and **nautical chart** symbols — SVG, PNG, JPG, and WebP at five sizes (240–2048 px).

[![npm](https://img.shields.io/npm/v/@nautical-symbols/assets)](https://www.npmjs.com/package/@nautical-symbols/assets)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/nautical-symbols/blob/main/LICENSE)

---

## Installation

```sh
npm install @nautical-symbols/assets
# or
yarn add @nautical-symbols/assets
```

---

## Directory layout

Assets are organised by category and symbol code; every file is named after its code:

```
assets/
  letter-flags/
    flag-alfa/
      flag-alfa.svg
      flag-alfa_240x240.png
      flag-alfa_512x512.png
      flag-alfa_768x768.png
      flag-alfa_1024x1024.png
      flag-alfa_2048x2048.png
      flag-alfa_240x240.jpg
      flag-alfa_240x240.webp
      …
  special-pennants/
    substitute-1/
      substitute-1.svg
      …
  cardinal-marks/
  lateral-marks/
  …
```

---

## Usage

### Import by path

```ts
import alfa from '@nautical-symbols/assets/assets/letter-flags/flag-alfa/flag-alfa.svg';
```

### Resolve paths via the core API

```ts
import { getSymbol } from '@nautical-symbols/core';

const symbol = getSymbol('flag-alfa');
if (symbol) {
  console.log(symbol.assets.svg); // 'letter-flags/flag-alfa/flag-alfa.svg'
  console.log(symbol.assets.png[512]); // 'letter-flags/flag-alfa/flag-alfa_512x512.png'
  console.log(symbol.assets.webp[240]); // 'letter-flags/flag-alfa/flag-alfa_240x240.webp'
}
```

---

## Available sizes

Each raster format is generated at five sizes:

| Size | Pixels      |
| ---- | ----------- |
| xs   | 240 × 240   |
| sm   | 512 × 512   |
| md   | 768 × 768   |
| lg   | 1024 × 1024 |
| xl   | 2048 × 2048 |

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)

> The SVG graphics are published under free licences on Wikimedia Commons. See each symbol's Wikimedia Commons page for the specific licence of its artwork.
