// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 5 5\"",
  body: "<path fill=\"#00f\" d=\"M0 0h5v5H0z\"/><path fill=\"#fff\" d=\"M0 1h5v3H0z\"/><path fill=\"red\" d=\"M0 2h5v1H0z\"/>",
  height: "600",
  width: "600",
};
const _title = "C (Charlie)";
const _description = "\"Affirmative.\" With a numeric complement: Magnetic bearing";

export class FlagCharlie extends SymbolElement {
  static readonly tagName = 'nautical-flag-charlie';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
