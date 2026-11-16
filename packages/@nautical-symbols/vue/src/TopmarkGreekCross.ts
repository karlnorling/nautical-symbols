// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 150\"",
  body: "<path stroke=\"#ff0\" stroke-linecap=\"square\" stroke-width=\"10\" d=\"M50 100v50\"/><path stroke=\"#ff0\" stroke-linecap=\"square\" stroke-width=\"15\" d=\"M50 8v84M8 50h84\"/>",
  height: "150",
  width: "100",
};
const _title = "Topmark greek cross";
const _description = "Topmark greek cross — Buoyage topmark";

export const TopmarkGreekCross = defineComponent({
  name: 'TopmarkGreekCross',
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
