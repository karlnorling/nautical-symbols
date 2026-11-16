// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 400 400\"",
  body: "<path d=\"m237.075 81.894-5.594 16.718-6.531-2.093-30.469 68.062-29.781 32.594h-7.781l-.125 5.656h31.062c1.288 5.533 6.234 9.656 12.156 9.657 5.925 0 10.871-4.121 12.157-9.657h24.125v-5.656h-7.782l-2.468-22.344 16.625-72.625-7.157-2.281 5.594-16.687zm-7.875 23.125 4.969 1.781-15.219 68.031 2.469 22.344h-9.25c-1.283-5.54-6.229-9.687-12.157-9.687-5.925 0-10.871 4.15-12.156 9.687h-13.594l26.25-28.375zM207.5 200c0 4.14-3.36 7.5-7.5 7.5s-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5 7.5 3.36 7.5 7.5m64-170.8c0 8.004-6.496 14.5-14.5 14.5s-14.5-6.496-14.5-14.5 6.496-14.5 14.5-14.5 14.5 6.496 14.5 14.5m-11.5 35c0 8.004-6.496 14.5-14.5 14.5S231 72.204 231 64.2s6.496-14.5 14.5-14.5S260 56.196 260 64.2\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "400",
  width: "400",
};
const _title = "Isolated danger mark pillar";
const _description = "Isolated danger mark pillar — INT 1 paper chart symbol";

export class ChartIsolatedDangerMarkPillar extends SymbolElement {
  static readonly tagName = 'nautical-chart-isolated-danger-mark-pillar';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
