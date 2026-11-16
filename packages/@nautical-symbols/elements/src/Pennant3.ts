// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 540 300\"",
  body: "<path fill=\"#fff\" d=\"m1.25 1.25 537.5 75v147.5l-537.5 75z\"/><path fill=\"red\" d=\"m1.25 1.25 176.25 25v247.5l-176.25 25z\"/><path fill=\"#00f\" d=\"m362 52 176.25 25v147.5L362 249.5z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2.5\" d=\"m1.25 1.25 537.5 75v147.5l-537.5 75z\"/>",
  height: "300",
  width: "540",
};
const _title = "Number pennant 3";
const _description = "Blazon: Tierced in pale gules, argent and azure";

export class Pennant3 extends SymbolElement {
  static readonly tagName = 'nautical-pennant-3';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
