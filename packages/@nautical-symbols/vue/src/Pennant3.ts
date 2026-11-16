// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 540 300\"",
  body: "<path fill=\"#fff\" d=\"m1.25 1.25 537.5 75v147.5l-537.5 75z\"/><path fill=\"red\" d=\"m1.25 1.25 176.25 25v247.5l-176.25 25z\"/><path fill=\"#00f\" d=\"m362 52 176.25 25v147.5L362 249.5z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2.5\" d=\"m1.25 1.25 537.5 75v147.5l-537.5 75z\"/>",
  height: "300",
  width: "540",
};
const _title = "Number pennant 3";
const _description = "Blazon: Tierced in pale gules, argent and azure";

export const Pennant3 = defineComponent({
  name: 'Pennant3',
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
