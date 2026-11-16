// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import { defineComponent } from 'vue';
import type { ParsedSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 540 270\"",
  body: "<path fill=\"#fff\" d=\"M0 0h540v270H0z\"/><path stroke=\"#c00\" stroke-width=\"36\" d=\"M270 0v270M0 135h540\"/><path fill=\"#1f367c\" d=\"M0 0h252v117H0z\"/><path fill=\"#f3b100\" d=\"M84 0h84v117H84z\"/><path d=\"M126 20.708c2.73 6.914 5.509 14.106 11.466 19.623-1.848-.567-5.084-1.074-7.154-1.023v29.068l8.829 1.219c.32-.031.427-.487.428-1.114.846-9.021 3.153-16.617 5.795-24.457.187-1.076 3.534-5.165.956-4.448-.311.037-3.778 1.348-3.229.722 4.709-4.521 11.581-7.777 18.262-8.746.59-.141.938.132.406.768-8.852 12.669-16.27 27.616-16.209 45.35-3.449 0-11.789-1.887-15.238-1.887-.062 4.949.063 15.56 0 20.509h-8.624c-.063-4.949.062-15.56 0-20.509-3.449 0-11.79 1.887-15.239 1.887.062-17.734-7.357-32.681-16.208-45.35-.532-.636-.184-.909.406-.768 6.68.969 13.553 4.225 18.261 8.746.55.626-2.918-.685-3.228-.722-2.578-.717.769 3.372.956 4.448 2.642 7.84 4.949 15.436 5.795 24.457.001.627.108 1.083.428 1.114l8.829-1.219V39.308c-2.071-.051-5.306.456-7.154 1.023 5.956-5.517 8.735-12.709 11.466-19.623\"/>",
  height: "270",
  width: "540",
};
const _title = "Naval ensign of Barbados";
const _description = "Naval ensign of Barbados. Flown at the stern by warships and other state vessels.";

export const EnsignNavalBarbados = defineComponent({
  name: 'EnsignNavalBarbados',
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
