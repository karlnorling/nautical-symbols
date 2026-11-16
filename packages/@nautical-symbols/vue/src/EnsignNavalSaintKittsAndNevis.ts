// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 600 300\"",
  body: "<path d=\"M0 0h600v300H0z\" style=\"opacity:1;fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:1;stroke-linecap:butt;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:0;stroke-opacity:1\"/><path d=\"M0 130h280V0h40v130h280v40H320v130h-40V170H0z\" style=\"fill:#ce1126;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:0;stroke-linecap:butt;stroke-linejoin:miter;stroke-opacity:1\"/><path d=\"M0 0h277v127H0z\" style=\"fill:#ce1126;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:.25;stroke-linecap:square;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dashoffset:.99999998;stroke-opacity:1\"/><path d=\"M0 0h277L0 127z\" style=\"fill:#009349;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:.25;stroke-linecap:square;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dashoffset:.99999998;stroke-opacity:1\"/><path d=\"M224.094 0 0 102.313V127h52.906L277 24.688V0z\" style=\"fill:#fcd116;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:44.45000076;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"/><path d=\"M239.375 0 0 109.281V127h37.625L277 17.719V0z\" style=\"fill:#000;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:31.75;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1\"/><g style=\"fill:#fff;fill-opacity:1\"><path d=\"m471.202 46.512 7.165 22.049h23.184L482.795 82.19l7.164 22.05-18.757-13.627-18.757 13.626 7.164-22.05-18.756-13.627 23.184-.001z\" style=\"fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:31.75;stroke-linecap:square;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:.99999998;stroke-opacity:1\" transform=\"rotate(-24.63 275.452 332.394)scale(.39798)\"/><path d=\"m471.202 46.512 7.165 22.049h23.184L482.795 82.19l7.164 22.05-18.757-13.627-18.757 13.626 7.164-22.05-18.756-13.627 23.184-.001z\" style=\"fill:#fff;fill-opacity:1;fill-rule:evenodd;stroke:none;stroke-width:31.75;stroke-linecap:square;stroke-linejoin:bevel;stroke-miterlimit:4;stroke-dasharray:none;stroke-dashoffset:.99999998;stroke-opacity:1\" transform=\"rotate(-24.63 199.252 -16.642)scale(.39798)\"/></g>",
  height: "300",
  width: "600",
};
const _title = "Naval ensign of Saint Kitts and Nevis";
const _description = "Naval ensign of Saint Kitts and Nevis. Flown at the stern by warships and other state vessels.";

export const EnsignNavalSaintKittsAndNevis = defineComponent({
  name: 'EnsignNavalSaintKittsAndNevis',
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
