// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 150\"",
  body: "<path stroke=\"#000\" stroke-linecap=\"square\" stroke-width=\"10\" d=\"M50 86v60\"/><path fill=\"red\" d=\"M0 0h100L50 90\"/>",
  height: "150",
  width: "100",
};
const _title = "Topmark cone down red";
const _description = "Topmark cone down red — Buoyage topmark";

export class TopmarkConeDownRed extends SymbolElement {
  static readonly tagName = 'nautical-topmark-cone-down-red';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
