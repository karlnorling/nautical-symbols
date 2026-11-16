// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 96000 48000\"",
  body: "<title>Naval Jack of Morocco</title><g stroke=\"#fdb913\"><path fill=\"#c1272d\" stroke-width=\"4800\" d=\"m68606 24000 21600 21600H2400V2400h87806z\"/><path fill=\"none\" stroke-width=\"2282\" d=\"m36000 11693 7234 22263-18938-13759h23408L28766 33956z\"/></g><path fill=\"#006233\" d=\"m36000 9231 3192 9825h-1600l-1592-4901-3453 10627-1294-941zm14046 10205-8357 6072-495-1522 4169-3028H34190l494-1522zm-5365 16512-8357-6072 1294-940 4169 3028-3453-10626h1600zm-17362 0 3192-9824 1295 940-1593 4900 9040-6567 494 1522zm-5365-16512h10330l-494 1522h-5153l9039 6567-1294 941z\"/>",
  height: "600",
  width: "1200",
};
const _title = "Naval jack of Morocco";
const _description = "Naval jack of Morocco. Flown at the bow of naval vessels in harbour or at anchor. A jack of special design.";

export const JackMorocco = defineComponent({
  name: 'JackMorocco',
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
