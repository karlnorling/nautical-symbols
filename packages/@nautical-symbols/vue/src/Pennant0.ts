// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 576 320\"",
  body: "<path fill=\"#ff0\" d=\"m1.25 1.25 537.5 75v147.5l-537.5 75z\"/><path fill=\"red\" d=\"M177.5 26 362 52v196l-184.5 26z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2.5\" d=\"m1.25 1.25 537.5 75v147.5l-537.5 75z\"/>",
  height: "320",
  width: "576",
};
const _title = "Number pennant 0";
const _description = "Blazon: Or, a pale gules";

export const Pennant0 = defineComponent({
  name: 'Pennant0',
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
