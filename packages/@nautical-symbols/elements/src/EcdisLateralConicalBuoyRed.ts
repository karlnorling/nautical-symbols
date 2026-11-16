// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"M96 9v87H10z\" style=\"fill:#ee5a6c;fill-opacity:1;fill-rule:evenodd;stroke:#010101;stroke-width:6;stroke-linecap:round;stroke-linejoin:round\"/><path d=\"M76 70c0 3.312-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6\" style=\"fill:#010101\"/>",
  height: "140",
  width: "140",
};
const _title = "Lateral conical buoy red (ECDIS)";
const _description = "Lateral conical buoy red (ECDIS) — ECDIS (IHO S-52) simplified symbol";

export class EcdisLateralConicalBuoyRed extends SymbolElement {
  static readonly tagName = 'nautical-ecdis-lateral-conical-buoy-red';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
