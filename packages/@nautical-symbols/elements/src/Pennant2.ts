// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 540 300\"",
  body: "<path fill=\"#00f\" stroke=\"#000\" stroke-width=\"2.5\" d=\"m1.25 1.25 537.5 75v147.5l-537.5 75z\"/><circle cx=\"150\" cy=\"150\" r=\"75.3\" fill=\"#fff\"/>",
  height: "300",
  width: "540",
};
const _title = "Number pennant 2";
const _description = "Blazon: Azure, a plate";

export class Pennant2 extends SymbolElement {
  static readonly tagName = 'nautical-pennant-2';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
