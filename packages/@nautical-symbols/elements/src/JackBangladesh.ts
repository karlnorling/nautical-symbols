// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 10 6\"",
  body: "<path fill=\"#006747\" d=\"M0 0h10v6H0z\"/><circle cx=\"4.5\" cy=\"3\" r=\"2\" fill=\"#da291c\"/>",
  height: "100%",
  width: "100%",
};
const _title = "Naval jack of Bangladesh";
const _description = "Naval jack of Bangladesh. Flown at the bow of naval vessels in harbour or at anchor. The national flag flown as the jack.";

export class JackBangladesh extends SymbolElement {
  static readonly tagName = 'nautical-jack-bangladesh';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
