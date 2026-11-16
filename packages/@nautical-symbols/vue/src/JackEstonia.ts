// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 22 14\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"",
  body: "<path d=\"M0 0h22v14H0z\" style=\"fill:#fff\"/><path id=\"jack-estonia-a\" d=\"M0 0v1.186L20.137 14H22v-1.186L1.863 0z\"/><use xlink:href=\"#jack-estonia-a\" transform=\"matrix(-1 0 0 1 22 0)\"/><path d=\"M0 7h22M11 0v14\" style=\"stroke:#0072ce;stroke-width:4\"/>",
  height: "700",
  width: "1100",
};
const _title = "Naval jack of Estonia";
const _description = "Naval jack of Estonia. Flown at the bow of naval vessels in harbour or at anchor. A cross or saltire design.";

export const JackEstonia = defineComponent({
  name: 'JackEstonia',
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
