import { fileURLToPath } from 'node:url';
import path from 'path';
import remarkGfm from 'remark-gfm';
import type { StorybookConfig } from '@storybook/react-vite';

const dirname = fileURLToPath(new URL('.', import.meta.url));

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
  ],
  framework: '@storybook/react-vite',
  staticDirs: [
    { from: '../../../packages/@nautical-symbols/assets/assets', to: '/assets' },
    { from: '../../../packages/@nautical-symbols/sprite', to: '/assets/sprites' },
  ],
  viteFinal: (config) => {
    if (process.env.STORYBOOK_BASE_PATH) {
      config.base = process.env.STORYBOOK_BASE_PATH;
    }
    config.resolve ??= {};
    config.resolve.alias = {
      ...config.resolve.alias,
      '@nautical-symbols/core': path.resolve(
        dirname,
        '../../../packages/@nautical-symbols/core/src/index.ts',
      ),
      '@nautical-symbols/css': path.resolve(
        dirname,
        '../../../packages/@nautical-symbols/css/src/index.ts',
      ),
      '@nautical-symbols/react': path.resolve(
        dirname,
        '../../../packages/@nautical-symbols/react/src/index.ts',
      ),
    };
    return config;
  },
};

export default config;
