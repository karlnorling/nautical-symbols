// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 240\"",
  body: "<path d=\"m18 84 36 36c25 25 50 40 84 40s60-15 84-40c-24-25-50-40-84-40s-59 15-84 40l-36 36\" style=\"fill:none;stroke:#d4badd;stroke-width:12;stroke-linecap:round;stroke-linejoin:round\"/><path d=\"M84 180 204 60\" style=\"fill:none;stroke:#d4badd;stroke-width:18;stroke-linecap:round;stroke-linejoin:round\"/>",
  height: "240",
  width: "240",
};
const _title = "No fishing area (ECDIS)";
const _description = "No fishing area (ECDIS) — ECDIS (IHO S-52) simplified symbol";

export class EcdisNoFishingArea extends SymbolElement {
  static readonly tagName = 'nautical-ecdis-no-fishing-area';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
