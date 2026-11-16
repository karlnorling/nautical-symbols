// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 138 92\"",
  body: "<title>Flag of Antigua and Barbuda</title><path fill=\"#fff\" d=\"M0 0h138v92H0z\"/><path d=\"M0 0h138l-9 46H9z\"/><path fill=\"#fcd116\" d=\"M69 46 39 36l15.288-2.926-13.004-8.555 15.244 3.147-8.741-12.879 12.879 8.741-3.147-15.244 8.555 13.004L69 6l2.926 15.288 8.555-13.004-3.147 15.244 12.879-8.741-8.741 12.879 15.244-3.147-13.004 8.555L99 36z\"/><path fill=\"#0072c6\" d=\"M9 36h120v20H9z\"/><path fill=\"#ce1126\" d=\"m0 0 69 92 69-92v92H0z\"/>",
  height: "600",
  width: "900",
};
const _title = "Naval jack of Antigua and Barbuda";
const _description = "Naval jack of Antigua and Barbuda. Flown at the bow of naval vessels in harbour or at anchor. The national flag flown as the jack.";

export const JackAntiguaAndBarbuda = defineComponent({
  name: 'JackAntiguaAndBarbuda',
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
