// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 320\"",
  body: "<path fill=\"#ff0\" d=\"m1.25 1.25 537.5 75v147.5l-537.5 75z\"/><path fill=\"red\" d=\"M177.5 26 362 52v196l-184.5 26z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2.5\" d=\"m1.25 1.25 537.5 75v147.5l-537.5 75z\"/>",
  height: "320",
  width: "576",
};
const _title = "Number pennant 0";
const _description = "Blazon: Or, a pale gules";

export class Pennant0 extends SymbolElement {
  static readonly tagName = 'nautical-pennant-0';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
