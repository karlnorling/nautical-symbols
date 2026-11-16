// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 552.5 352.5\"",
  body: "<path d=\"m0 0 275 87.5v175L0 350z\" style=\"fill:#00f;stroke:none;stroke-width:0\" transform=\"translate(1.25 1.25)\"/><path d=\"M275 87.5 550 175l-275 87.5z\" style=\"fill:#fff;stroke:none;stroke-width:0\" transform=\"translate(1.25 1.25)\"/><path d=\"m0 0 550 175L0 350z\" style=\"fill:none;stroke:#000;stroke-width:2.5\" transform=\"translate(1.25 1.25)\"/>",
  height: "352.5",
  width: "552.5",
};
const _title = "Second substitute";
const _description = "Repeats the second flag or pennant in the same hoist. Blazon: Triangular, per pale azure and argent";

export class Substitute2 extends SymbolElement {
  static readonly tagName = 'nautical-substitute-2';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
