// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 600\"",
  body: "<path fill=\"#d21034\" d=\"M0 0h1000v600H0z\"/><path fill=\"#00209f\" d=\"M0 0h1000v300H0z\"/>",
  height: "600",
  width: "1000",
};
const _title = "Civil ensign of Haiti";
const _description = "Civil ensign of Haiti. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export class EnsignCivilHaiti extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-haiti';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
