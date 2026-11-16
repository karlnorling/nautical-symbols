// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"red\" d=\"M0 0h600v600H0z\"/><path fill=\"#fff\" d=\"M200 0h200v600H200z\"/>",
  height: "600",
  width: "600",
};
const _title = "NATO number flag 7";
const _description = "Blazon: Gules, a pale argent";

export class NatoFlag7 extends SymbolElement {
  static readonly tagName = 'nautical-nato-flag-7';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
