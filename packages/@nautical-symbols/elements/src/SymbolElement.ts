import { createInstanceId, renderSvg } from '@nautical-symbols/core';
import type { ParsedSvg } from '@nautical-symbols/core';

/** The symbol an element renders, or `undefined` to render nothing. */
export interface SymbolElementContent {
  svg: ParsedSvg;
  title: string;
  description: string;
}

/**
 * Base class for every nautical symbol custom element.
 *
 * Attributes:
 * - `title`       — overrides the SVG accessible title (defaults to the symbol name)
 * - `description` — overrides the SVG description (defaults to the symbol description)
 * - `aria-label`  — labels the `<svg>` directly instead of via its title/description
 * - `width`       — forwarded to the `<svg>` width attribute
 * - `height`      — forwarded to the `<svg>` height attribute
 */
export abstract class SymbolElement extends HTMLElement {
  static readonly observedAttributes: string[] = [
    'title',
    'description',
    'aria-label',
    'width',
    'height',
  ];

  private readonly _instanceId = createInstanceId();

  /** Returns what to render; subclasses provide the symbol. */
  protected abstract content(): SymbolElementContent | undefined;

  connectedCallback(): void {
    this._render();
  }

  attributeChangedCallback(): void {
    this._render();
  }

  private _render(): void {
    const content = this.content();
    if (!content) {
      this.innerHTML = '';
      return;
    }
    this.style.display = 'contents';
    this.innerHTML = renderSvg(content.svg, {
      ariaLabel: this.getAttribute('aria-label') ?? undefined,
      description: this.getAttribute('description') ?? content.description,
      height: this.getAttribute('height') ?? undefined,
      instanceId: this._instanceId,
      title: this.getAttribute('title') ?? content.title,
      width: this.getAttribute('width') ?? undefined,
    });
  }
}
