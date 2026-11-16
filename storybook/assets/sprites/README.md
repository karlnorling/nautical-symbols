# @nautical-symbols/sprite

SVG symbol sprite for the **International Code of Signals** flags and **nautical chart** symbols — embed any symbol inline with `<use href="#id">`.

[![npm](https://img.shields.io/npm/v/@nautical-symbols/sprite)](https://www.npmjs.com/package/@nautical-symbols/sprite)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/nautical-symbols/blob/main/LICENSE)

---

## Installation

```sh
npm install @nautical-symbols/sprite
# or
yarn add @nautical-symbols/sprite
```

---

## Usage

### External file reference (recommended)

Serve `sprite.svg` as a static file and reference any symbol by ID:

```html
<svg width="64" height="64" role="img" aria-label="A (Alfa)">
  <title>A (Alfa)</title>
  <use href="/path/to/sprite.svg#flag-alfa" />
</svg>
```

### Inline sprite

Embed the sprite once invisibly at the top of your document to avoid cross-origin `<use>` issues:

```html
<div aria-hidden="true" style="position:absolute;width:0;height:0;overflow:hidden">
  <!-- paste contents of sprite.svg here -->
</div>

<!-- Reference any symbol anywhere -->
<svg width="64" height="64" role="img" aria-label="A (Alfa)">
  <title>A (Alfa)</title>
  <use href="#flag-alfa" />
</svg>
```

### React with bundler import

```tsx
import spriteUrl from '@nautical-symbols/sprite/sprite.svg';

function FlagAlfa() {
  return (
    <svg width={64} height={64} role="img" aria-label="A (Alfa)">
      <title>A (Alfa)</title>
      <use href={`${spriteUrl}#flag-alfa`} />
    </svg>
  );
}
```

---

## Symbol IDs

Symbol IDs are the symbol code, e.g. `flag-alfa` or `chart-can-buoy-red`. Use the `sprite-ids.json` file to enumerate all available IDs:

```ts
import ids from '@nautical-symbols/sprite/sprite-ids.json';
// → string[]  e.g. ["flag-alfa", "flag-bravo", …]
```

---

## Accessibility

The sprite itself is presentational. Always add `role="img"`, `aria-label`, and a `<title>` child to each referencing `<svg>`:

```html
<svg width="64" height="64" role="img" aria-label="Can buoy red">
  <title>Can buoy red</title>
  <desc>Yellow triangle with flame symbol.</desc>
  <use href="#chart-can-buoy-red" />
</svg>
```

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)
