// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"red\" stroke=\"#000\" stroke-width=\"2\" d=\"m448 300 148 299H1V1h595z\"/>",
  height: "600",
  width: "600",
};
const _title = "B (Bravo)";
const _description = "\"I am taking in or discharging or carrying dangerous goods.\" (Originally used by the Royal Navy specifically for military explosives.)";

export const FlagBravo = defineComponent({
  name: 'FlagBravo',
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
