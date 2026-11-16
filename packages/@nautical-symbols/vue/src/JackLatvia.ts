// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 150 100\"",
  body: "<path fill=\"#fff\" d=\"M0 0h150v100H0z\"/><path fill=\"none\" stroke=\"#9e292b\" stroke-width=\"20\" d=\"M75 0v100M0 50h150M0 0l150 100M0 100 150 0\" style=\"stroke:#9d2235;stroke-opacity:1\"/><path fill=\"none\" stroke=\"#fff\" stroke-width=\"4\" d=\"M75 0v100M0 50h150M0 0l150 100M0 100 150 0\"/>",
  height: "800",
  width: "1200",
};
const _title = "Naval jack of Latvia";
const _description = "Naval jack of Latvia. Flown at the bow of naval vessels in harbour or at anchor. A cross or saltire design.";

export const JackLatvia = defineComponent({
  name: 'JackLatvia',
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
