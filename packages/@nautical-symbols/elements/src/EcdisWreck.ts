// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 160\"",
  body: "<path d=\"M90 80c0 5.52-4.48 10-10 10s-10-4.48-10-10 4.48-10 10-10 10 4.48 10 10m-78 0h130M92 20 80 60\" style=\"fill:none;stroke:#88988b;stroke-width:18;stroke-linecap:round;stroke-linejoin:round\"/><path d=\"m12 40 130 39-100 1z\" style=\"fill:#88988b\"/>",
  height: "160",
  width: "160",
};
const _title = "Wreck (ECDIS)";
const _description = "Wreck (ECDIS) — ECDIS (IHO S-52) simplified symbol";

export class EcdisWreck extends SymbolElement {
  static readonly tagName = 'nautical-ecdis-wreck';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
