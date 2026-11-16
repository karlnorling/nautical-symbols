// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 150\"",
  body: "<path stroke=\"#0f0\" stroke-linecap=\"square\" stroke-width=\"10\" d=\"M50 90v60\"/><path d=\"m50 0 50 90H0\" style=\"fill:#0f0\"/>",
  height: "150",
  width: "100",
};
const _title = "Topmark cone green";
const _description = "Topmark cone green — Buoyage topmark";

export class TopmarkConeGreen extends SymbolElement {
  static readonly tagName = 'nautical-topmark-cone-green';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
