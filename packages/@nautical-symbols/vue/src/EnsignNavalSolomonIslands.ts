// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"",
  body: "<clipPath id=\"ensign-naval-solomon-islands-a\"><path d=\"M0 0h560v260H0z\"/></clipPath><path fill=\"#fff\" d=\"M0 0h1200v600H0z\"/><path fill=\"#215b33\" d=\"M0 0h560v260H0z\"/><path fill=\"#0051ba\" d=\"M0 260V0h560\"/><path stroke=\"#fcd116\" stroke-width=\"23.4\" d=\"M0 260 560 0\" clip-path=\"url(#ensign-naval-solomon-islands-a)\"/><path stroke=\"#ce1126\" stroke-width=\"80\" d=\"M0 300h1200M600 0v600\"/><g transform=\"matrix(2.6 0 0 2.6 91 78)\"><g id=\"ensign-naval-solomon-islands-d\" fill=\"#fff\" transform=\"scale(10)\"><g id=\"ensign-naval-solomon-islands-c\"><path id=\"ensign-naval-solomon-islands-b\" d=\"M0 0v1h.5z\" transform=\"rotate(18 3.157 -.5)\"/><use xlink:href=\"#ensign-naval-solomon-islands-b\" transform=\"scale(-1 1)\"/></g><use xlink:href=\"#ensign-naval-solomon-islands-c\" transform=\"rotate(72)\"/><use xlink:href=\"#ensign-naval-solomon-islands-c\" transform=\"rotate(-72)\"/><use xlink:href=\"#ensign-naval-solomon-islands-c\" transform=\"rotate(144)\"/><use xlink:href=\"#ensign-naval-solomon-islands-c\" transform=\"rotate(-144)\"/></g><use xlink:href=\"#ensign-naval-solomon-islands-d\" transform=\"translate(19.741 -16.92)\"/><use xlink:href=\"#ensign-naval-solomon-islands-d\" transform=\"translate(19.741 16.92)\"/><use xlink:href=\"#ensign-naval-solomon-islands-d\" transform=\"translate(-19.741 16.92)\"/><use xlink:href=\"#ensign-naval-solomon-islands-d\" transform=\"translate(-19.741 -16.92)\"/></g>",
  height: "600",
  width: "1200",
};
const _title = "Naval ensign of Solomon Islands";
const _description = "Naval ensign of Solomon Islands. Flown at the stern by warships and other state vessels.";

export const EnsignNavalSolomonIslands = defineComponent({
  name: 'EnsignNavalSolomonIslands',
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
