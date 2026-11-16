// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-1.25 -1.25 542.5 302.5\"",
  body: "<title>ICS numeral pennant 1: Argent, a torteau</title><desc>Original drawing for nautical-symbols, dedicated to the public domain (CC0 1.0).</desc><clipPath id=\"pennant-1-a\"><path d=\"m0 0 540 75v150L0 300Z\"/></clipPath><g clip-path=\"url(#pennant-1-a)\"><path fill=\"#fff\" d=\"M0 0h540v300H0z\"/><circle cx=\"180\" cy=\"150\" r=\"75\" fill=\"red\"/></g><path fill=\"none\" stroke=\"#000\" stroke-width=\"2.5\" d=\"m0 0 540 75v150L0 300Z\"/>",
  height: "302.5",
  width: "542.5",
};
const _title = "Number pennant 1";
const _description = "Blazon: Argent, a torteau";

export class Pennant1 extends SymbolElement {
  static readonly tagName = 'nautical-pennant-1';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
