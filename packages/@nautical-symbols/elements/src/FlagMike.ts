// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"#00f\" d=\"M0 0h600v600H0z\"/><g stroke=\"#fff\" stroke-width=\"105\"><path d=\"m0 0 600 600zm0 600L600 0z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2\" d=\"M0 0h600v600H0z\"/></g>",
  height: "600",
  width: "600",
};
const _title = "M (Mike)";
const _description = "\"My vessel is stopped and making no way through the water.\"";

export class FlagMike extends SymbolElement {
  static readonly tagName = 'nautical-flag-mike';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
