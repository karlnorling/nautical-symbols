// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 300\"",
  body: "<path stroke=\"red\" stroke-linecap=\"square\" stroke-width=\"10\" d=\"M50 90v206\"/><path d=\"M0 0h100v130H0z\" style=\"fill:red\"/><circle cx=\"50\" cy=\"200\" r=\"50\" fill=\"red\"/>",
  height: "300",
  width: "100",
};
const _title = "Topmark cylinder sphere red";
const _description = "Topmark cylinder sphere red — Buoyage topmark";

export const TopmarkCylinderSphereRed = defineComponent({
  name: 'TopmarkCylinderSphereRed',
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
