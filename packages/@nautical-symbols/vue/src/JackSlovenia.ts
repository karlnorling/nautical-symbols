// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 6 3\" xml:space=\"preserve\"",
  body: "<path fill=\"red\" d=\"M0 0h6v3H0z\" style=\"fill:#ff0;fill-opacity:1\"/><path fill=\"#005ce5\" d=\"M0 0h6v2H0z\" style=\"fill:#00f;fill-opacity:1\"/><path fill=\"#fff\" d=\"M0 0h6v1H0z\"/>",
  height: "600",
  width: "1200",
};
const _title = "Naval jack of Slovenia";
const _description = "Naval jack of Slovenia. Flown at the bow of naval vessels in harbour or at anchor. A jack of special design.";

export const JackSlovenia = defineComponent({
  name: 'JackSlovenia',
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
