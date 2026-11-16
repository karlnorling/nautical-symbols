// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1500 1000\"",
  body: "<path d=\"M-887.143-99.066h1500v1000h-1500z\" style=\"fill:#fff;fill-opacity:1\" transform=\"translate(887.143 99.066)\"/><path d=\"M-887.143-99.066h650v400h-650z\" style=\"fill:gold;fill-opacity:1\" transform=\"translate(887.143 99.066)\"/><path d=\"M-887.143-99.066h650v200h-650z\" style=\"fill:#0057b8;fill-opacity:1\" transform=\"translate(887.143 99.066)\"/><path d=\"M-887.143 500.934h650v400h-650zm850 0h650v400h-650zm0-600h650v400h-650z\" style=\"fill:green;fill-opacity:1\" transform=\"translate(887.143 99.066)\"/><path d=\"M-70.476-99.066h16.666V317.6h666.667v16.667H-70.476zm-133.334 0h-16.666V317.6h-666.667v16.667h683.334zm133.334 1000h16.666V484.267h666.667V467.6H-70.476zm-133.334 0h-16.666V484.267h-666.667V467.6h683.333z\" style=\"fill:green;fill-opacity:1\" transform=\"translate(887.143 99.066)\"/>",
  height: "1066.667",
  width: "1600",
};
const _title = "Coast guard ensign of Ukraine";
const _description = "Coast guard ensign of Ukraine. Flown at the stern by warships and other state vessels.";

export const EnsignCoastGuardUkraine = defineComponent({
  name: 'EnsignCoastGuardUkraine',
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
