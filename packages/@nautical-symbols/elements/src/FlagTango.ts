// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"red\" d=\"M0 0h200v600H0z\"/><path fill=\"#fff\" d=\"M200 0h200v600H200z\"/><path fill=\"#00f\" d=\"M400 0h200v600H400z\"/>",
  height: "600",
  width: "600",
};
const _title = "T (Tango)";
const _description = "\"Keep clear of me.\" Fishing boats: \"Keep clear of me; I am engaged in pair trawling.\" With a numeric complement: Local time. (The first 2 digits denote hours; the last 2 denote minutes.)";

export class FlagTango extends SymbolElement {
  static readonly tagName = 'nautical-flag-tango';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
