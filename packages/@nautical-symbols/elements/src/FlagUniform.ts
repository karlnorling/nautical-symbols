// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"",
  body: "<path fill=\"red\" d=\"M0 0h2v2H0z\"/><path fill=\"#fff\" d=\"M0 1h2V0H1v2H0z\"/>",
  height: "600",
  width: "600",
};
const _title = "U (Uniform)";
const _description = "\"You are running into danger.\"";

export class FlagUniform extends SymbolElement {
  static readonly tagName = 'nautical-flag-uniform';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
