// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 180 120\"",
  body: "<path fill=\"#005\" d=\"M0 0h180v120H0z\"/><path fill=\"#fff\" d=\"M0 0v120l90-60z\"/><path fill=\"none\" stroke=\"#005\" stroke-width=\"3\" d=\"M16.598 52.262h26.804L30 75.475zm26.804 15.476H16.598L30 44.525z\"/>",
  height: "600",
  width: "900",
};
const _title = "Naval ensign of Israel";
const _description = "Naval ensign of Israel. Flown at the stern by warships and other state vessels.";

export class EnsignNavalIsrael extends SymbolElement {
  static readonly tagName = 'nautical-ensign-naval-israel';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
