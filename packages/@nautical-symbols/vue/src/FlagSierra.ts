// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 3 3\"",
  body: "<path fill=\"#fff\" stroke=\"#000\" stroke-width=\".013\" d=\"M0 0h3v3H0z\"/><path fill=\"#00f\" d=\"M1 1h1v1H1z\"/>",
  height: "600",
  width: "600",
};
const _title = "S (Sierra)";
const _description = "\"I am operating astern propulsion.\" With a numeric complement: Speed (velocity) in knots";

export const FlagSierra = defineComponent({
  name: 'FlagSierra',
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
