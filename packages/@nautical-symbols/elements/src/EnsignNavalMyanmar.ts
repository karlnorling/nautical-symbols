// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 900 500\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"",
  body: "<path fill=\"#fff\" d=\"M0 0h900v500H0z\"/><path fill=\"#da2d1c\" d=\"M0 0h450v250H0z\"/><g fill=\"#fff\" transform=\"translate(225 125)\"><g id=\"ensign-naval-myanmar-b\"><path id=\"ensign-naval-myanmar-a\" d=\"M0-85V0h42.5\" transform=\"rotate(18 0 -85)\"/><use xlink:href=\"#ensign-naval-myanmar-a\" transform=\"scale(-1 1)\"/></g><use xlink:href=\"#ensign-naval-myanmar-b\" transform=\"rotate(72)\"/><use xlink:href=\"#ensign-naval-myanmar-b\" transform=\"rotate(144)\"/><use xlink:href=\"#ensign-naval-myanmar-b\" transform=\"rotate(216)\"/><use xlink:href=\"#ensign-naval-myanmar-b\" transform=\"rotate(288)\"/></g><g style=\"fill:#1d3e95;fill-opacity:1\"><path d=\"m1231.75 44.104-9.975 12.457-.988 18.726h-42.338l-2.06 15.356 43.15 8.314-3.451 65.467c-2.077 15.487-12.462 18.248-20.223 19.474-7.76 1.227-12.623-6.037-16.222-11.402 3.751-3.53 8.25-3.108 10.757-3.406-15.237-7.941-24.55-21.782-28.617-35.94-10.25 18.836-11.284 39.136-2.81 53.184 2.773-4.688 5.273-7.083 7.361-7.977 4.147 6.104 15.89 23.025 31.215 25.3 15.325 2.273 23.35 12.893 34.201 21.066 10.85-8.173 18.877-18.793 34.201-21.067s27.07-19.195 31.217-25.299c2.088.894 4.586 3.29 7.36 7.977 8.473-14.048 7.441-34.348-2.81-53.184-4.066 14.158-13.379 27.999-28.616 35.94 2.508.298 7.005-.125 10.757 3.406-3.599 5.365-8.461 12.629-16.222 11.402-7.761-1.226-18.148-3.987-20.225-19.474l-3.43-65.084 45.14-8.697-2.06-15.356h-44.35l-.985-18.726z\" style=\"fill:#1d3e95;fill-opacity:1;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\" transform=\"matrix(.6159 0 0 .587 39.99 318.434)\"/><path d=\"M1231.75 15.27a27.62 27.62 0 0 0-27.621 27.62 27.62 27.62 0 0 0 27.621 27.622 27.62 27.62 0 0 0 27.621-27.621 27.62 27.62 0 0 0-27.621-27.621m0 14.931a12.69 12.69 0 0 1 12.69 12.69 12.69 12.69 0 0 1-12.69 12.687 12.69 12.69 0 0 1-12.687-12.687 12.69 12.69 0 0 1 12.687-12.69\" style=\"fill:#1d3e95;fill-opacity:1;stroke:none;stroke-width:1;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1\" transform=\"matrix(.6159 0 0 .587 39.99 318.434)\"/></g>",
  height: "500",
  width: "900",
};
const _title = "Naval ensign of Myanmar";
const _description = "Naval ensign of Myanmar. Flown at the stern by warships and other state vessels.";

export class EnsignNavalMyanmar extends SymbolElement {
  static readonly tagName = 'nautical-ensign-naval-myanmar';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
