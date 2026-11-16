// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 150\"",
  body: "<path stroke=\"#0f0\" stroke-linecap=\"square\" stroke-width=\"10\" d=\"M50 100v46\"/><circle cx=\"50\" cy=\"50\" r=\"50\" fill=\"red\"/><path fill=\"#0f0\" d=\"M100 50A50 50 0 0 1 0 50z\"/>",
  height: "150",
  width: "100",
};
const _title = "Topmark sphere red green";
const _description = "Topmark sphere red green — Buoyage topmark";

export const TopmarkSphereRedGreen = defineComponent({
  name: 'TopmarkSphereRedGreen',
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
