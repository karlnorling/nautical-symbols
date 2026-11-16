// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 180 90\"",
  body: "<path fill=\"#cf142b\" d=\"M0 0h180v90H0z\"/><path fill=\"#00778b\" d=\"M0 0h90v45H0z\"/><path fill=\"#ffc72c\" d=\"M0 13h90v13H0z\"/><path fill=\"#fff\" d=\"M0 39h180v12H0zM84 0h12v90H84z\"/><path d=\"M0 0v39l20-19z\"/><path d=\"m0 0 33.775 19.5-27.32 7.32z\"/><path d=\"M33.775 19.5 0 39l6.454-26.82z\"/>",
  height: "600",
  width: "1200",
};
const _title = "Civil ensign of the Bahamas";
const _description = "Civil ensign of the Bahamas. Flown at the stern by merchant and private vessels. The national flag in the canton of a red or blue field.";

export const EnsignCivilBahamas = defineComponent({
  name: 'EnsignCivilBahamas',
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
