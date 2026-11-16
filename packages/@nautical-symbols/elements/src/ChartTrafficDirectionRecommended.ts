// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 200\"",
  body: "<path d=\"M336.619 117.725h-37.4m-18.7 0h-37.4m-18.7 0h-37.425m-18.713 0h-37.4m-18.7 0h-37.4m-18.7 0h-18.7v-35.45h18.7m18.7 0h37.4m18.7 0h37.4m18.713 0h37.425m18.7 0h37.4m18.7 0h37.4m18.7 0h18.7V46.85l88.6 53.15-88.6 53.15v-35.425h-18.7\" style=\"fill:none;stroke:#a30075;stroke-width:4.375;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:10;stroke-dasharray:none;stroke-opacity:1\"/>",
  height: "200",
  width: "500",
};
const _title = "Traffic direction recommended";
const _description = "Traffic direction recommended — INT 1 paper chart symbol";

export class ChartTrafficDirectionRecommended extends SymbolElement {
  static readonly tagName = 'nautical-chart-traffic-direction-recommended';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
