import { createApp, h } from 'vue';
import { SymbolById } from '../SymbolById';
import { FlagAlfa } from '../FlagAlfa';

describe('SymbolById', () => {
  it('is a Vue component object', () => {
    expect(SymbolById).toHaveProperty('name', 'SymbolById');
    expect(SymbolById).toHaveProperty('setup');
  });

  it('renders null for unknown id', () => {
    // setup() returns a render function; call it with unknown id
    const props = { id: 'not-a-real-symbol' };
    const vnode = (SymbolById.setup as Function)(props, { attrs: {} })();
    expect(vnode).toBeNull();
  });
});

describe('rendered symbols', () => {
  const mount = (render: () => ReturnType<typeof h>[]): HTMLElement => {
    const el = document.createElement('div');
    createApp({ render }).mount(el);
    return el;
  };

  it('gives every instance of the same symbol distinct ids', () => {
    const el = mount(() => [
      h(FlagAlfa, { title: 'First' }),
      h(FlagAlfa, { title: 'Second' }),
      h(SymbolById, { id: 'flag-alfa' }),
    ]);
    const all = Array.from(el.querySelectorAll('[id]')).map((n) => n.id);
    expect(new Set(all).size).toBe(all.length);

    const [, second] = Array.from(el.querySelectorAll('svg'));
    const [titleId] = second.getAttribute('aria-labelledby')!.split(' ');
    expect(el.querySelector(`[id="${titleId}"]`)!.textContent).toBe('Second');
  });

  it('puts aria-label on the svg and keeps other attrs on the wrapper', () => {
    const el = mount(() => [
      h(FlagAlfa, { 'aria-label': 'Exit', class: 'symbol', style: { color: 'red' } }),
    ]);
    const span = el.querySelector('span')!;
    const svg = el.querySelector('svg')!;
    expect(svg.getAttribute('aria-label')).toBe('Exit');
    expect(svg.hasAttribute('aria-labelledby')).toBe(false);
    expect(span.hasAttribute('aria-label')).toBe(false);
    expect(span.className).toBe('symbol');
    expect(span.style.display).toBe('contents');
    expect(span.style.color).toBe('red');
  });
});
