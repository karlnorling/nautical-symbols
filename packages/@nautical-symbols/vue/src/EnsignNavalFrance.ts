// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 900 600\"",
  body: "<path fill=\"#ce1126\" d=\"M0 0h900v600H0\"/><path fill=\"#fff\" d=\"M0 0h567v600H0\"/><path fill=\"#002654\" d=\"M0 0h270v600H0\"/>",
  height: "600",
  width: "900",
};
const _title = "Naval ensign of France";
const _description = "Naval ensign of France. Flown at the stern by warships and other state vessels.";

export const EnsignNavalFrance = defineComponent({
  name: 'EnsignNavalFrance',
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
