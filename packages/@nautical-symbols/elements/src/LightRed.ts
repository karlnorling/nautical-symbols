// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 1000\" xml:space=\"preserve\"",
  body: "<rect width=\"100%\" height=\"100%\" fill=\"#fff\"/><path stroke-linecap=\"round\" d=\"M-417.88 490.29c-4.34-3.3-6.29-6.91-6.67-12.33-.45-6.33 2.5-11.35 9.32-15.87 7.44-4.93 39.99-22.62 39.82-21.64-.1.6-4.71 11.01-10.24 23.14-8.21 17.99-10.49 22.48-12.38 24.4-5.43 5.49-14.31 6.52-19.85 2.3z\" style=\"stroke:#000;stroke-width:1.063;stroke-dasharray:none;stroke-linecap:butt;stroke-dashoffset:0;stroke-linejoin:miter;stroke-miterlimit:3.9879;is-custom-font:none;font-file-url:none;fill:red;fill-rule:evenodd;opacity:1\" transform=\"matrix(6.0994 0 0 5.7168 2939.772 -2167.74)\" vector-effect=\"non-scaling-stroke\"/>",
  height: "1000",
  width: "1000",
};
const _title = "Red light";
const _description = "Red light — Nautical chart symbol";

export class LightRed extends SymbolElement {
  static readonly tagName = 'nautical-light-red';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
