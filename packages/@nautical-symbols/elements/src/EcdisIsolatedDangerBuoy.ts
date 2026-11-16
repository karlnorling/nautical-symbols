// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"M108 40c0 12.144-9.856 22-22 22s-22-9.856-22-22 9.856-22 22-22 22 9.856 22 22m-32 60c0 12.144-9.856 22-22 22s-22-9.856-22-22 9.856-22 22-22 22 9.856 22 22\" style=\"fill:#ee5a6c;fill-opacity:1;fill-rule:evenodd;stroke:#010101;stroke-width:6;stroke-linecap:round;stroke-linejoin:round\"/>",
  height: "140",
  width: "140",
};
const _title = "Isolated danger buoy (ECDIS)";
const _description = "Isolated danger buoy (ECDIS) — ECDIS (IHO S-52) simplified symbol";

export class EcdisIsolatedDangerBuoy extends SymbolElement {
  static readonly tagName = 'nautical-ecdis-isolated-danger-buoy';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
