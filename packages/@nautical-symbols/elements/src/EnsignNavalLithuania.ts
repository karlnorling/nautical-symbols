// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 12\"",
  body: "<path fill=\"#fff\" d=\"M0 0h20v12H0Z\"/><path fill=\"#c1272d\" d=\"M0 0h10v6H0Z\"/><path fill=\"#006a44\" d=\"M0 0h10v3.6H0Z\"/><path fill=\"#fdb913\" d=\"M0 0h10v1.8H0Z\"/><path fill=\"none\" stroke=\"#0054a6\" stroke-width=\"1.2\" d=\"M0 6h20M10 0v12\"/>",
  height: "600",
  width: "1000",
};
const _title = "Naval ensign of Lithuania";
const _description = "Naval ensign of Lithuania. Flown at the stern by warships and other state vessels.";

export class EnsignNavalLithuania extends SymbolElement {
  static readonly tagName = 'nautical-ensign-naval-lithuania';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
