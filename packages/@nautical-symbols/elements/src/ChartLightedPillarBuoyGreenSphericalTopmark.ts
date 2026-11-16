// THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY.
// Run 'yarn generate' to regenerate.

import type { ParsedSvg } from '@nautical-symbols/core';
import { SymbolElement } from './SymbolElement.js';
import type { SymbolElementContent } from './SymbolElement.js';

const _svg: ParsedSvg = {
  attrs: "xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 320 320\" xmlns:svg=\"http://www.w3.org/2000/svg\"",
  body: "<svg:path d=\"M 131.60087,181.31159 L 69.97299,257.62001 L 65.44288,263.19827 L 59.885447,267.42201 L 52.986033,269.53125 L 45.663807,269.42153 L 38.851616,267.12524 L 33.104189,262.78791 L 28.902861,256.70061 L 26.677963,249.64945 L 26.834933,242.67425 L 29.567773,236.58472 L 34.162548,231.27636 L 39.756076,226.40835 L 40.930254,225.46186 L 131.60087,181.31159 z M 159.60212,156.05108 C 161.79918,155.83146 163.76054,157.43633 163.98017,159.63337 C 164.19979,161.83043 162.59492,163.79179 160.39788,164.01142 C 158.20082,164.23104 156.23946,162.62617 156.01983,160.42913 C 155.80021,158.23207 157.40508,156.27071 159.60212,156.05108 z\" style=\"fill:#a30075;fill-opacity:1;fill-rule:evenodd;stroke:none\"/><path d=\"m197.075 41.894-5.594 16.719-6.531-2.094-30.469 68.062-29.781 32.594h-7.781l-.125 5.656h31.062c1.288 5.533 6.234 9.656 12.156 9.657 5.925 0 10.871-4.121 12.157-9.657h24.125v-5.656h-7.782l-2.468-22.344 16.625-72.625-7.157-2.281 5.594-16.687zM167.5 160c0 4.14-3.36 7.5-7.5 7.5s-7.5-3.36-7.5-7.5 3.36-7.5 7.5-7.5 7.5 3.36 7.5 7.5M206 5.688c-9.357 0-17 7.643-17 17s7.643 17 17 17 17-7.644 17-17-7.643-17-17-17\" style=\"fill:#000407;fill-opacity:1;fill-rule:evenodd;stroke:none\"/>",
  height: "320",
  width: "320",
};
const _title = "Lighted pillar buoy green spherical topmark";
const _description = "Lighted pillar buoy green spherical topmark — INT 1 paper chart symbol";

export class ChartLightedPillarBuoyGreenSphericalTopmark extends SymbolElement {
  static readonly tagName = 'nautical-chart-lighted-pillar-buoy-green-spherical-topmark';

  protected content(): SymbolElementContent {
    return { description: _description, svg: _svg, title: _title };
  }
}
