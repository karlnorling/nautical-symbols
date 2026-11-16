// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 107 56\"",
  body: "<path fill=\"#a50021\" d=\"M0 0h107L62 24l-2.751 4L62 32l45 24H0Z\"/><path stroke=\"#fff\" stroke-width=\"8\" d=\"M28-2.216v62M-3.134 28H62\"/>",
  height: "560",
  width: "1070",
};
const _title = "Naval ensign of Denmark";
const _description = "Naval ensign of Denmark. Flown at the stern by warships and other state vessels.";

export class EnsignNavalDenmark extends SymbolElement {
  static readonly tagName = 'nautical-ensign-naval-denmark';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
