// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 100\"",
  body: "<path d=\"M47.519 76.931V52.494H23.056v-4.988H47.52V23.07h4.962v24.437h24.463v4.988H52.48V76.93z\" style=\"fill:#000;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "100",
  width: "100",
};
const _title = "Rock underwater";
const _description = "Rock underwater — INT 1 paper chart symbol";

export class ChartRockUnderwater extends SymbolElement {
  static readonly tagName = 'nautical-chart-rock-underwater';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
