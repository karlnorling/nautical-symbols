// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 3 3\"",
  body: "<path fill=\"#fff\" stroke=\"#000\" stroke-width=\".013\" d=\"M0 0h3v3H0z\"/><path fill=\"#00f\" d=\"M1 1h1v1H1z\"/>",
  height: "600",
  width: "600",
};
const _title = "S (Sierra)";
const _description = "\"I am operating astern propulsion.\" With a numeric complement: Speed (velocity) in knots";

export class FlagSierra extends SymbolElement {
  static readonly tagName = 'nautical-flag-sierra';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
