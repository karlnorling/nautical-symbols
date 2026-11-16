// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 320\"",
  body: "<path d=\"m197 42-5.594 16.719-6.531-2.094-30.469 68.063-29.781 32.593h-7.781l-.125 5.656h31.062c1.288 5.533 6.234 9.657 12.156 9.657 5.925 0 10.871-4.12 12.157-9.656h24.125v-5.657h-7.781l-2.47-22.344 16.626-72.624-7.156-2.282 5.593-16.687zm-7.875 23.125 4.969 1.781-15.219 68.032 2.469 22.343h-9.25c-1.283-5.54-6.229-9.687-12.156-9.687-5.926 0-10.872 4.15-12.157 9.687h-13.594l26.25-28.375zm-21.7 94.981c0 4.14-3.36 7.5-7.5 7.5s-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5 7.5 3.36 7.5 7.5m17.044-129.775 17.937-8.937-8.937-17.938 4.475-2.25 9.275 18.063 17.95-8.963 2.237 4.5-18.275 8.838 8.938 17.937-4.15 2.35-9.275-18.062-17.938 8.95z\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "320",
  width: "320",
};
const _title = "Pillar buoy red X-shaped topmark";
const _description = "Pillar buoy red X-shaped topmark — INT 1 paper chart symbol";

export class ChartPillarBuoyRedXShapedTopmark extends SymbolElement {
  static readonly tagName = 'nautical-chart-pillar-buoy-red-x-shaped-topmark';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
