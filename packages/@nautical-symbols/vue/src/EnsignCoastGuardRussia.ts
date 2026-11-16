// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 9000 6000\"",
  body: "<path fill=\"#00ba18\" d=\"M0 0h9000v6000H0z\"/><path fill=\"#fff\" d=\"M0 4918 7378 0h1622v1082L1622 6000H0z\"/><path fill=\"#fff\" d=\"M9000 4918 1622 0H0v1082l7378 4918h1622z\"/><path fill=\"#0051ba\" d=\"M9000 5459 811 0H0v541l8189 5459h811z\"/><path fill=\"#0051ba\" d=\"M0 5459 8189 0h811v541L811 6000H0z\"/>",
  height: "600",
  width: "900",
};
const _title = "Coast guard ensign of Russia";
const _description = "Coast guard ensign of Russia. Flown at the stern by warships and other state vessels.";

export const EnsignCoastGuardRussia = defineComponent({
  name: 'EnsignCoastGuardRussia',
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
