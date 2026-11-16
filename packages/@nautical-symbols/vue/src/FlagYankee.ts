// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"red\" d=\"M0 0h600v600H0z\"/><path stroke=\"#ff0\" stroke-dasharray=\"84,86\" stroke-width=\"850\" d=\"m0 0 600 600\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2.5\" d=\"M0 0h600v600H0z\"/>",
  height: "600",
  width: "600",
};
const _title = "Y (Yankee)";
const _description = "\"I am dragging my anchor.\"";

export const FlagYankee = defineComponent({
  name: 'FlagYankee',
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
