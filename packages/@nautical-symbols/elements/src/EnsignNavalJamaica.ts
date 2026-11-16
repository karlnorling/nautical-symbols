// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 300\"",
  body: "<path fill=\"#fff\" d=\"M0 0h600v300H0z\"/><path fill=\"#007749\" d=\"M0 0h280v130H0z\"/><path fill=\"#2d2926\" d=\"M0 0v130L280 0v130z\"/><path stroke=\"#ffb81c\" stroke-width=\"22.5\" d=\"m0 0 280 130m0-130L0 130\"/><path stroke=\"#c8102e\" stroke-width=\"40\" d=\"M300 0v300M0 150h600\"/>",
  height: "300",
  width: "600",
};
const _title = "Naval ensign of Jamaica";
const _description = "Naval ensign of Jamaica. Flown at the stern by warships and other state vessels.";

export class EnsignNavalJamaica extends SymbolElement {
  static readonly tagName = 'nautical-ensign-naval-jamaica';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
