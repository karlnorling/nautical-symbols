// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 300\" xml:space=\"preserve\" id=\"ensign-naval-abkhazia-Layer_1\" x=\"0\" y=\"0\"",
  body: "<style>.st0{fill:#fff}</style><path d=\"M0 0h600v300H0z\" class=\"st0\"/><path d=\"M0 214.3h600v42.9H0z\" class=\"st0\"/><path d=\"M0 0h228v128.6H0z\" style=\"fill:#c8312a\"/><path d=\"M96.4 71.8s-2 .8-.6 16.5c1.1 12.9 5.7 17.1 5.7 17.1l2 8 19.1.1s.3-4.9 1.1-6.5c1.8-3.8 9-8.2 12.1-14.9 3.3-4 1.7-12.3 8.3-20.3 3.3-4-3.9-2.3-3.9-2.3-3.9 2.6-5.9 5.7-6.8 7.8-.7 4.1-3.8 7.6-4 4.6 0 0-1.1-5.2-4.5-15.2-.3-3-1.8-13.3-2.1-21.2-.2-5.1-4.7-5.4-5.1-.2l-.7 20.6-1-23.7c-.5-6.7-5.5-5.7-5.8-.2l-.2 24.8-.9-24c-1.4-4.6-5-1.9-5.1 3.1l-.6 23.4s-.8-12.8-1-18.2c-.2-3.2-4-3-4.3 1.6-.6 6.7-1.4 12.2-1.7 19.1M108.2 28l5.8-17.8 5.8 17.8-15.2-11h18.7zm45.1 7.1-15.2-11h18.7l-15.2 11 5.8-17.8zm28.6 21.2-15.2-11h18.7l-15.2 11 5.8-17.8zm16.6 29.9-15.2-11H202l-15.2 11 5.8-17.8zM74.7 35.1l15.2-11H71.2l15.2 11-5.8-17.8zM46.1 56.3l15.2-11H42.5l15.2 11-5.8-17.8zM29.5 86.2l15.2-11H25.9l15.2 11-5.8-17.8z\" class=\"st0\"/><path d=\"M0 214.3h600V300H0z\" style=\"fill:#0057fa\"/>",
  height: "100%",
  width: "100%",
};
const _title = "Naval ensign of Abkhazia";
const _description = "Naval ensign of Abkhazia. Flown at the stern by warships and other state vessels.";

export const EnsignNavalAbkhazia = defineComponent({
  name: 'EnsignNavalAbkhazia',
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
