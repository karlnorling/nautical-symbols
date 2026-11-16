// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 100 200\"",
  body: "<path stroke=\"red\" stroke-linecap=\"square\" stroke-width=\"10\" d=\"M45 130v70\"/><path d=\"M0 0h100v130H0z\" style=\"fill:red\"/><path d=\"M0 43h100v42H0z\" style=\"fill:#fff\"/>",
  height: "200",
  width: "100",
};
const _title = "Topmark cylinder red white red";
const _description = "Topmark cylinder red white red — Buoyage topmark";

export const TopmarkCylinderRedWhiteRed = defineComponent({
  name: 'TopmarkCylinderRedWhiteRed',
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
