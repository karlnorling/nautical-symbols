// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 600\"",
  body: "<path fill=\"#2a7fff\" d=\"M0 0h1000v600H0z\"/><path fill=\"#fff\" d=\"M0 0h360v240H0Z\"/><path fill=\"#063\" d=\"M0 0h180v240H0Z\"/><path fill=\"#d21034\" d=\"M240 120a60 60 0 0 1-60 60 60 60 0 0 1-60-60 60 60 0 0 1 60-60 60 60 0 0 1 60 60\"/><path fill=\"#fff\" d=\"M194.492 72A48 48 0 0 0 180 74.298L146.8 120l33.2 45.745A48 48 0 0 0 194.492 168c26.51 0 48-21.49 48-48s-21.49-48-48-48\"/><path fill=\"#063\" d=\"M180 74.298A48 48 0 0 0 146.492 120 48 48 0 0 0 180 165.745z\"/><path fill=\"#d21034\" d=\"M234.27 120 180 102.366l33.541 46.166V91.468L180 137.634z\"/>",
  height: "600",
  width: "1000",
};
const _title = "Naval jack of Algeria";
const _description = "Naval jack of Algeria. Flown at the bow of naval vessels in harbour or at anchor. The national flag in the canton.";

export class JackAlgeria extends SymbolElement {
  static readonly tagName = 'nautical-jack-algeria';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
