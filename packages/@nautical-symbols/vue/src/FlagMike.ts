// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"#00f\" d=\"M0 0h600v600H0z\"/><g stroke=\"#fff\" stroke-width=\"105\"><path d=\"m0 0 600 600zm0 600L600 0z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2\" d=\"M0 0h600v600H0z\"/></g>",
  height: "600",
  width: "600",
};
const _title = "M (Mike)";
const _description = "\"My vessel is stopped and making no way through the water.\"";

export const FlagMike = defineComponent({
  name: 'FlagMike',
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
