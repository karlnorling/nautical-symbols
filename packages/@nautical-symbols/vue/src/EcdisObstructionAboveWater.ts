// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"M50 50h40v40H50z\" style=\"fill:#ccc57b;fill-rule:evenodd;stroke:#5f6a60;stroke-width:12;stroke-linecap:round;stroke-linejoin:round\"/>",
  height: "140",
  width: "140",
};
const _title = "Obstruction above water (ECDIS)";
const _description = "Obstruction above water (ECDIS) — ECDIS (IHO S-52) simplified symbol";

export const EcdisObstructionAboveWater = defineComponent({
  name: 'EcdisObstructionAboveWater',
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
