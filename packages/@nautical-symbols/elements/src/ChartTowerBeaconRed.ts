// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 320\"",
  body: "<path d=\"M176.625 126.344 172 197.219h-8.156v5.656h24c1.287 5.533 6.233 9.656 12.156 9.656 5.925 0 10.87-4.12 12.156-9.656h24v-5.656H228l-4.969-70.875zm6.719 7.094h33.312l4.594 63.78h-9.094c-1.285-5.535-6.231-9.655-12.156-9.655-5.923 0-10.869 4.123-12.156 9.656h-9.094zM200 192.53c4.14 0 7.5 3.36 7.5 7.5s-3.36 7.5-7.5 7.5-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\" transform=\"translate(-40 -40)\"/>",
  height: "320",
  width: "320",
};
const _title = "Tower beacon red";
const _description = "Tower beacon red — INT 1 paper chart symbol";

export class ChartTowerBeaconRed extends SymbolElement {
  static readonly tagName = 'nautical-chart-tower-beacon-red';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
