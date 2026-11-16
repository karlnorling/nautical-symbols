// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"#ff0\" d=\"M0 0h600v600H0z\"/><path fill=\"#00f\" d=\"M0 120h600v360H0z\"/>",
  height: "600",
  width: "600",
};
const _title = "D (Delta)";
const _description = "\"Keep clear of me; I am maneuvering with difficulty.\" With a numeric complement: Date";

export class FlagDelta extends SymbolElement {
  static readonly tagName = 'nautical-flag-delta';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
