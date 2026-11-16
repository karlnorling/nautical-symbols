// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"",
  body: "<path fill=\"#002984\" d=\"M0 0h600v600H0z\"/><g fill=\"#fabe19\" transform=\"matrix(240 0 0 240 300 300)\"><g id=\"jack-iran-a\"><path d=\"M-.548.836A.912.912 0 0 0 .329-.722 1 1 0 0 1-.548.836\"/><path d=\"M.618.661A.764.764 0 0 0 .422-.74 1 1 0 0 1 .618.661M0 1l-.05-1L0-.787a.3.3 0 0 0 .118.099V-.1l-.04.993zM-.02-.85 0-.831a.144.144 0 0 0 .252-.137A.136.136 0 0 1 0-.925\"/></g><use xlink:href=\"#jack-iran-a\" transform=\"scale(-1 1)\"/></g>",
  height: "600",
  width: "600",
};
const _title = "Naval jack of Iran";
const _description = "Naval jack of Iran. Flown at the bow of naval vessels in harbour or at anchor. Shows the national coat of arms.";

export class JackIran extends SymbolElement {
  static readonly tagName = 'nautical-jack-iran';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
