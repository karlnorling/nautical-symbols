// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"red\" d=\"M1 0h599v600H1\"/><path fill=\"#fff\" d=\"M0 0h300v600H0\"/>",
  height: "600",
  width: "600",
};
const _title = "H (Hotel)";
const _description = "\"I have a pilot on board.\"";

export class FlagHotel extends SymbolElement {
  static readonly tagName = 'nautical-flag-hotel';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
