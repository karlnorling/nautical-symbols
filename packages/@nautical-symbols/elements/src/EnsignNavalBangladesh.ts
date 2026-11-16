// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 300\"",
  body: "<path fill=\"#fff\" d=\"M0 0h600v300H0z\"/><path fill=\"#006747\" d=\"M0 0h300v150H0z\"/><circle cx=\"225\" cy=\"150\" r=\"100\" fill=\"#da291c\" transform=\"translate(22.5)scale(.5)\"/>",
  height: "300",
  width: "600",
};
const _title = "Naval ensign of Bangladesh";
const _description = "Naval ensign of Bangladesh. Flown at the stern by warships and other state vessels.";

export class EnsignNavalBangladesh extends SymbolElement {
  static readonly tagName = 'nautical-ensign-naval-bangladesh';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
