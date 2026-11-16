// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 300\"",
  body: "<path d=\"m131.256 119.889-69.9-68.825-5.112-5.05-3.688-5.95-1.412-7.075.837-7.275 2.95-6.563 4.863-5.287 6.475-3.6L73.53 8.75l6.925.85 5.775 3.3 4.825 5.1 4.313 6.063.825 1.25z\" style=\"fill:#a30075;fill-opacity:1;fill-rule:evenodd;stroke:none\"/><path d=\"m134.519 171.501 6.012-18.412-15.937-11.338 19.487-.375 6.375-18.412 6.025 18.412 19.488.375-15.588 11.338 6.025 18.412-15.95-11.325z\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "300",
  width: "300",
};
const _title = "Minor light";
const _description = "Minor light — INT 1 paper chart symbol";

export class ChartMinorLight extends SymbolElement {
  static readonly tagName = 'nautical-chart-minor-light';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
