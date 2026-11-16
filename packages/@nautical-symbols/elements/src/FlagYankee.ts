// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"red\" d=\"M0 0h600v600H0z\"/><path stroke=\"#ff0\" stroke-dasharray=\"84,86\" stroke-width=\"850\" d=\"m0 0 600 600\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2.5\" d=\"M0 0h600v600H0z\"/>",
  height: "600",
  width: "600",
};
const _title = "Y (Yankee)";
const _description = "\"I am dragging my anchor.\"";

export class FlagYankee extends SymbolElement {
  static readonly tagName = 'nautical-flag-yankee';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
