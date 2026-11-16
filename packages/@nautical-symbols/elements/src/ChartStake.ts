// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"M59.725 108.094v-4.6l7.8-.363V31.906h4.962v71.225h7.788v4.963z\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "140",
  width: "140",
};
const _title = "Stake";
const _description = "Stake — INT 1 paper chart symbol";

export class ChartStake extends SymbolElement {
  static readonly tagName = 'nautical-chart-stake';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
