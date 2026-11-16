// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 300\"",
  body: "<path d=\"M0 0h600v300H0z\" style=\"opacity:1;fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1\"/><path d=\"M0 130h280V0h40v130h280v40H320v130h-40V170H0z\" style=\"fill:#ce1126;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"/><path d=\"M0 170h280v130H0z\" style=\"fill:#ce1126;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1pt;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\" transform=\"matrix(.98929 0 0 .97692 0 -166.077)\"/><path d=\"M280 300 91.373 170H0l188.627 130z\" style=\"fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1pt;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\" transform=\"matrix(.98929 0 0 .97692 0 -166.077)\"/><path d=\"M264.787 300H203.84L15.213 170H76.16z\" style=\"fill:#000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1pt;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\" transform=\"matrix(.98929 0 0 .97692 0 -166.077)\"/>",
  height: "300",
  width: "600",
};
const _title = "Naval ensign of Trinidad and Tobago";
const _description = "Naval ensign of Trinidad and Tobago. Flown at the stern by warships and other state vessels.";

export class EnsignNavalTrinidadAndTobago extends SymbolElement {
  static readonly tagName = 'nautical-ensign-naval-trinidad-and-tobago';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
