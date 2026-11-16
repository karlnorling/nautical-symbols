// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 200\"",
  body: "<path d=\"m374.012 82.273-.009-35.43 88.632 53.067-88.556 53.247-.034-35.43-336.633.288-.047-35.455z\" style=\"fill:none;stroke:#a30075;stroke-width:4.375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1\"/>",
  height: "200",
  width: "500",
};
const _title = "Traffic direction";
const _description = "Traffic direction — INT 1 paper chart symbol";

export class ChartTrafficDirection extends SymbolElement {
  static readonly tagName = 'nautical-chart-traffic-direction';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
