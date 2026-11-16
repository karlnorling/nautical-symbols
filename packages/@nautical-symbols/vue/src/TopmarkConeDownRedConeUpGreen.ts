// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 250\"",
  body: "<path stroke=\"#000\" stroke-linecap=\"square\" stroke-width=\"10\" d=\"M50 86v160\"/><path fill=\"red\" d=\"M0 0h100L50 90z\"/><path fill=\"#0f0\" d=\"m50 90 50 90H0z\"/>",
  height: "250",
  width: "100",
};
const _title = "Topmark cone down red cone up green";
const _description = "Topmark cone down red cone up green — Buoyage topmark";

export const TopmarkConeDownRedConeUpGreen = defineComponent({
  name: 'TopmarkConeDownRedConeUpGreen',
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
