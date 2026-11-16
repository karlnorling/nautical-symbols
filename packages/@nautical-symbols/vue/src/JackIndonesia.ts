// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 13.5 9\"",
  body: "<path fill=\"#fff\" d=\"M0 0h13.5v9H0z\"/><path stroke=\"red\" stroke-dasharray=\"1\" stroke-width=\"13.5\" d=\"M6.75 0v9\"/>",
  height: "600",
  width: "900",
};
const _title = "Naval jack of Indonesia";
const _description = "Naval jack of Indonesia. Flown at the bow of naval vessels in harbour or at anchor. A jack of special design.";

export const JackIndonesia = defineComponent({
  name: 'JackIndonesia',
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
