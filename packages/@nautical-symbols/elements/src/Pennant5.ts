// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 540 300\"",
  body: "<path fill=\"#ff0\" d=\"m1.25 1.25 537.5 75v147.5l-537.5 75z\"/><path fill=\"#00f\" d=\"M270 39v222l269-37.75V76.75z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2.5\" d=\"m1.25 1.25 537.5 75v147.5l-537.5 75z\"/>",
  height: "300",
  width: "540",
};
const _title = "Number pennant 5";
const _description = "Blazon: Per pale or and azure";

export class Pennant5 extends SymbolElement {
  static readonly tagName = 'nautical-pennant-5';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
