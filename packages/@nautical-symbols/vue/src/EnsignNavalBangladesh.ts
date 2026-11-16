// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 300\"",
  body: "<path fill=\"#fff\" d=\"M0 0h600v300H0z\"/><path fill=\"#006747\" d=\"M0 0h300v150H0z\"/><circle cx=\"225\" cy=\"150\" r=\"100\" fill=\"#da291c\" transform=\"translate(22.5)scale(.5)\"/>",
  height: "300",
  width: "600",
};
const _title = "Naval ensign of Bangladesh";
const _description = "Naval ensign of Bangladesh. Flown at the stern by warships and other state vessels.";

export const EnsignNavalBangladesh = defineComponent({
  name: 'EnsignNavalBangladesh',
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
