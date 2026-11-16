// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1200 600\"",
  body: "<path fill=\"#d90d19\" d=\"M0 0h1200v600H0z\"/><path fill=\"#0c3586\" d=\"M0 450h1200v150H0z\"/><path fill=\"#fff\" d=\"M0 468.252h1200v11.827H0zm0 30.046h1200v11.827H0zm0 30.045h1200v11.827H0z\"/><circle cx=\"600\" cy=\"225.485\" r=\"164.534\" fill=\"#fff\"/><path fill=\"#d90d19\" d=\"m600 72.712 34.3 105.56h111l-89.798 65.242 34.3 105.56-89.798-65.242-89.798 65.242 34.3-105.56-89.798-65.242h111z\"/>",
  height: "600",
  width: "1200",
};
const _title = "Naval jack of North Korea";
const _description = "Naval jack of North Korea. Flown at the bow of naval vessels in harbour or at anchor. A jack of special design.";

export const JackNorthKorea = defineComponent({
  name: 'JackNorthKorea',
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
