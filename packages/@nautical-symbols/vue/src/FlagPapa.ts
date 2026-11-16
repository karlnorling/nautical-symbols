// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 3 3\"",
  body: "<path fill=\"#00f\" d=\"M0 0h3v3H0\"/><path fill=\"#fff\" d=\"M1 1h1v1H1\"/>",
  height: "600",
  width: "600",
};
const _title = "P (Papa)";
const _description = "The Blue Peter. In harbour: All persons should report on board as the vessel is about to proceed to sea. At sea: It may be used by fishing vessels to mean: \"My nets have come fast upon an obstruction.\"";

export const FlagPapa = defineComponent({
  name: 'FlagPapa',
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
