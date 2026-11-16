// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"M32.5 70h75m-67-32.5 59 65m-59 0 59-65\" style=\"fill:none;stroke:#000;stroke-width:6;stroke-linecap:round;stroke-linejoin:round\"/>",
  height: "140",
  width: "140",
};
const _title = "Rock awash (ECDIS)";
const _description = "Rock awash (ECDIS) — ECDIS (IHO S-52) simplified symbol";

export class EcdisRockAwash extends SymbolElement {
  static readonly tagName = 'nautical-ecdis-rock-awash';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
