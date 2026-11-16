// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 900 600\" xmlns:xlink=\"http://www.w3.org/1999/xlink\"",
  body: "<path fill=\"#00247d\" d=\"M0 0h900v600H0z\"/><path fill=\"#128807\" d=\"M0 0h450v300H0z\" style=\"fill:#00643c;fill-opacity:1\"/><path fill=\"#fff\" d=\"M0 0h450v200H0z\"/><path fill=\"#ff9932\" d=\"M0 0h450v100H0z\" style=\"fill:#ff6400;fill-opacity:1\"/><g transform=\"translate(225 150)\"><circle r=\"46.5\" fill=\"navy\"/><circle r=\"41\" fill=\"#fff\"/><g id=\"ensign-auxiliary-india-d\"><g id=\"ensign-auxiliary-india-c\"><g id=\"ensign-auxiliary-india-b\"><g id=\"ensign-auxiliary-india-a\" fill=\"navy\"><circle r=\"2.5\" transform=\"rotate(7.5 -20.5 312.77)\"/><path d=\"m0 41 1.5-24Q.5 14 0 0q-.5 14-1.5 17z\"/></g><use xlink:href=\"#ensign-auxiliary-india-a\" transform=\"rotate(15)\"/></g><use xlink:href=\"#ensign-auxiliary-india-b\" transform=\"rotate(30)\"/></g><use xlink:href=\"#ensign-auxiliary-india-c\" transform=\"rotate(60)\"/></g><use xlink:href=\"#ensign-auxiliary-india-d\" transform=\"rotate(120)\"/><use xlink:href=\"#ensign-auxiliary-india-d\" transform=\"rotate(-120)\"/><circle r=\"8\" fill=\"navy\"/></g><path fill=\"gold\" d=\"M582 365V235l31 65z\"/><path fill=\"gold\" d=\"M555.399 294.626v10.748l47.285 2.63 188.174 5.132c4.889.12 6.88 10.79 6.88 16.778 0 22.623-24.77 51.906-24.77 51.906l-1.057-10.229c-1.186 12.407-5.198 20.857-10.102 28.06 10.756 1.096 18.988-3.808 27.78-10.382-3.876.522-4.803.48-7.015-.561 0 0 26.656-32.183 26.656-50.961 0-16.024 22.902-37.747 22.902-37.747s-22.902-21.723-22.902-37.747c0-18.778-26.656-50.96-26.656-50.96 2.212-1.041 3.14-1.084 7.015-.562-8.793-6.574-17.024-11.478-27.78-10.382 4.904 7.203 8.916 15.653 10.102 28.06l1.057-10.229s24.77 29.283 24.77 51.906c0 5.988-1.991 16.658-6.88 16.778l-188.174 5.133z\"/><circle cx=\"540.25\" cy=\"300\" r=\"22.5\" fill=\"gold\"/><circle cx=\"540.25\" cy=\"300\" r=\"13.5\" fill=\"#00247d\"/>",
  height: "800",
  width: "1200",
};
const _title = "Naval auxiliary ensign of India";
const _description = "Naval auxiliary ensign of India. Flown at the stern by warships and other state vessels.";

export const EnsignAuxiliaryIndia = defineComponent({
  name: 'EnsignAuxiliaryIndia',
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
