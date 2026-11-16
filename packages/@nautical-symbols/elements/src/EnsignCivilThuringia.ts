// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 250\"",
  body: "<path fill=\"#fff\" d=\"M0 0h500v125H0z\"/><path fill=\"#e10000\" d=\"M0 125h500v125H0z\"/>",
  height: "250",
  width: "500",
};
const _title = "Civil ensign of Thuringia";
const _description = "Civil ensign of Thuringia. Flown at the stern by merchant and private vessels. The national flag without the coat of arms.";

export class EnsignCivilThuringia extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-thuringia';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
