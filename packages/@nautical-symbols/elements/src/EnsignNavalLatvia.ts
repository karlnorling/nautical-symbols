// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 150 100\"",
  body: "<path fill=\"#fff\" d=\"M0 0h150v100H0z\"/><path fill=\"none\" stroke=\"#9e292b\" stroke-width=\"20\" d=\"M75 0v100M0 50h150\" style=\"stroke:#9d2235;stroke-opacity:1\"/><path fill=\"none\" stroke=\"#fff\" stroke-width=\"4\" d=\"M75 0v100M0 50h150\"/>",
  height: "800",
  width: "1200",
};
const _title = "Naval ensign of Latvia";
const _description = "Naval ensign of Latvia. Flown at the stern by warships and other state vessels.";

export class EnsignNavalLatvia extends SymbolElement {
  static readonly tagName = 'nautical-ensign-naval-latvia';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
