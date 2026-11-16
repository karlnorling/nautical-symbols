// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"M50 50h40v40H50z\" style=\"fill:#ccc57b;fill-rule:evenodd;stroke:#5f6a60;stroke-width:12;stroke-linecap:round;stroke-linejoin:round\"/>",
  height: "140",
  width: "140",
};
const _title = "Obstruction above water (ECDIS)";
const _description = "Obstruction above water (ECDIS) — ECDIS (IHO S-52) simplified symbol";

export class EcdisObstructionAboveWater extends SymbolElement {
  static readonly tagName = 'nautical-ecdis-obstruction-above-water';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
