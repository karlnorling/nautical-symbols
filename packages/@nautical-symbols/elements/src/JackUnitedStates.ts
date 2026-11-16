// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2964 2100\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"",
  body: "<path fill=\"#00205b\" d=\"M0 0h2964v2100H0\"/><g fill=\"#fff\"><g id=\"jack-united-states-d\"><g id=\"jack-united-states-c\"><g id=\"jack-united-states-f\"><g id=\"jack-united-states-b\"><path id=\"jack-united-states-a\" d=\"m247 90 70.534 217.082-184.66-134.164h228.253L176.466 307.082\"/><use xlink:href=\"#jack-united-states-a\" y=\"420\"/><use xlink:href=\"#jack-united-states-a\" y=\"840\"/><use xlink:href=\"#jack-united-states-a\" y=\"1260\"/></g><use xlink:href=\"#jack-united-states-a\" y=\"1680\"/></g><use xlink:href=\"#jack-united-states-b\" x=\"247\" y=\"210\"/></g><use xlink:href=\"#jack-united-states-c\" x=\"494\"/></g><use xlink:href=\"#jack-united-states-d\" x=\"988\"/><use xlink:href=\"#jack-united-states-c\" x=\"1976\"/><use xlink:href=\"#jack-united-states-f\" x=\"2470\"/></g>",
  height: "525",
  width: "741",
};
const _title = "Naval jack of the United States";
const _description = "Naval jack of the United States. Flown at the bow of naval vessels in harbour or at anchor. The canton of the national ensign.";

export class JackUnitedStates extends SymbolElement {
  static readonly tagName = 'nautical-jack-united-states';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
