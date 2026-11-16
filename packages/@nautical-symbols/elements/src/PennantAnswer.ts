// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 540 300\"",
  body: "<path fill=\"red\" d=\"m1.25 1.25 537.5 75v147.5l-537.5 75z\"/><path fill=\"#fff\" d=\"M108 16v268l108-15V31l108 15v208l108-15V61z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2.5\" d=\"m1.25 1.25 537.5 75v147.5l-537.5 75z\"/>",
  height: "300",
  width: "540",
};
const _title = "Answer pennant";
const _description = "Code and answering pennant, also used as the decimal point. Flown above a reply to acknowledge a signal. Blazon: Paleways of five pieces, gules and argent";

export class PennantAnswer extends SymbolElement {
  static readonly tagName = 'nautical-pennant-answer';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
