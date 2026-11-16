// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-1.25 -1.25 542.5 302.5\"",
  body: "<title>ICS numeral pennant 4: Gules, a cross argent</title><desc>Original drawing for nautical-symbols, dedicated to the public domain (CC0 1.0).</desc><clipPath id=\"pennant-4-a\"><path d=\"m0 0 540 75v150L0 300Z\"/></clipPath><g clip-path=\"url(#pennant-4-a)\"><path fill=\"red\" d=\"M0 0h540v300H0z\"/><path fill=\"#fff\" d=\"M142.5 0h75v300h-75z\"/><path fill=\"#fff\" d=\"M0 112.5h540v75H0z\"/></g><path fill=\"none\" stroke=\"#000\" stroke-width=\"2.5\" d=\"m0 0 540 75v150L0 300Z\"/>",
  height: "302.5",
  width: "542.5",
};
const _title = "Number pennant 4";
const _description = "Blazon: Gules, a cross of Saint Philip argent";

export class Pennant4 extends SymbolElement {
  static readonly tagName = 'nautical-pennant-4';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
