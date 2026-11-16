// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 150\"",
  body: "<path stroke=\"red\" stroke-linecap=\"square\" stroke-width=\"10\" d=\"M50 100v46\"/><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"red\"/>",
  height: "150",
  width: "100",
};
const _title = "Topmark sphere red";
const _description = "Topmark sphere red — Buoyage topmark";

export class TopmarkSphereRed extends SymbolElement {
  static readonly tagName = 'nautical-topmark-sphere-red';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
