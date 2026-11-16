// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 900 600\"",
  body: "<path fill=\"#fff\" d=\"M0 0h500v400H0\"/><path fill=\"#0051ba\" stroke=\"#0051ba\" stroke-width=\"45\" d=\"M459-6-9 306M0 0l459 306M0 323h473V0h427v600H0\"/>",
  height: "600",
  width: "900",
};
const _title = "Naval auxiliary ensign of Russia";
const _description = "Naval auxiliary ensign of Russia. Flown at the stern by warships and other state vessels.";

export const EnsignAuxiliaryRussia = defineComponent({
  name: 'EnsignAuxiliaryRussia',
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
