/**
 * Shared TypeScript types for the nautical-symbols packages.
 * @module @nautical-symbols/types
 */

/**
 * Category a nautical symbol belongs to.
 *
 * Signal flags (International Code of Signals):
 * - `letter-flags`          — the 26 letter flags, Alfa to Zulu
 * - `number-pennants`       — the ICS numeral pennants 0–9
 * - `nato-number-flags`     — the NATO numeral flags 0–9
 * - `special-pennants`      — the answer (code) pennant and the four substitutes
 *
 * Chart symbols (INT 1 / ECDIS):
 * - `cardinal-marks`        — north, east, south and west cardinal marks
 * - `lateral-marks`         — red and green port / starboard buoys and beacons
 * - `isolated-danger-marks` — isolated danger marks
 * - `special-marks`         — special marks (X-shaped topmark)
 * - `beacons`               — unpainted beacons and stakes
 * - `topmarks`              — buoyage topmarks
 * - `lights`                — light symbols and flares
 * - `dangers`               — rocks, wrecks and obstructions
 * - `areas`                 — anchorage, fishing and traffic areas
 * - `harbour`               — harbours, marinas, pilot stations, lock gates and offices
 * - `other`                 — anything else, e.g. diving sites
 */
export type NauticalSymbolCategory =
  | 'letter-flags'
  | 'number-pennants'
  | 'nato-number-flags'
  | 'special-pennants'
  | 'cardinal-marks'
  | 'lateral-marks'
  | 'isolated-danger-marks'
  | 'special-marks'
  | 'beacons'
  | 'topmarks'
  | 'lights'
  | 'dangers'
  | 'areas'
  | 'harbour'
  | 'other';

/** The two symbol families: signal flags, and chart symbols. */
export type NauticalSymbolGroup = 'flags' | 'chart';

/**
 * Pre-built image asset paths for a symbol, relative to the package `assets/` directory.
 * Each raster format is available at five sizes: 240, 512, 768, 1024 and 2048 px²,
 * letterboxed on a transparent background (white for JPEG) when the artwork is not square.
 */
export interface NauticalSymbolAssets {
  /** Map of pixel size to relative path for JPEG variants. */
  jpg: Record<number, string>;
  /** Map of pixel size to relative path for PNG variants. */
  png: Record<number, string>;
  /** Relative path to the SVG source file. */
  svg: string;
  /** Map of pixel size to relative path for WebP variants. */
  webp: Record<number, string>;
}

/**
 * A single nautical symbol with all associated metadata and assets.
 */
export interface NauticalSymbol {
  /** Pre-built image asset paths at multiple sizes and formats. */
  assets: NauticalSymbolAssets;
  /** Symbol category — see {@link NauticalSymbolCategory}. */
  category: NauticalSymbolCategory;
  /** Stable symbol code, e.g. `"flag-alfa"` or `"chart-can-buoy-red"`. */
  code: string;
  /** Longer description: the ICS meaning for a flag, the chart style for a chart symbol. */
  description: string;
  /** Symbol family — see {@link NauticalSymbolGroup}. */
  group: NauticalSymbolGroup;
  /** Slug identifier used to look up the symbol; equal to `code`. */
  id: string;
  /**
   * Licence of the SVG artwork as Wikimedia Commons reports it, e.g.
   * `"Public domain"`, `"CC0"` or `"CC BY-SA 4.0"`. Check it before redistributing.
   */
  license: string;
  /** Human-readable name, e.g. `"A (Alfa)"` or `"Can buoy red"`. */
  name: string;
  /** Wikimedia Commons file page for the artwork: author, licence and history. */
  source: string;
  /** Full inline SVG string, optimised by SVGO, with internal ids prefixed by the symbol `id`. */
  svg: string;
}
