// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 550 350\"",
  body: "<path fill=\"red\" stroke=\"#000\" stroke-width=\"2.5\" d=\"M1.5 2 547 175 1.5 348z\"/><path fill=\"#ff0\" d=\"M2.75 117h116v116h-116z\"/>",
  height: "350",
  width: "550",
};
const _title = "Fourth substitute";
const _description = "Repeats the fourth flag or pennant in the same hoist. Blazon: Triangular, gules, a square or in the fess position touching the dexter end";

export const Substitute4 = defineComponent({
  name: 'Substitute4',
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
