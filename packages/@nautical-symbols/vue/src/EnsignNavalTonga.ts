// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 200 100\"",
  body: "<path fill=\"#fff\" d=\"M0 0h200v100H0z\"/><path stroke=\"#ce1126\" stroke-width=\"24\" d=\"M0 50h200M68 0v100\"/><path stroke=\"#fff\" stroke-width=\"20\" d=\"M0 50h200M68 0v100\"/><path stroke=\"#ce1126\" stroke-width=\"14\" d=\"M0 50h200M68 0v100\"/><path stroke=\"#ce1126\" stroke-width=\"10\" d=\"M13 19h30M28 4v30\"/>",
  height: "600",
  width: "1200",
};
const _title = "Naval ensign of Tonga";
const _description = "Naval ensign of Tonga. Flown at the stern by warships and other state vessels.";

export const EnsignNavalTonga = defineComponent({
  name: 'EnsignNavalTonga',
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
