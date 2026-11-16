// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"#ff0\" d=\"M0 0h600v600H0z\"/><path fill=\"#00f\" d=\"M200 0h200v600H200z\"/>",
  height: "600",
  width: "600",
};
const _title = "NATO number flag 8";
const _description = "Blazon: Or, a pale azure";

export class NatoFlag8 extends SymbolElement {
  static readonly tagName = 'nautical-nato-flag-8';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
