// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 600\"",
  body: "<path fill=\"#fff\" d=\"M1.25 1.25h597.5v597.5H1.25z\"/><path fill=\"#00f\" d=\"M171 0h175L0 346V171zm341 0h88v88L88 600H0v-88zM254 600l346-346v177L254 777z\"/><path fill=\"none\" stroke=\"#000\" stroke-width=\"2.5\" d=\"M1.25 1.25h597.5v597.5H1.25z\"/>",
  height: "600",
  width: "600",
};
const _title = "NATO number flag 6";
const _description = "Blazon: Bendy sinister of seven argent and azure";

export const NatoFlag6 = defineComponent({
  name: 'NatoFlag6',
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
