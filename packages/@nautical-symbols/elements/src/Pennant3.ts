// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-1.25 -1.25 542.5 302.5\"",
  body: "<title>ICS numeral pennant 3: Tierced in pale gules, argent and azure</title><desc>Original drawing for nautical-symbols, dedicated to the public domain (CC0 1.0).</desc><clipPath id=\"pennant-3-a\"><path d=\"m0 0 540 75v150L0 300Z\"/></clipPath><g clip-path=\"url(#pennant-3-a)\"><path fill=\"red\" d=\"M0 0h180v300H0z\"/><path fill=\"#fff\" d=\"M180 0h180v300H180z\"/><path fill=\"#00f\" d=\"M360 0h180v300H360z\"/></g><path fill=\"none\" stroke=\"#000\" stroke-width=\"2.5\" d=\"m0 0 540 75v150L0 300Z\"/>",
  height: "302.5",
  width: "542.5",
};
const _title = "Number pennant 3";
const _description = "Blazon: Tierced in pale gules, argent and azure";

export class Pennant3 extends SymbolElement {
  static readonly tagName = 'nautical-pennant-3';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
