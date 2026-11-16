// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 800\"",
  body: "<path fill=\"#003f87\" d=\"M0 0h800v800H0z\"/><path fill=\"#fff\" d=\"M335 0h130v800H335z\"/><path fill=\"#fff\" d=\"M0 335h800v130H0z\"/>",
  height: "800",
  width: "800",
};
const _title = "Naval jack of Greece";
const _description = "Naval jack of Greece. Flown at the bow of naval vessels in harbour or at anchor. The canton of the national ensign.";

export const JackGreece = defineComponent({
  name: 'JackGreece',
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
