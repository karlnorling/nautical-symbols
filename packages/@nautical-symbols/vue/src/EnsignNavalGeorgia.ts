// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 3 2\"",
  body: "<path fill=\"#2859a1\" d=\"M0 0h3v2H0z\"/><path fill=\"none\" stroke=\"#00ba18\" stroke-width=\".62\" d=\"m0 0 3 2M0 2l3-2\"/><path fill=\"none\" stroke=\"#2859a1\" stroke-width=\".41\" d=\"m0 0 3 2M0 2l3-2\"/><path fill=\"none\" stroke=\"#fefefe\" stroke-width=\".3\" d=\"m0 0 3 2M0 2l3-2\"/>",
  height: "500",
  width: "750",
};
const _title = "Naval ensign of Georgia";
const _description = "Naval ensign of Georgia. Flown at the stern by warships and other state vessels.";

export const EnsignNavalGeorgia = defineComponent({
  name: 'EnsignNavalGeorgia',
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
