// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 100\"",
  body: "<path fill=\"#fff\" d=\"M0 0h200v100H0z\"/><path stroke=\"#ce1126\" stroke-width=\"24\" d=\"M0 50h200M68 0v100\"/><path stroke=\"#fff\" stroke-width=\"20\" d=\"M0 50h200M68 0v100\"/><path stroke=\"#ce1126\" stroke-width=\"14\" d=\"M0 50h200M68 0v100\"/><path stroke=\"#ce1126\" stroke-width=\"10\" d=\"M13 19h30M28 4v30\"/>",
  height: "600",
  width: "1200",
};
const _title = "Naval ensign of Tonga";
const _description = "Naval ensign of Tonga. Flown at the stern by warships and other state vessels.";

export class EnsignNavalTonga extends SymbolElement {
  static readonly tagName = 'nautical-ensign-naval-tonga';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
