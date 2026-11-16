// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"M70 18v100M40 48h60M30 98l20 20h40l20-20\" style=\"fill:none;fill-rule:evenodd;stroke:#c64dbb;stroke-width:6;stroke-linecap:round;stroke-linejoin:round\"/>",
  height: "140",
  width: "140",
};
const _title = "Anchorage point (ECDIS)";
const _description = "Anchorage point (ECDIS) — ECDIS (IHO S-52) simplified symbol";

export class EcdisAnchoragePoint extends SymbolElement {
  static readonly tagName = 'nautical-ecdis-anchorage-point';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
