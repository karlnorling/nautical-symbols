// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"#ff0\" d=\"M0 0h600v600H0z\"/><path stroke=\"#00f\" stroke-width=\"106\" d=\"m0 0 600 600M0 600 600 0\"/>",
  height: "600",
  width: "600",
};
const _title = "NATO number flag 5";
const _description = "Blazon: Or, a saltire azure";

export const NatoFlag5 = defineComponent({
  name: 'NatoFlag5',
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
