// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 300 300\"",
  body: "<path d=\"M142.5 8h15v66h64v22h-64v116c30 0 63-16 83-36h32c-30 30-75 57-115 72h-15c-40-15-85-42-115-72h32c20 20 53 36 83 36V96h-64V74h64z\" style=\"fill:none;fill-rule:evenodd;stroke:#d4b1dd;stroke-width:6;stroke-linecap:round;stroke-linejoin:round\"/><path d=\"m43.5 228 213-180\" style=\"fill:none;fill-rule:evenodd;stroke:#d4b1dd;stroke-width:18;stroke-linecap:round;stroke-linejoin:round\"/>",
  height: "300",
  width: "300",
};
const _title = "No anchorage area (ECDIS)";
const _description = "No anchorage area (ECDIS) — ECDIS (IHO S-52) simplified symbol";

export const EcdisNoAnchorageArea = defineComponent({
  name: 'EcdisNoAnchorageArea',
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
