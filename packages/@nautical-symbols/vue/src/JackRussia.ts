// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30 20\"",
  body: "<path fill=\"#d52b1e\" d=\"M0 0h30v20H0z\"/><path stroke=\"#fff\" d=\"M0 10h30M15 0v20\"/><path stroke=\"#fff\" stroke-width=\"4\" d=\"m0 0 30 20M0 20 30 0\"/><path stroke=\"#0039a6\" stroke-width=\"3\" d=\"m0 0 30 20M0 20 30 0\"/>",
  height: "600",
  width: "900",
};
const _title = "Naval jack of Russia";
const _description = "Naval jack of Russia. Flown at the bow of naval vessels in harbour or at anchor. A cross or saltire design.";

export const JackRussia = defineComponent({
  name: 'JackRussia',
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
