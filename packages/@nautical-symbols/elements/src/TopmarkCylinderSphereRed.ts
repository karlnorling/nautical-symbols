// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 300\"",
  body: "<path stroke=\"red\" stroke-linecap=\"square\" stroke-width=\"10\" d=\"M50 90v206\"/><path d=\"M0 0h100v130H0z\" style=\"fill:red\"/><circle cx=\"50\" cy=\"200\" r=\"50\" fill=\"red\"/>",
  height: "300",
  width: "100",
};
const _title = "Topmark cylinder sphere red";
const _description = "Topmark cylinder sphere red — Buoyage topmark";

export class TopmarkCylinderSphereRed extends SymbolElement {
  static readonly tagName = 'nautical-topmark-cylinder-sphere-red';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
