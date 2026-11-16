// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"M70 99v16m0-100v44M40 45h60M30 95l20 20h40l20-20M90 79c0 11.04-8.96 20-20 20s-20-8.96-20-20 8.96-20 20-20 20 8.96 20 20\" style=\"fill:none;fill-rule:evenodd;stroke:#c64dbb;stroke-width:6;stroke-linecap:round;stroke-linejoin:round\"/>",
  height: "140",
  width: "140",
};
const _title = "Anchorage single berth (ECDIS)";
const _description = "Anchorage single berth (ECDIS) — ECDIS (IHO S-52) simplified symbol";

export class EcdisAnchorageSingleBerth extends SymbolElement {
  static readonly tagName = 'nautical-ecdis-anchorage-single-berth';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
