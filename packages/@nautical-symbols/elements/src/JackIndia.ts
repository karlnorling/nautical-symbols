// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-45 -30 90 60\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" fill=\"#07038d\"",
  body: "<title>Flag of India</title><path fill=\"#fff\" d=\"M-45-30h90v60h-90z\"/><path fill=\"#ff6820\" d=\"M-45-30h90v20h-90z\"/><path fill=\"#046a38\" d=\"M-45 10h90v20h-90z\"/><circle r=\"9.25\"/><circle r=\"8\" fill=\"#fff\"/><circle r=\"1.6\"/><g id=\"jack-india-d\"><g id=\"jack-india-c\"><g id=\"jack-india-b\"><g id=\"jack-india-a\"><path d=\"m0-8 .3 4.814L0-.802l-.3-2.384z\"/><circle cy=\"-8\" r=\".35\" transform=\"rotate(7.5)\"/></g><use xlink:href=\"#jack-india-a\" transform=\"scale(-1)\"/></g><use xlink:href=\"#jack-india-b\" transform=\"rotate(15)\"/></g><use xlink:href=\"#jack-india-c\" transform=\"rotate(30)\"/></g><use xlink:href=\"#jack-india-d\" transform=\"rotate(60)\"/><use xlink:href=\"#jack-india-d\" transform=\"rotate(120)\"/>",
  height: "600",
  width: "900",
};
const _title = "Naval jack of India";
const _description = "Naval jack of India. Flown at the bow of naval vessels in harbour or at anchor. The national flag flown as the jack.";

export class JackIndia extends SymbolElement {
  static readonly tagName = 'nautical-jack-india';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
