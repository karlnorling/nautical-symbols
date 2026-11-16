// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"M70 64 30 9h80zm0 67L30 76h80z\" style=\"fill:#f3e54d;fill-opacity:1;fill-rule:evenodd;stroke:#010101;stroke-width:6;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"/>",
  height: "140",
  width: "140",
};
const _title = "Cardinal beacon south (ECDIS)";
const _description = "Cardinal beacon south (ECDIS) — ECDIS (IHO S-52) simplified symbol";

export class EcdisCardinalBeaconSouth extends SymbolElement {
  static readonly tagName = 'nautical-ecdis-cardinal-beacon-south';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
