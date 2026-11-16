// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"#ff0\" d=\"M0 0h600v600H0z\"/><path fill=\"#00f\" d=\"M0 120h600v360H0z\"/>",
  height: "600",
  width: "600",
};
const _title = "D (Delta)";
const _description = "\"Keep clear of me; I am maneuvering with difficulty.\" With a numeric complement: Date";

export const FlagDelta = defineComponent({
  name: 'FlagDelta',
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
