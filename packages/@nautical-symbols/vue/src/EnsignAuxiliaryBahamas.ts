// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 180 90\"",
  body: "<path fill=\"#fff\" d=\"M0 0h180v90H0z\"/><path fill=\"#00247d\" d=\"M0 39h180v12H0z\"/><path fill=\"#00247d\" d=\"M84 0h12v90H84z\"/><path fill=\"#00778b\" d=\"M0 0h84v39H0z\"/><path fill=\"#ffc72c\" d=\"M0 13h84v13H0z\"/><path d=\"M-19.5 5.225 0 39l33.775-19.5z\"/><path d=\"M-19.5 33.775 0 0l33.775 19.5z\"/>",
  height: "600",
  width: "1200",
};
const _title = "Naval auxiliary ensign of the Bahamas";
const _description = "Naval auxiliary ensign of the Bahamas. Flown at the stern by warships and other state vessels.";

export const EnsignAuxiliaryBahamas = defineComponent({
  name: 'EnsignAuxiliaryBahamas',
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
