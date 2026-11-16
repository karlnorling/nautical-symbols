// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 300\"",
  body: "<path stroke=\"#0f0\" stroke-linecap=\"square\" stroke-width=\"10\" d=\"M50 90v206\"/><path d=\"m50 0 50 90H0\" style=\"fill:#0f0\"/><circle cx=\"50\" cy=\"200\" r=\"50\" fill=\"#0f0\"/>",
  height: "300",
  width: "100",
};
const _title = "Topmark cone sphere green";
const _description = "Topmark cone sphere green — Buoyage topmark";

export class TopmarkConeSphereGreen extends SymbolElement {
  static readonly tagName = 'nautical-topmark-cone-sphere-green';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
