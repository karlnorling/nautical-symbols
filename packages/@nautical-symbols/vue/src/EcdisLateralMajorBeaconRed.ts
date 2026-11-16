// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 140 140\"",
  body: "<path d=\"M50 30h40v80H50z\" style=\"fill:#ee5a6c;fill-opacity:1;fill-rule:evenodd;stroke:#010101;stroke-width:6;stroke-linecap:round;stroke-linejoin:round\"/><path d=\"M76 70c0 3.312-2.688 6-6 6s-6-2.688-6-6 2.688-6 6-6 6 2.688 6 6\" style=\"fill:#010101\"/>",
  height: "140",
  width: "140",
};
const _title = "Lateral major beacon red (ECDIS)";
const _description = "Lateral major beacon red (ECDIS) — ECDIS (IHO S-52) simplified symbol";

export const EcdisLateralMajorBeaconRed = defineComponent({
  name: 'EcdisLateralMajorBeaconRed',
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
