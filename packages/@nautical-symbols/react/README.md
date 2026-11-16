# @nautical-symbols/react

React components (inline SVG) for the **International Code of Signals** flags and **nautical chart** symbols. Tree-shakeable, fully accessible, zero runtime dependencies beyond React.

[![npm](https://img.shields.io/npm/v/@nautical-symbols/react)](https://www.npmjs.com/package/@nautical-symbols/react)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/karlnorling/nautical-symbols/blob/main/LICENSE)

---

## Installation

```sh
npm install @nautical-symbols/react
# or
yarn add @nautical-symbols/react
```

---

## Usage

### Named components (generated)

Each nautical symbol is a named component in PascalCase derived from its slug ID:

```tsx
import {
  FlagAlfa,
  ChartCanBuoyRed,
  Substitute1,
  TopmarkTwoConeUpBlack,
  Pennant1,
} from '@nautical-symbols/react';

export default function CareLabel() {
  return (
    <>
      <FlagAlfa width={64} />
      <ChartCanBuoyRed width={64} />
      <Substitute1 width={64} title="Repeat the first flag" />
    </>
  );
}
```

### Dynamic rendering by ID

Use `SymbolById` when the symbol ID comes from an API response or user input:

```tsx
import { SymbolById } from '@nautical-symbols/react';

<SymbolById id="flag-alfa" width={120} />
<SymbolById id={symbolId} width={64} height={64} />
```

Returns `null` for unrecognised IDs — no error thrown.

---

## Props

Every component and `SymbolById` accept the same props:

| Prop          | Type                  | Default              | Description                                          |
| ------------- | --------------------- | -------------------- | ---------------------------------------------------- |
| `width`       | `number \| string`    | SVG intrinsic width  | Width of the `<svg>` element                         |
| `height`      | `number \| string`    | SVG intrinsic height | Height of the `<svg>` element                        |
| `title`       | `string`              | Symbol name          | Accessible title (`<title>` inside SVG)              |
| `description` | `string`              | Symbol description   | Accessible description (`<desc>` inside SVG)         |
| `className`   | `string`              | —                    | CSS class forwarded to the root `<span>` wrapper     |
| `style`       | `React.CSSProperties` | —                    | Inline styles forwarded to the root `<span>` wrapper |

`SymbolById` also requires:

| Prop | Type     | Description                        |
| ---- | -------- | ---------------------------------- |
| `id` | `string` | Symbol slug ID, e.g. `"flag-alfa"` |

---

## Accessibility

Every component renders `role="img"` with `aria-labelledby` pointing to a `<title>` and `<desc>` injected inside the SVG. Screen readers announce the symbol name and description automatically. Passing `aria-label` labels the `<svg>` directly instead. Ids are derived from `useId()`, so the same symbol can appear any number of times on a page.

Override defaults when needed:

```tsx
<FlagAlfa
  width={120}
  title="Diver down — keep well clear"
  description="Green running figure with directional arrow"
/>
```

---

## License

MIT © [Karl Norling](https://github.com/karlnorling)
