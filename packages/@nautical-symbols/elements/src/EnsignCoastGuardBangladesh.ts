// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"",
  body: "<path fill=\"#012169\" d=\"M0 0h1200v600H0\"/><path fill=\"#006747\" d=\"M0 0h600v300H0\"/><circle cx=\"270\" cy=\"150\" r=\"100\" fill=\"#da291c\"/>",
  height: "600",
  width: "1200",
};
const _title = "Coast guard ensign of Bangladesh";
const _description = "Coast guard ensign of Bangladesh. Flown at the stern by warships and other state vessels.";

export class EnsignCoastGuardBangladesh extends SymbolElement {
  static readonly tagName = 'nautical-ensign-coast-guard-bangladesh';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
