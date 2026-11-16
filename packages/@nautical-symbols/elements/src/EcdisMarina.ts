// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 160 160\"",
  body: "<path d=\"M148 80c0 37.536-30.464 68-68 68s-68-30.464-68-68 30.464-68 68-68 68 30.464 68 68M29 124h102m-51 0V12m0 20c-42 22-54 57-51 92 12-12 25-18 42-18-9-18-13-47 9-74m0 22 16-40c2 37 17 70 45 96l-61 7\" style=\"fill:none;stroke:#c64dbb;stroke-width:6;stroke-linecap:round;stroke-linejoin:round\"/>",
  height: "160",
  width: "160",
};
const _title = "Marina (ECDIS)";
const _description = "Marina (ECDIS) — ECDIS (IHO S-52) simplified symbol";

export class EcdisMarina extends SymbolElement {
  static readonly tagName = 'nautical-ecdis-marina';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
