// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 6 6\"",
  body: "<path fill=\"#ce1126\" d=\"M0 0h6v6H0z\"/><path fill=\"#f9d616\" d=\"M1 1h4v4H1z\"/><path fill=\"#007a3d\" d=\"M2 2h2v2H2z\"/>",
  height: "600",
  width: "600",
};
const _title = "Naval jack of Bolivia";
const _description = "Naval jack of Bolivia. Flown at the bow of naval vessels in harbour or at anchor. A jack of special design.";

export const JackBolivia = defineComponent({
  name: 'JackBolivia',
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
