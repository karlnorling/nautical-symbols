// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 9 6\"",
  body: "<path fill=\"#ae1c28\" d=\"M0 0h9v6H0z\"/><path fill=\"#21468b\" d=\"M0 0h4.5v6H9zm0 6V3h9V0z\"/><path fill=\"#fff\" d=\"M3 0h3L3 6h3zM0 2v2l9-2v2z\"/>",
  height: "800",
  width: "1200",
};
const _title = "Naval jack of the Netherlands (Prinsengeus)";
const _description = "Naval jack of the Netherlands (Prinsengeus). Flown at the bow of naval vessels in harbour or at anchor. A jack of special design.";

export const JackNetherlands = defineComponent({
  name: 'JackNetherlands',
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
