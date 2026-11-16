// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 27 16\"",
  body: "<title>Flag of Norway — state and war</title><defs><clipPath id=\"ensign-naval-norway-a\"><path d=\"M0 0h27L16 6l11 2-11 2 11 6H0z\"/></clipPath></defs><g clip-path=\"url(#ensign-naval-norway-a)\"><path fill=\"#fff\" d=\"M0 0h27v16H0z\"/><path fill=\"#ba0c2f\" d=\"M0 0h6v6H0zm10 0h17v6H10zm0 10h17v6H10zM0 10h6v6H0z\"/><path fill=\"#00205b\" d=\"M7 0h2v16H7zM0 7h27v2H0\"/></g>",
  height: "608",
  width: "1026",
};
const _title = "Naval ensign of Norway";
const _description = "Naval ensign of Norway. Flown at the stern by warships and other state vessels.";

export const EnsignNavalNorway = defineComponent({
  name: 'EnsignNavalNorway',
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
