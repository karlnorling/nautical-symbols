// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-36 -18 72 36\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" fill=\"#ed2939\"",
  body: "<path d=\"M-36-18h72v36h-72z\"/><circle r=\"8.3\" fill=\"#fff\"/><circle r=\"7.35\"/><circle cy=\"1.25\" r=\"5.45\" fill=\"#fff\"/><circle cy=\"-1.05\" r=\"5.45\"/><g id=\"ensign-civil-singapore-e\" transform=\"matrix(1.6 0 0 1.6 0 -5.25)\"><g id=\"ensign-civil-singapore-b\"><path id=\"ensign-civil-singapore-a\" fill=\"#fff\" d=\"M0-1v1h.5z\" transform=\"rotate(18 0 -1)\"/><use xlink:href=\"#ensign-civil-singapore-a\" transform=\"scale(-1 1)\"/></g><g id=\"ensign-civil-singapore-c\"><use xlink:href=\"#ensign-civil-singapore-b\" transform=\"rotate(72)\"/><use xlink:href=\"#ensign-civil-singapore-b\" transform=\"rotate(216)\"/></g><use xlink:href=\"#ensign-civil-singapore-c\" transform=\"rotate(72)\"/></g><g id=\"ensign-civil-singapore-f\"><use xlink:href=\"#ensign-civil-singapore-e\" transform=\"rotate(72 0 -2)\"/><use xlink:href=\"#ensign-civil-singapore-e\" transform=\"rotate(216 0 -2)\"/></g><use xlink:href=\"#ensign-civil-singapore-f\" transform=\"rotate(72 0 -2)\"/>",
  height: "600",
  width: "1200",
};
const _title = "Civil ensign of Singapore";
const _description = "Civil ensign of Singapore. Flown at the stern by merchant and private vessels. Differs markedly from the national flag.";

export class EnsignCivilSingapore extends SymbolElement {
  static readonly tagName = 'nautical-ensign-civil-singapore';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
