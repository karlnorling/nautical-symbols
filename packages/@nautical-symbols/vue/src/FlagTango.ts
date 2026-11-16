// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"red\" d=\"M0 0h200v600H0z\"/><path fill=\"#fff\" d=\"M200 0h200v600H200z\"/><path fill=\"#00f\" d=\"M400 0h200v600H400z\"/>",
  height: "600",
  width: "600",
};
const _title = "T (Tango)";
const _description = "\"Keep clear of me.\" Fishing boats: \"Keep clear of me; I am engaged in pair trawling.\" With a numeric complement: Local time. (The first 2 digits denote hours; the last 2 denote minutes.)";

export const FlagTango = defineComponent({
  name: 'FlagTango',
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
