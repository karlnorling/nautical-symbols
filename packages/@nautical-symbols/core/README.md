# @nautical-symbols/core

Typed symbol data and lookup functions for the **International Code of Signals** flags and **nautical chart** symbols.

[![npm](https://img.shields.io/npm/v/@nautical-symbols/core)](https://www.npmjs.com/package/@nautical-symbols/core)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/nautical-symbols/blob/main/LICENSE)

---

## Installation

```sh
npm install @nautical-symbols/core
# or
yarn add @nautical-symbols/core
```

---

## Usage

```ts
import { getAllSymbols, getSymbol, getSymbolsByCategory } from '@nautical-symbols/core';

// All symbols
const all = getAllSymbols();

// Single symbol by slug ID
const symbol = getSymbol('flag-alfa');
// → NauticalSymbol | undefined

// Symbols by category
const cardinals = getSymbolsByCategory('cardinal-marks');
const letters = getSymbolsByCategory('letter-flags');
```

---

## API

### `getAllSymbols(): NauticalSymbol[]`

Returns all nautical symbols.

### `getSymbol(id: string): NauticalSymbol | undefined`

Returns a single symbol by its slug ID (e.g. `"flag-alfa"`), or `undefined` if not found.

### `getSymbolsByCategory(category: NauticalSymbolCategory): NauticalSymbol[]`

Returns all symbols in a category. See `NauticalSymbolCategory` for the 15 categories; `getSymbolsByGroup("flags" | "chart")` splits signal flags from chart symbols.

---

## Types

```ts
type NauticalSymbolCategory =
  | 'letter-flags'
  | 'number-pennants'
  | 'nato-number-flags'
  | 'special-pennants'
  | 'cardinal-marks'
  | 'lateral-marks'
  | 'isolated-danger-marks'
  | 'special-marks'
  | 'beacons'
  | 'topmarks'
  | 'lights'
  | 'dangers'
  | 'areas'
  | 'harbour'
  | 'other';

interface NauticalSymbol {
  assets: NauticalSymbolAssets;
  category: NauticalSymbolCategory;
  code: string; // e.g. "flag-alfa"
  description: string; // accessible description
  id: string; // e.g. "flag-alfa"
  name: string; // e.g. "A (Alfa)"
  svg: string; // inline SVG markup
}

interface NauticalSymbolAssets {
  jpg: Record<number, string>; // size → relative path (240, 512, 768, 1024, 2048)
  png: Record<number, string>;
  svg: string; // relative path to original SVG
  webp: Record<number, string>;
}
```

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)
