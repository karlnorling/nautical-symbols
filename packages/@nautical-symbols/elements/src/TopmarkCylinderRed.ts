// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 200\"",
  body: "<path stroke=\"red\" stroke-linecap=\"square\" stroke-width=\"10\" d=\"M45 130v70\"/><path d=\"M0 0h100v130H0z\" style=\"fill:red\"/>",
  height: "200",
  width: "100",
};
const _title = "Topmark cylinder red";
const _description = "Topmark cylinder red — Buoyage topmark";

export class TopmarkCylinderRed extends SymbolElement {
  static readonly tagName = 'nautical-topmark-cylinder-red';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
