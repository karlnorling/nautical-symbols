// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 450 300\"",
  body: "<path fill=\"#ce1126\" fill-rule=\"evenodd\" d=\"M0 0h450v300H0z\"/><path fill=\"#fff\" d=\"M245 0v130h205V0zM0 170v130h205V170zm245 0v130h205V170z\"/><g fill-rule=\"evenodd\"><path fill=\"#fcd116\" d=\"M0 43.333h205V130H0z\"/><path fill=\"#006b3f\" d=\"M0 86.667h205V130H0z\"/><path d=\"M79.72 59.886h17.404l5.376-16.553 5.376 16.553h17.404l-14.078 10.228 5.376 16.552L102.5 76.438 88.422 86.666l5.376-16.552z\"/></g>",
  height: "300",
  width: "450",
};
const _title = "Naval ensign of Ghana";
const _description = "Naval ensign of Ghana. Flown at the stern by warships and other state vessels.";

export const EnsignNavalGhana = defineComponent({
  name: 'EnsignNavalGhana',
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
