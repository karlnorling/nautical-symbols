// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 12\"",
  body: "<path fill=\"#fff\" d=\"M0 0h24v12H0z\"/><path fill=\"#d21034\" d=\"M0 0h12v2H0z\"/><path d=\"M0 4h12v2H0z\"/><path fill=\"#007229\" d=\"m0 0 4 3-4 3z\"/>",
  height: "300",
  width: "600",
};
const _title = "Naval ensign of Sudan";
const _description = "Naval ensign of Sudan. Flown at the stern by warships and other state vessels.";

export const EnsignNavalSudan = defineComponent({
  name: 'EnsignNavalSudan',
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
