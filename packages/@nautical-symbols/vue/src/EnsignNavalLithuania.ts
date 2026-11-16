// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 20 12\"",
  body: "<path fill=\"#fff\" d=\"M0 0h20v12H0Z\"/><path fill=\"#c1272d\" d=\"M0 0h10v6H0Z\"/><path fill=\"#006a44\" d=\"M0 0h10v3.6H0Z\"/><path fill=\"#fdb913\" d=\"M0 0h10v1.8H0Z\"/><path fill=\"none\" stroke=\"#0054a6\" stroke-width=\"1.2\" d=\"M0 6h20M10 0v12\"/>",
  height: "600",
  width: "1000",
};
const _title = "Naval ensign of Lithuania";
const _description = "Naval ensign of Lithuania. Flown at the stern by warships and other state vessels.";

export const EnsignNavalLithuania = defineComponent({
  name: 'EnsignNavalLithuania',
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
