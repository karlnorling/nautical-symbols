// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 5 5\"",
  body: "<path fill=\"red\" d=\"M0 0h5v5H0z\"/><path fill=\"#ff0\" d=\"M2 0h1v2h2v1H3v2H2V3H0V2h2z\"/>",
  height: "600",
  width: "600",
};
const _title = "R (Romeo)";
const _description = "No ICS meaning as single flag. Prior to 1969: \"The way is off my ship; you may feel your way past me.\" With a numeric complement: Distance (range) in nautical miles.";

export const FlagRomeo = defineComponent({
  name: 'FlagRomeo',
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
