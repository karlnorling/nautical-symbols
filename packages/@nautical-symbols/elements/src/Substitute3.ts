// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 550 350\"",
  body: "<path fill=\"#fff\" stroke=\"#000\" stroke-width=\"2.5\" d=\"M1.5 2 547 175 1.5 348z\"/><path d=\"M1 115h356l190 60-190 60H1z\"/>",
  height: "350",
  width: "550",
};
const _title = "Third substitute";
const _description = "Repeats the third flag or pennant in the same hoist. Blazon: Triangular, argent, a fess sable";

export class Substitute3 extends SymbolElement {
  static readonly tagName = 'nautical-substitute-3';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
