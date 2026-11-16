// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 10080 5040\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"",
  body: "<defs><path id=\"ensign-civil-australia-a\" d=\"m0-360 69.421 215.845 212.038-80.301L155.99-35.603l194.985 115.71-225.881 19.651 31.105 224.59L0 160l-156.198 164.349 31.105-224.59-225.881-19.651 194.986-115.711-125.471-188.853 212.038 80.301z\"/><path id=\"ensign-civil-australia-e\" d=\"M0-210 54.86-75.508l144.862 10.614L88.765 28.842l34.67 141.052L0 93.334l-123.435 76.56 34.67-141.052-110.957-93.736L-54.86-75.508z\"/><clipPath id=\"ensign-civil-australia-b\"><path d=\"M0 0v1.5h7V3H6zm6 0H3v3.5H0V3z\"/></clipPath><use xlink:href=\"#ensign-civil-australia-a\" id=\"ensign-civil-australia-c\" transform=\"scale(2.1)\"/></defs><path fill=\"#002776\" d=\"M0 0h10080v5040H0z\"/><path stroke=\"#fff\" stroke-width=\"504\" d=\"m0 0 5040 2520m0-2520L0 2520\"/><path stroke=\"#e00034\" stroke-width=\".4\" d=\"m0 0 6 3m0-3L0 3\" clip-path=\"url(#ensign-civil-australia-b)\" transform=\"scale(840)\"/><path stroke=\"#fff\" stroke-width=\"840\" d=\"M2520 0v2940M0 1260h5880\"/><path stroke=\"#e00034\" stroke-width=\"504\" d=\"M2520 0v2940M0 1260h5880\"/><path fill=\"#e00034\" d=\"M0 2520h5040V0h5040v5040H0z\"/><g fill=\"#fff\"><use xlink:href=\"#ensign-civil-australia-c\" x=\"2520\" y=\"3780\"/><use xlink:href=\"#ensign-civil-australia-a\" x=\"7560\" y=\"4200\"/><use xlink:href=\"#ensign-civil-australia-a\" x=\"6300\" y=\"2205\"/><use xlink:href=\"#ensign-civil-australia-a\" x=\"7560\" y=\"840\"/><use xlink:href=\"#ensign-civil-australia-a\" x=\"8680\" y=\"1869\"/><use xlink:href=\"#ensign-civil-australia-e\" x=\"8064\" y=\"2730\"/></g>",
  height: "640",
  width: "1280",
};
const _title = "Civil ensign of Australia";
const _description = "Civil ensign of Australia. Flown at the stern by merchant and private vessels. The national flag in the canton of a red or blue field.";

export const EnsignCivilAustralia = defineComponent({
  name: 'EnsignCivilAustralia',
  inheritAttrs: false,
  props: symbolProps,
  setup(props, { attrs }) {
    const instanceId = useInstanceId();
    return () =>
      renderSymbol({
        attrs,
        description: props.description ?? _description,
        height: props.height,
        instanceId,
        svg: _svg,
        title: props.title ?? _title,
        width: props.width,
      });
  },
});
