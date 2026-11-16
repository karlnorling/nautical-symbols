// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 120 120\"",
  body: "<path d=\"M60 5.5c-5.796 0-10.5 4.704-10.5 10.5a10.51 10.51 0 0 0 7.688 10.125v4.063H42.28v4.937h14.907l-1.782 65.188-.906-.157-7.031-1.437-6.657-2.188-6.03-3.5-5.594-4.406 3.875-3.875-15.594-12.406L21.03 96.78l5.313-4.969L30.28 95.5l5.5 4.531 5.969 3.594 6.656 2.25 7 1.531.719 7.438h7.063l.718-7.063 6.032-1.156 6.718-2.187 6.25-3.407 5.594-4.344 5.188-4.874L99 97.125l3.531-24.781-15.937 12.75L90.844 89l-1.125.781-5.906 4-6.22 3.281-6.718 2.126-6.969 1.5-1.062-65.563H77.75v-4.937l-15.25-.375v-3.625c4.592-1.122 8-5.252 8-10.188 0-5.796-4.704-10.5-10.5-10.5m0 5.5c2.76 0 5 2.24 5 5s-2.24 5-5 5-5-2.24-5-5 2.24-5 5-5\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "120",
  width: "120",
};
const _title = "Anchorage";
const _description = "Anchorage — INT 1 paper chart symbol";

export class ChartAnchorage extends SymbolElement {
  static readonly tagName = 'nautical-chart-anchorage';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
