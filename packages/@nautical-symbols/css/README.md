# @nautical-symbols/css

CSS background-image sprite for the **International Code of Signals** flags and **nautical chart** symbols — class-based display, no JavaScript required.

[![npm](https://img.shields.io/npm/v/@nautical-symbols/css)](https://www.npmjs.com/package/@nautical-symbols/css)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/nautical-symbols/blob/main/LICENSE)

---

## Installation

```sh
npm install @nautical-symbols/css
# or
yarn add @nautical-symbols/css
```

---

## Setup

Import the stylesheet once in your entry point:

```js
import '@nautical-symbols/css/sprite.css';
```

```css
@import '@nautical-symbols/css/sprite.css';
```

---

## Usage

Apply a class to any block element with explicit dimensions:

```html
<span
  class="nautical-flag-alfa"
  style="display:inline-block; width:64px; height:64px"
  role="img"
  aria-label="A (Alfa)"
></span>

<span
  class="nautical-chart-can-buoy-red"
  style="display:inline-block; width:64px; height:64px"
  role="img"
  aria-label="Can buoy red"
></span>
```

### Programmatic class lookup

```ts
import { getCssClassName } from '@nautical-symbols/css';

const cls = getCssClassName('flag-alfa'); // → 'nautical-flag-alfa'
element.className = cls;
```

---

## Class name pattern

CSS class names follow the pattern `nautical-{code}` where `{code}` is the symbol code:

| Symbol                     | CSS class                                   |
| -------------------------- | ------------------------------------------- |
| A (Alfa)                   | `nautical-flag-alfa`                        |
| B (Bravo)                  | `nautical-flag-bravo`                       |
| Can buoy red               | `nautical-chart-can-buoy-red`               |
| First substitute           | `nautical-substitute-1`                     |
| Cardinal mark pillar north | `nautical-chart-cardinal-mark-pillar-north` |
| Iron at low temperature    | `nautical-pennant-1`                        |

---

## Accessibility

CSS background-images are not exposed to the accessibility tree. Always pair the element with `role="img"` and `aria-label`:

```html
<span
  class="nautical-flag-alfa"
  style="display:inline-block; width:64px; height:64px"
  role="img"
  aria-label="A (Alfa)"
  title="A (Alfa)"
></span>
```

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)
