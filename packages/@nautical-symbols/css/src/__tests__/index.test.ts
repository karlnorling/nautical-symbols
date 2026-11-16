import fs from 'fs';
import path from 'path';
import { symbolCssClasses, getCssClassName } from '../index';

describe('@nautical-symbols/css', () => {
  it('exports symbolCssClasses as an object', () => {
    expect(typeof symbolCssClasses).toBe('object');
  });

  it('returns undefined for unknown id', () => {
    expect(getCssClassName('not-a-real-symbol')).toBeUndefined();
  });
});

describe('sprite.css', () => {
  const pkgDir = path.join(__dirname, '..', '..');
  const css = fs.readFileSync(path.join(pkgDir, 'sprite.css'), 'utf-8');

  it('only references files in @nautical-symbols/assets that exist', () => {
    const urls = [...css.matchAll(/url\('([^']+)'\)/g)].map((m) => m[1]);
    expect(urls.length).toBeGreaterThan(0);
    for (const url of urls) {
      expect(url.startsWith('../assets/assets/')).toBe(true);
      expect(fs.existsSync(path.join(pkgDir, url))).toBe(true);
    }
  });

  it('declares @nautical-symbols/assets as a dependency', () => {
    const pkg = JSON.parse(fs.readFileSync(path.join(pkgDir, 'package.json'), 'utf-8'));
    expect(pkg.dependencies).toHaveProperty('@nautical-symbols/assets');
  });
});
