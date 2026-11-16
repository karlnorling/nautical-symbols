// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"#ff0\" stroke=\"#000\" stroke-width=\"2\" d=\"M0 0h600v600H0\"/><circle cx=\"300\" cy=\"300\" r=\"150\"/>",
  height: "600",
  width: "600",
};
const _title = "I (India)";
const _description = "\"I am altering my course to port.\"";

export class FlagIndia extends SymbolElement {
  static readonly tagName = 'nautical-flag-india';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
