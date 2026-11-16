// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 900 600\"",
  body: "<path fill=\"#ce1126\" d=\"M0 0h900v600H0z\" style=\"fill:#c8102e;fill-opacity:1\"/><path fill=\"#003893\" d=\"M0 0h900v450H0z\" style=\"fill:#003087;fill-opacity:1\"/><path fill=\"#fcd116\" d=\"M0 0h900v300H0z\" style=\"fill:#ffcd00;fill-opacity:1\"/><ellipse cx=\"450\" cy=\"300\" fill=\"#ce1126\" rx=\"60\" ry=\"75\" style=\"fill:#c8102e;fill-opacity:1\"/><ellipse cx=\"450\" cy=\"300\" fill=\"#003893\" rx=\"45\" ry=\"60\" style=\"fill:#003087;fill-opacity:1\"/><path fill=\"#fff\" d=\"m450 280 4 10 10-4-4 10 10 4-10 4 4 10-10-4-4 10-4-10-10 4 4-10-10-4 10-4-4-10 10 4z\"/>",
  height: "800",
  width: "1200",
};
const _title = "Civil ensign of Colombia";
const _description = "Civil ensign of Colombia. Flown at the stern by merchant and private vessels. The national flag with an added emblem.";

export class EnsignCivilColombia extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-colombia';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
