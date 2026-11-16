// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 550 350\"",
  body: "<path fill=\"#00f\" stroke=\"#000\" stroke-width=\"2.5\" d=\"m2 2 546 173L2 348z\"/><path fill=\"#ff0\" d=\"m3 58 364 117L3 292\"/>",
  height: "350",
  width: "550",
};
const _title = "First substitute";
const _description = "Repeats the first flag or pennant in the same hoist. Blazon: Triangular, or, a bordure azure which does not touch the dexter end";

export const Substitute1 = defineComponent({
  name: 'Substitute1',
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
