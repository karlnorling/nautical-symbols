import type { Preview } from '@storybook/react-vite';

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        order: [
          'Introduction',
          'Nautical Symbols',
          ['React Components', 'CSS Sprite', 'SVG Sprite', 'Assets & API'],
        ],
      },
    },
  },
};

export default preview;
