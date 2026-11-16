// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"-35 -30 400 200\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"",
  body: "<clipPath id=\"ensign-civil-solomon-islands-a\"><path d=\"M-35-30h200V70H-35z\"/></clipPath><path fill=\"#cf142b\" d=\"M-35-30h400v200H-35z\"/><path fill=\"#215b33\" d=\"M-35-30h200V70H-35z\"/><path fill=\"#0051ba\" d=\"M-35 70V-30h200\"/><path stroke=\"#fcd116\" stroke-width=\"9\" d=\"M165-30-35 70\" clip-path=\"url(#ensign-civil-solomon-islands-a)\"/><g id=\"ensign-civil-solomon-islands-d\" fill=\"#fff\" transform=\"scale(10)\"><g id=\"ensign-civil-solomon-islands-c\"><path id=\"ensign-civil-solomon-islands-b\" d=\"M0 0v1h.5z\" transform=\"rotate(18 3.157 -.5)\"/><use xlink:href=\"#ensign-civil-solomon-islands-b\" transform=\"scale(-1 1)\"/></g><use xlink:href=\"#ensign-civil-solomon-islands-c\" transform=\"rotate(72)\"/><use xlink:href=\"#ensign-civil-solomon-islands-c\" transform=\"rotate(-72)\"/><use xlink:href=\"#ensign-civil-solomon-islands-c\" transform=\"rotate(144)\"/><use xlink:href=\"#ensign-civil-solomon-islands-c\" transform=\"rotate(-144)\"/></g><use xlink:href=\"#ensign-civil-solomon-islands-d\" transform=\"translate(19.741 -16.92)\"/><use xlink:href=\"#ensign-civil-solomon-islands-d\" transform=\"translate(19.741 16.92)\"/><use xlink:href=\"#ensign-civil-solomon-islands-d\" transform=\"translate(-19.741 16.92)\"/><use xlink:href=\"#ensign-civil-solomon-islands-d\" transform=\"translate(-19.741 -16.92)\"/>",
  height: "600",
  width: "1200",
};
const _title = "Civil ensign of Solomon Islands";
const _description = "Civil ensign of Solomon Islands. Flown at the stern by merchant and private vessels. The national flag in the canton of a red or blue field.";

export const EnsignCivilSolomonIslands = defineComponent({
  name: 'EnsignCivilSolomonIslands',
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
