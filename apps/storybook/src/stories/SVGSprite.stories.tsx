import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { getAllSymbols, getSymbolsByCategory, getSymbolsByGroup } from '@nautical-symbols/core';

const InlineSprite = () => {
  const [spriteHtml, setSpriteHtml] = React.useState<string>('');

  React.useEffect(() => {
    fetch(`${import.meta.env.BASE_URL}assets/sprites/sprite.svg`)
      .then((r) => r.text())
      .then(setSpriteHtml)
      .catch(() => {});
  }, []);

  if (!spriteHtml) return null;
  return (
    <div
      aria-hidden="true"
      style={{ position: 'absolute', width: 0, height: 0, overflow: 'hidden' }}
      dangerouslySetInnerHTML={{ __html: spriteHtml }}
    />
  );
};

interface SpriteIconProps {
  id: string;
  label: string;
  size?: number;
}

const SpriteIcon = ({ id, label, size = 96 }: SpriteIconProps) => (
  <svg width={size} height={size} role="img" aria-label={label} style={{ display: 'block' }}>
    <title>{label}</title>
    <use href={`#${id}`} />
  </svg>
);

interface GridProps {
  size?: number;
  category?: string;
}

const SpriteGrid = ({ size = 96, category }: GridProps) => {
  const symbols =
    category === 'flags' || category === 'ensigns' || category === 'chart'
      ? getSymbolsByGroup(category)
      : category
        ? getSymbolsByCategory(category as Parameters<typeof getSymbolsByCategory>[0])
    : getAllSymbols();

  if (symbols.length === 0) {
    return (
      <p style={{ color: '#888', fontFamily: 'sans-serif' }}>
        No symbols loaded. Run <code>yarn update</code> to populate symbol data.
      </p>
    );
  }

  return (
    <>
      <InlineSprite />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '1.5rem',
          padding: '1rem',
        }}
      >
        {symbols.map((symbol) => (
          <div
            key={symbol.id}
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
          >
            <SpriteIcon id={symbol.code.toLowerCase()} label={symbol.name} size={size} />
            <span style={{ fontSize: '0.7rem', textAlign: 'center', color: '#555' }}>
              {symbol.code}
            </span>
            <span style={{ fontSize: '0.65rem', textAlign: 'center', color: '#888' }}>
              {symbol.name}
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

const SingleSpriteIcon = ({ id, label, size }: SpriteIconProps) => (
  <>
    <InlineSprite />
    <SpriteIcon id={id} label={label} size={size} />
  </>
);

const meta: Meta<GridProps> = {
  title: 'Nautical Symbols/SVG Sprite',
  component: SpriteGrid,
  parameters: { layout: 'padded' },
  argTypes: {
    size: { control: { type: 'number', min: 32, max: 256, step: 8 } },
  },
};

export default meta;

export const SignalFlags: StoryObj<GridProps> = {
  name: 'Signal flags',
  render: ({ size }) => <SpriteGrid size={size} category="flags" />,
  args: { size: 96 },
};

export const Ensigns: StoryObj<GridProps> = {
  name: 'Ensigns and jacks',
  render: ({ size }) => <SpriteGrid size={size} category="ensigns" />,
  args: { size: 96 },
};

export const ChartSymbols: StoryObj<GridProps> = {
  name: 'Chart symbols',
  render: ({ size }) => <SpriteGrid size={size} category="chart" />,
  args: { size: 96 },
};

export const LetterFlags: StoryObj<GridProps> = {
  name: 'Letter flags',
  render: ({ size }) => <SpriteGrid size={size} category="letter-flags" />,
  args: { size: 96 },
};

export const NumberPennants: StoryObj<GridProps> = {
  name: 'ICS number pennants',
  render: ({ size }) => <SpriteGrid size={size} category="number-pennants" />,
  args: { size: 96 },
};

export const NatoNumberFlags: StoryObj<GridProps> = {
  name: 'NATO number flags',
  render: ({ size }) => <SpriteGrid size={size} category="nato-number-flags" />,
  args: { size: 96 },
};

export const SpecialPennants: StoryObj<GridProps> = {
  name: 'Answer pennant and substitutes',
  render: ({ size }) => <SpriteGrid size={size} category="special-pennants" />,
  args: { size: 96 },
};

export const CivilEnsigns: StoryObj<GridProps> = {
  name: 'Civil ensigns',
  render: ({ size }) => <SpriteGrid size={size} category="civil-ensigns" />,
  args: { size: 96 },
};

export const NavalEnsigns: StoryObj<GridProps> = {
  name: 'Naval and coast guard ensigns',
  render: ({ size }) => <SpriteGrid size={size} category="naval-ensigns" />,
  args: { size: 96 },
};

export const Jacks: StoryObj<GridProps> = {
  name: 'Jacks',
  render: ({ size }) => <SpriteGrid size={size} category="jacks" />,
  args: { size: 96 },
};

export const CardinalMarks: StoryObj<GridProps> = {
  name: 'Cardinal marks',
  render: ({ size }) => <SpriteGrid size={size} category="cardinal-marks" />,
  args: { size: 96 },
};

export const LateralMarks: StoryObj<GridProps> = {
  name: 'Lateral marks',
  render: ({ size }) => <SpriteGrid size={size} category="lateral-marks" />,
  args: { size: 96 },
};

export const Topmarks: StoryObj<GridProps> = {
  name: 'Topmarks',
  render: ({ size }) => <SpriteGrid size={size} category="topmarks" />,
  args: { size: 96 },
};

export const Dangers: StoryObj<GridProps> = {
  name: 'Rocks, wrecks and obstructions',
  render: ({ size }) => <SpriteGrid size={size} category="dangers" />,
  args: { size: 96 },
};

export const AllSymbols: StoryObj<GridProps> = {
  name: 'All Symbols',
  render: ({ size }) => <SpriteGrid size={size} />,
  args: { size: 96 },
};

export const SingleIcon: StoryObj<SpriteIconProps> = {
  parameters: { layout: 'centered' },
  render: (args) => <SingleSpriteIcon {...args} />,
  args: {
    id: 'flag-alfa',
    label: 'A (Alfa)',
    size: 200,
  },
  argTypes: {
    id: { control: 'text', description: 'Symbol code in lowercase, e.g. flag-alfa, pennant-1, substitute-1' },
    label: { control: 'text', description: 'Accessible label' },
    size: { control: { type: 'number', min: 32, max: 512, step: 8 } },
  },
};
