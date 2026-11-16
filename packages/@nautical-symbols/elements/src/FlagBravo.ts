// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"red\" stroke=\"#000\" stroke-width=\"2\" d=\"m448 300 148 299H1V1h595z\"/>",
  height: "600",
  width: "600",
};
const _title = "B (Bravo)";
const _description = "\"I am taking in or discharging or carrying dangerous goods.\" (Originally used by the Royal Navy specifically for military explosives.)";

export class FlagBravo extends SymbolElement {
  static readonly tagName = 'nautical-flag-bravo';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
