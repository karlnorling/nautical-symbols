// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 800 800\"",
  body: "<path fill=\"#e70013\" d=\"M-200 0h1200v800H-200z\"/><path fill=\"#fff\" d=\"M400 200c110.457 0 200 89.543 200 200s-89.543 200-200 200-200-89.543-200-200 89.543-200 200-200\"/><path fill=\"#e70013\" d=\"M400 250c-82.843 0-150 67.157-150 150s67.157 150 150 150a150 150 0 0 0 121.02-61.65A120 120 0 0 1 440 520c-66.274 0-120-53.726-120-120s53.726-120 120-120a120 120 0 0 1 81.01 31.67A150 150 0 0 0 400 250\"/><path fill=\"#e70013\" d=\"m350.986 400.486 59.873 21.125 1.623 63.376 38.627-50.32 60.876 18.043-36.001-52.224 36.001-52.225-60.876 18.043-38.627-50.32-1.623 63.376z\"/>",
  height: "800",
  width: "800",
};
const _title = "Naval jack of Tunisia";
const _description = "Naval jack of Tunisia. Flown at the bow of naval vessels in harbour or at anchor. A square version of the national flag.";

export const JackTunisia = defineComponent({
  name: 'JackTunisia',
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
