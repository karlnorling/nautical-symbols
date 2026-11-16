// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"M70 40v60M20 70h100m-20-20v40M40 50v40\" style=\"fill:none;stroke:#000;stroke-width:6px;stroke-linecap:round;stroke-linejoin:round\"/>",
  height: "140",
  width: "140",
};
const _title = "Wreck depth non-dangerous (ECDIS)";
const _description = "Wreck depth non-dangerous (ECDIS) — ECDIS (IHO S-52) simplified symbol";

export class EcdisWreckDepthNonDangerous extends SymbolElement {
  static readonly tagName = 'nautical-ecdis-wreck-depth-non-dangerous';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
