// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 80.113 111.137\" xml:space=\"preserve\" overflow=\"visible\"",
  body: "<switch><foreignObject width=\"1\" height=\"1\" x=\"0\" y=\"0\" requiredExtensions=\"http://ns.adobe.com/AdobeIllustrator/10.0/\"/><g><path fill=\"green\" d=\"m80.113 111.137-69.9-68.824L5.1 37.262l-3.687-5.949L0 24.237l.838-7.275 2.95-6.562L8.65 5.112l6.475-3.6L22.388 0l6.925.85 5.775 3.3 4.825 5.1 4.312 6.063.825 1.25z\"/></g></switch>",
  height: "111.137",
  width: "80.113",
};
const _title = "Green light flare (pointing down)";
const _description = "Green light flare (pointing down) — Nautical chart symbol";

export class LightFlareGreenDown extends SymbolElement {
  static readonly tagName = 'nautical-light-flare-green-down';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
