// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"m45 131 61-55H45zm22-67 61-55H67z\" style=\"fill:#f3e54d;fill-opacity:1;fill-rule:evenodd;stroke:#010101;stroke-width:6;stroke-linecap:round;stroke-linejoin:round\"/>",
  height: "140",
  width: "140",
};
const _title = "Cardinal buoy south (ECDIS)";
const _description = "Cardinal buoy south (ECDIS) — ECDIS (IHO S-52) simplified symbol";

export class EcdisCardinalBuoySouth extends SymbolElement {
  static readonly tagName = 'nautical-ecdis-cardinal-buoy-south';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
