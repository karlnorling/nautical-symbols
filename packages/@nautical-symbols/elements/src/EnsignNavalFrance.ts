// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 900 600\"",
  body: "<path fill=\"#ce1126\" d=\"M0 0h900v600H0\"/><path fill=\"#fff\" d=\"M0 0h567v600H0\"/><path fill=\"#002654\" d=\"M0 0h270v600H0\"/>",
  height: "600",
  width: "900",
};
const _title = "Naval ensign of France";
const _description = "Naval ensign of France. Flown at the stern by warships and other state vessels.";

export class EnsignNavalFrance extends SymbolElement {
  static readonly tagName = 'nautical-ensign-naval-france';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
