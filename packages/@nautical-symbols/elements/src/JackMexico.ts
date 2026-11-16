// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1000 1000\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"",
  body: "<path d=\"M0 0h1000.001v1000.001H0z\" style=\"fill:#006847;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:3.43214273;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1\"/><path d=\"M500 663.883c-6.144-14.945-11.854-31.31-22.824-36-11.24-14.756-16.55-24.468-21.647-34v29c-6.81-22.555-14.717-43.248-15.529-76 8.407 9.666 20.982 19.333 34.353 29l-11.765 6c8 14.578 16 25.074 24 29q4.706 3 7.53-10l1.411-190h-18.353v-19.001h18.353v-29h8.942v29h18.352v19h-18.352l1.411 190q2.824 13 7.53 10c8-3.925 16-14.421 24-29l-11.765-6c13.371-9.666 25.946-19.333 34.353-29-.812 32.753-8.718 53.446-15.53 76v-29c-5.097 9.533-10.405 19.245-21.647 34-10.969 4.691-16.68 21.056-22.823 36\" style=\"fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"/><path d=\"M510.83 355.596a16.245 16.245 0 1 1-32.49 0 16.245 16.245 0 1 1 32.49 0z\" style=\"fill:#006847;fill-opacity:1;fill-rule:evenodd;stroke:#fff;stroke-width:13.641238209999999;stroke-linecap:butt;stroke-linejoin:round;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1\" transform=\"matrix(.50288 0 0 1.06863 251.282 -21.521)\"/><path d=\"M337.5 1000 1000 337.5V1000z\" style=\"fill:#ce1126;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"/><path d=\"M662.5 0 0 662.5V0z\" style=\"fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1px;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"/><path id=\"jack-mexico-a\" d=\"m34.296 519.856-16.233-45.648-43.756 20.8 20.8-43.757-45.649-16.233 45.648-16.233-20.8-43.756 43.757 20.8 16.233-45.649 16.233 45.648 43.756-20.8-20.8 43.757 45.649 16.233-45.648 16.233 20.8 43.756-43.757-20.8z\" style=\"opacity:1;fill:#d9b45b;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:.69999999;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\" transform=\"translate(129.787 593.617)scale(.58936)\"/><use xlink:href=\"#jack-mexico-a\" width=\"1000\" height=\"1000\" transform=\"translate(0 -700)\"/><use xlink:href=\"#jack-mexico-a\" width=\"1000\" height=\"1000\" transform=\"translate(700)\"/>",
  height: "1000",
  width: "1000",
};
const _title = "Naval jack of Mexico";
const _description = "Naval jack of Mexico. Flown at the bow of naval vessels in harbour or at anchor. A jack of special design.";

export class JackMexico extends SymbolElement {
  static readonly tagName = 'nautical-jack-mexico';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
