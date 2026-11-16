// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-45 -30 180 120\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" fill=\"#002584\"",
  body: "<path d=\"M-45-30h180V90H-45z\"/><path fill=\"#fff\" d=\"M-45-30h90v60h-90z\"/><path fill=\"#f15b25\" d=\"M-45-30h90v20h-90z\"/><path fill=\"#006934\" d=\"M-45 10h90v20h-90z\"/><circle r=\"9.25\"/><circle r=\"8\" fill=\"#fff\"/><circle r=\"1.6\"/><g id=\"ensign-reserve-india-d\"><g id=\"ensign-reserve-india-c\"><g id=\"ensign-reserve-india-b\"><g id=\"ensign-reserve-india-a\"><path d=\"m0-8 .3 4.814L0-.802l-.3-2.384z\"/><circle cy=\"-8\" r=\".35\" transform=\"rotate(7.5)\"/></g><use xlink:href=\"#ensign-reserve-india-a\" transform=\"scale(-1)\"/></g><use xlink:href=\"#ensign-reserve-india-b\" transform=\"rotate(15)\"/></g><use xlink:href=\"#ensign-reserve-india-c\" transform=\"rotate(30)\"/></g><use xlink:href=\"#ensign-reserve-india-d\" transform=\"rotate(60)\"/><use xlink:href=\"#ensign-reserve-india-d\" transform=\"rotate(120)\"/>",
  height: "600",
  width: "900",
};
const _title = "Reserve ensign of India";
const _description = "Reserve ensign of India. Flown at the stern by merchant and private vessels. A blue ensign for government or reserve vessels.";

export class EnsignReserveIndia extends SymbolElement {
  static readonly tagName = 'nautical-ensign-reserve-india';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
