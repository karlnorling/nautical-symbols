// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 6 6\"",
  body: "<path fill=\"#ff0\" d=\"M0 0h6v6H0z\"/><path fill=\"#00f\" d=\"M1 0v6h1V0h1v6h1V0h1v6h1V0z\"/>",
  height: "600",
  width: "600",
};
const _title = "G (Golf)";
const _description = "\"I require a pilot.\" By fishing vessels near fishing grounds: \"I am hauling nets.\" With a numeric complement: Longitude (The first 2 or 3 digits denote degrees; the last 2 denote minutes.)";

export class FlagGolf extends SymbolElement {
  static readonly tagName = 'nautical-flag-golf';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
