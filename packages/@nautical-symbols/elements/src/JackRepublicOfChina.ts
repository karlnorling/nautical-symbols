// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-30 -20 60 40\"",
  body: "<path fill=\"#000094\" d=\"M-30-20h60v40h-60z\"/><path id=\"jack-republic-of-china-a\" fill=\"#fff\" d=\"m0 4 15-4L0-4l-15 4zm4-4L0 15-4 0l4-15z\"/><use href=\"#jack-republic-of-china-a\" transform=\"rotate(30)\"/><use href=\"#jack-republic-of-china-a\" transform=\"rotate(60)\"/><circle r=\"8\" fill=\"#fff\" stroke=\"#000094\"/>",
  height: "600",
  width: "900",
};
const _title = "Naval jack of the Republic of China";
const _description = "Naval jack of the Republic of China. Flown at the bow of naval vessels in harbour or at anchor. The canton of the national ensign.";

export class JackRepublicOfChina extends SymbolElement {
  static readonly tagName = 'nautical-jack-republic-of-china';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
