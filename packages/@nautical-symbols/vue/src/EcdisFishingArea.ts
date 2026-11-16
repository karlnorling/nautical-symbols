// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 240 240\"",
  body: "<path d=\"m10 86 34 34c33 33 55 45 93 45s60-12 93-45c-33-33-55-45-93-45s-60 12-93 45l-34 34m164.594-73.406A67.65 67.65 0 0 0 162 120a67.65 67.65 0 0 0 12.594 39.406\" style=\"fill:none;stroke:#88988b;stroke-width:12;stroke-linecap:round;stroke-linejoin:round\"/>",
  height: "240",
  width: "240",
};
const _title = "Fishing area (ECDIS)";
const _description = "Fishing area (ECDIS) — ECDIS (IHO S-52) simplified symbol";

export const EcdisFishingArea = defineComponent({
  name: 'EcdisFishingArea',
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
