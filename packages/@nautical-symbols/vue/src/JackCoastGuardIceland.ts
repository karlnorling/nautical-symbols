// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 32 18\"",
  body: "<defs><clipPath id=\"jack-coast-guard-iceland-b\"><use href=\"#jack-coast-guard-iceland-a\"/></clipPath></defs><g clip-path=\"url(#jack-coast-guard-iceland-b)\"><path id=\"jack-coast-guard-iceland-a\" fill=\"#02529c\" d=\"M0 0h32L20 8v2l12 8H0z\"/><path stroke=\"#fff\" stroke-width=\"4\" d=\"M0 9h25M9 0v18\"/><path stroke=\"#dc1e35\" stroke-width=\"2\" d=\"M0 9h25M9 0v18\"/></g>",
  height: "720",
  width: "1280",
};
const _title = "Coast guard jack of Iceland";
const _description = "Coast guard jack of Iceland. Flown at the bow of naval vessels in harbour or at anchor. The naval ensign flown as the jack.";

export const JackCoastGuardIceland = defineComponent({
  name: 'JackCoastGuardIceland',
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
