// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 4 4\"",
  body: "<path fill=\"#fff\" stroke=\"#000\" stroke-width=\".017\" d=\"M0 0h4v4H0z\"/><path fill=\"red\" d=\"m2 0 2 2-2 2-2-2\"/>",
  height: "600",
  width: "600",
};
const _title = "F (Foxtrot)";
const _description = "\"I am disabled; communicate with me.\"";

export const FlagFoxtrot = defineComponent({
  name: 'FlagFoxtrot',
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
