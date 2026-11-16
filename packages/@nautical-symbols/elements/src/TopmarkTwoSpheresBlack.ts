// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 300\"",
  body: "<path stroke=\"#000\" stroke-linecap=\"square\" stroke-width=\"10\" d=\"M50 100v196\"/><circle cx=\"50\" cy=\"50\" r=\"50\"/><circle cx=\"50\" cy=\"200\" r=\"50\"/>",
  height: "300",
  width: "100",
};
const _title = "Topmark two spheres black";
const _description = "Topmark two spheres black — Buoyage topmark";

export class TopmarkTwoSpheresBlack extends SymbolElement {
  static readonly tagName = 'nautical-topmark-two-spheres-black';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
