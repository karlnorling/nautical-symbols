// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"#00f\" d=\"M0 0h600v300H0z\"/><path fill=\"red\" d=\"M0 300h600v300H0z\"/>",
  height: "600",
  width: "600",
};
const _title = "E (Echo)";
const _description = "\"I am altering my course to starboard.\"";

export class FlagEcho extends SymbolElement {
  static readonly tagName = 'nautical-flag-echo';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
