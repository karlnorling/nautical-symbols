import { defineComponent } from 'vue';
import type { PropType } from 'vue';
import { getSymbol, parseSvg } from '@nautical-symbols/core';
import { symbolProps } from './SymbolProps.js';
import { renderSymbol, useInstanceId } from './SymbolSvg.js';

/**
 * Renders any nautical symbol by slug ID.
 *
 * Useful for data-driven rendering where the symbol ID comes from an API
 * response or user input rather than being known at compile time.
 *
 * Returns `null` for unrecognised IDs.
 *
 * @example
 * ```html
 * <SymbolById id="flag-alfa" :width="64" />
 * ```
 */
export const SymbolById = defineComponent({
  name: 'SymbolById',
  inheritAttrs: false,
  props: {
    ...symbolProps,
    /** Symbol slug ID, e.g. `"flag-alfa"` or `"chart-can-buoy-red"`. */
    id: { type: String as PropType<string>, required: true },
  },
  setup(props, { attrs }) {
    const instanceId = useInstanceId();
    return () => {
      const symbol = getSymbol(props.id);
      if (!symbol) return null;
      return renderSymbol({
        attrs,
        description: props.description ?? symbol.description,
        height: props.height,
        instanceId,
        svg: parseSvg(symbol.svg),
        title: props.title ?? symbol.name,
        width: props.width,
      });
    };
  },
});
