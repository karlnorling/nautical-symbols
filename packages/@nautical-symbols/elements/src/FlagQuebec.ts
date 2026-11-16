// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"#ff0\" d=\"M0 0h600v600H0z\"/>",
  height: "600",
  width: "600",
};
const _title = "Q (Quebec)";
const _description = "\"My vessel is 'healthy' and I request free pratique.\"";

export class FlagQuebec extends SymbolElement {
  static readonly tagName = 'nautical-flag-quebec';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
