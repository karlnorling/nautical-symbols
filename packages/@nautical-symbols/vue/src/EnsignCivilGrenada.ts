// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 300\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"",
  body: "<defs><g id=\"ensign-civil-grenada-c\"><g id=\"ensign-civil-grenada-b\"><path id=\"ensign-civil-grenada-a\" fill=\"#fcd116\" d=\"M0-1v1h.5\" transform=\"rotate(18 0 -1)\"/><use xlink:href=\"#ensign-civil-grenada-a\" transform=\"scale(-1 1)\"/></g><use xlink:href=\"#ensign-civil-grenada-b\" transform=\"rotate(72)\"/><use xlink:href=\"#ensign-civil-grenada-b\" transform=\"rotate(144)\"/><use xlink:href=\"#ensign-civil-grenada-b\" transform=\"rotate(216)\"/><use xlink:href=\"#ensign-civil-grenada-b\" transform=\"rotate(288)\"/></g></defs><path fill=\"#ce1126\" d=\"M0 0h600v300H0z\"/><path fill=\"#007a5e\" d=\"M42 42h516v216H42z\"/><path fill=\"#fcd116\" d=\"M42 42h516L42 258h516z\"/><circle cx=\"300\" cy=\"150\" r=\"36\" fill=\"#ce1126\"/><use xlink:href=\"#ensign-civil-grenada-c\" transform=\"matrix(33 0 0 33 300 150)\"/><use xlink:href=\"#ensign-civil-grenada-e\" x=\"-125\"/><use xlink:href=\"#ensign-civil-grenada-c\" id=\"ensign-civil-grenada-e\" transform=\"translate(300 21)scale(19.5)\"/><use xlink:href=\"#ensign-civil-grenada-e\" x=\"125\"/><use xlink:href=\"#ensign-civil-grenada-e\" x=\"-125\" y=\"258\"/><use xlink:href=\"#ensign-civil-grenada-e\" y=\"258\"/><use xlink:href=\"#ensign-civil-grenada-e\" x=\"125\" y=\"258\"/><path fill=\"#ce1126\" d=\"M85.749 150.406c4.504 8.39 13.265 17.523 20.916 20.731.123-8.515-2.9-19.436-7.034-28.135z\"/><path fill=\"#fcd116\" d=\"M78.112 121.63c6.529 13.612-16.933 46.076 22.156 53.69-4.822-6.58-7.93-17.443-6.755-26.165 8.2 3.126 16.83 12.25 20.317 19.232 10.23-37.15-26.24-34.884-35.718-46.757\"/>",
  height: "300",
  width: "600",
};
const _title = "Civil ensign of Grenada";
const _description = "Civil ensign of Grenada. Flown at the stern by merchant and private vessels. The national flag in different proportions.";

export const EnsignCivilGrenada = defineComponent({
  name: 'EnsignCivilGrenada',
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
