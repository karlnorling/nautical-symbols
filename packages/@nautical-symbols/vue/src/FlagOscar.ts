// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1 1\"",
  body: "<path fill=\"red\" d=\"M0 0h1v1H0z\"/><path fill=\"#ff0\" d=\"M0 0v1h1z\"/>",
  height: "600",
  width: "600",
};
const _title = "O (Oscar)";
const _description = "\"Man overboard.\" (often attached to the man overboard pole on boats). With a sinister hoist, the semaphore flag.";

export const FlagOscar = defineComponent({
  name: 'FlagOscar',
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
