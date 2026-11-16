// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"M105 70c0 19.32-15.68 35-35 35S35 89.32 35 70s15.68-35 35-35 35 15.68 35 35M38.5 55h63M70 50v40m-31.5-5h63\" style=\"fill:none;stroke:#c64dbb;stroke-width:3;stroke-linecap:round;stroke-linejoin:round\"/>",
  height: "140",
  width: "140",
};
const _title = "Non-navigable lock gate (ECDIS)";
const _description = "Non-navigable lock gate (ECDIS) — ECDIS (IHO S-52) simplified symbol";

export const EcdisNonNavigableLockGate = defineComponent({
  name: 'EcdisNonNavigableLockGate',
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
