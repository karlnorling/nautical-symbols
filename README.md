# Nautical Symbols

Accessible, framework-agnostic packages for **International Code of Signals flags** and **nautical chart symbols** — React components, Vue components, Web Components (Custom Elements), CSS sprite, SVG sprite, and static image assets.

[![CI](https://github.com/karlnorling/nautical-symbols/actions/workflows/ci.yml/badge.svg)](https://github.com/karlnorling/nautical-symbols/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Docs](https://img.shields.io/badge/docs-Starlight-8A2BE2)](https://karlnorling.github.io/nautical-symbols/)
[![Storybook](https://img.shields.io/badge/Storybook-live-FF4785)](https://karlnorling.github.io/nautical-symbols/storybook/)

---

## Packages

| Package                                                             | Version                                                                                                                     | Description                            |
| ------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| [`@nautical-symbols/core`](packages/@nautical-symbols/core)         | [![npm](https://img.shields.io/npm/v/@nautical-symbols/core)](https://www.npmjs.com/package/@nautical-symbols/core)         | Typed symbol data and lookup functions |
| [`@nautical-symbols/react`](packages/@nautical-symbols/react)       | [![npm](https://img.shields.io/npm/v/@nautical-symbols/react)](https://www.npmjs.com/package/@nautical-symbols/react)       | React components (inline SVG)          |
| [`@nautical-symbols/vue`](packages/@nautical-symbols/vue)           | [![npm](https://img.shields.io/npm/v/@nautical-symbols/vue)](https://www.npmjs.com/package/@nautical-symbols/vue)           | Vue 3 components (inline SVG)          |
| [`@nautical-symbols/elements`](packages/@nautical-symbols/elements) | [![npm](https://img.shields.io/npm/v/@nautical-symbols/elements)](https://www.npmjs.com/package/@nautical-symbols/elements) | Web Components / Custom Elements       |
| [`@nautical-symbols/css`](packages/@nautical-symbols/css)           | [![npm](https://img.shields.io/npm/v/@nautical-symbols/css)](https://www.npmjs.com/package/@nautical-symbols/css)           | CSS background-image sprite            |
| [`@nautical-symbols/sprite`](packages/@nautical-symbols/sprite)     | [![npm](https://img.shields.io/npm/v/@nautical-symbols/sprite)](https://www.npmjs.com/package/@nautical-symbols/sprite)     | SVG `<symbol>` sprite                  |
| [`@nautical-symbols/assets`](packages/@nautical-symbols/assets)     | [![npm](https://img.shields.io/npm/v/@nautical-symbols/assets)](https://www.npmjs.com/package/@nautical-symbols/assets)     | Static SVG, PNG, JPG, WebP assets      |

---

## Symbol categories

273 symbols in two groups (`getSymbolsByGroup('flags' | 'chart')`).

**Signal flags** — from [International maritime signal flags](https://en.wikipedia.org/wiki/International_maritime_signal_flags):

| Category            | Symbols | Example IDs                                       |
| ------------------- | ------- | ------------------------------------------------- |
| `letter-flags`      | 26      | `flag-alfa`, `flag-bravo`, `flag-zulu`            |
| `number-pennants`   | 10      | `pennant-0` … `pennant-9` (ICS numerals)          |
| `nato-number-flags` | 10      | `nato-flag-0` … `nato-flag-9`                     |
| `special-pennants`  | 5       | `pennant-answer`, `substitute-1` … `substitute-4` |

Each letter flag's `description` is its ICS single-flag meaning, plus its meaning with a numeric complement where it has one.

**Chart symbols** — from the Wikimedia Commons category [Nautical Chart Icons](https://commons.wikimedia.org/wiki/Category:Nautical_Chart_Icons) (its SVG sub-category):

| Category                | Symbols | Example IDs                                                      |
| ----------------------- | ------- | ---------------------------------------------------------------- |
| `cardinal-marks`        | 24      | `chart-cardinal-mark-pillar-north`, `ecdis-cardinal-buoy-west`   |
| `lateral-marks`         | 124     | `chart-can-buoy-red`, `chart-conical-buoy-green-conical-topmark` |
| `isolated-danger-marks` | 6       | `chart-isolated-danger-mark-pillar`                              |
| `special-marks`         | 2       | `chart-spar-buoy-x-shaped-topmark`                               |
| `beacons`               | 3       | `chart-beacon`, `chart-stake`                                    |
| `topmarks`              | 16      | `topmark-two-cone-up-black`, `topmark-saltire`                   |
| `lights`                | 8       | `chart-major-light`, `light-red-teardrop`                        |
| `dangers`               | 14      | `chart-rock-awash`, `chart-wreck`, `ecdis-obstruction-depth`     |
| `areas`                 | 13      | `chart-anchorage-area`, `ecdis-no-fishing-area`                  |
| `harbour`               | 10      | `chart-marina`, `chart-pilot-station`                            |
| `other`                 | 2       | `scuba-diving`, `cliff-diving`                                   |

`chart-*` IDs are INT 1 paper-chart symbols and `ecdis-*` IDs are the ECDIS (IHO S-52) simplified
set. Flag IDs are fixed in [`bin/scrape.ts`](bin/scrape.ts); chart IDs are derived from the Commons
file name and never change once published.

---

## Quick start

### React

```sh
npm install @nautical-symbols/react
```

```tsx
import { SymbolById } from '@nautical-symbols/react';

export default function Hoist() {
  return <SymbolById id="flag-alfa" width={120} />;
}
```

Individual named components are generated by `yarn generate` after running `yarn update`:

```tsx
import { FlagAlfa, ChartCanBuoyRed } from '@nautical-symbols/react';

<FlagAlfa width={64} />
<ChartCanBuoyRed width={64} title="Port-hand can buoy" />
```

### Vue 3

```sh
npm install @nautical-symbols/vue
```

```vue
<script setup>
import { SymbolById } from '@nautical-symbols/vue';
</script>
<template>
  <SymbolById id="flag-alfa" :width="120" />
</template>
```

### Web Components

```sh
npm install @nautical-symbols/elements
```

```ts
import { defineCustomElements } from '@nautical-symbols/elements';
defineCustomElements();
```

```html
<nautical-symbol symbol-id="flag-alfa" width="64"></nautical-symbol>
<nautical-flag-alfa width="64"></nautical-flag-alfa>
```

### CSS sprite

```sh
npm install @nautical-symbols/css
```

```js
import '@nautical-symbols/css/sprite.css';
```

```html
<span
  class="nautical-flag-alfa"
  style="display:inline-block;width:64px;height:64px"
  role="img"
  aria-label="A (Alfa)"
></span>
```

### SVG sprite

```sh
npm install @nautical-symbols/sprite
```

```html
<svg width="64" height="64" role="img" aria-label="A (Alfa)">
  <title>A (Alfa)</title>
  <use href="/path/to/sprite.svg#flag-alfa" />
</svg>
```

### Programmatic API

```ts
import {
  getAllSymbols,
  getSymbol,
  getSymbolsByCategory,
  getSymbolsByGroup,
} from '@nautical-symbols/core';

const allSymbols = getAllSymbols();
const alfa = getSymbol('flag-alfa'); // { name: 'A (Alfa)', description: '"I have a diver down; …', license, source, … }
const flags = getSymbolsByGroup('flags');
const cardinals = getSymbolsByCategory('cardinal-marks');
```

---

## Development

### Prerequisites

- Node.js >= 24 (see `.nvmrc`)
- Yarn 4 (`corepack enable`)

### Setup

```sh
git clone https://github.com/karlnorling/nautical-symbols.git
cd nautical-symbols
yarn install
```

### Populate symbol data

Scrape Wikipedia, download SVGs from Wikimedia Commons, and generate all source files:

```sh
yarn update
```

This runs three steps in sequence:

1. **scrape** — reads the flag tables from the [International maritime signal flags](https://en.wikipedia.org/wiki/International_maritime_signal_flags) article, lists the [SVG Nautical Chart icons](https://commons.wikimedia.org/wiki/Category:SVG_Nautical_Chart_icons) category, and looks up each file's URL and licence through the Commons API
2. **create-assets** — downloads SVGs and converts them to PNG, JPG, and WebP at 240/512/768/1024/2048 px
3. **generate** — generates TypeScript source for all packages

### Compile

```sh
yarn compile
```

### Test

```sh
yarn test
```

### Storybook

The published Storybook lives at <https://karlnorling.github.io/nautical-symbols/storybook/>. To run it locally:

```sh
yarn storybook
```

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)

> **Artwork licences:** the code in this repository is MIT-licensed; the SVG artwork is not. It comes from Wikimedia Commons under several licences, recorded per symbol in `license` (with the Commons page in `source`):
>
> | Licence       | Symbols                                                                                     |
> | ------------- | ------------------------------------------------------------------------------------------- |
> | Public domain | letter flags, NATO number flags, answer pennant, substitutes, INT 1 and ECDIS chart symbols |
> | CC0           | `chart-pilot-station`                                                                       |
> | CC BY-SA 4.0  | topmarks, the `light-*` symbols — attribution and share-alike apply                         |
> | GPL           | ICS number pennants `pennant-0` … `pennant-9`                                               |
>
> Check a symbol's licence before you redistribute it.
