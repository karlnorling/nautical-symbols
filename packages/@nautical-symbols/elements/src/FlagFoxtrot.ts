// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 4 4\"",
  body: "<path fill=\"#fff\" stroke=\"#000\" stroke-width=\".017\" d=\"M0 0h4v4H0z\"/><path fill=\"red\" d=\"m2 0 2 2-2 2-2-2\"/>",
  height: "600",
  width: "600",
};
const _title = "F (Foxtrot)";
const _description = "\"I am disabled; communicate with me.\"";

export class FlagFoxtrot extends SymbolElement {
  static readonly tagName = 'nautical-flag-foxtrot';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
