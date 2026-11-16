import type { Meta, StoryObj } from '@storybook/react-vite';
import * as React from 'react';
import { getAllSymbols, getSymbolsByCategory, getSymbolsByGroup } from '@nautical-symbols/core';
import { getCssClassName } from '@nautical-symbols/css';

interface GridProps {
  size?: number;
  category?: string;
}

const StyleInjector = ({ size }: { size: number }) => {
  const symbols = getAllSymbols();
  const rules = symbols
    .map((symbol) => {
      const cls = getCssClassName(symbol.id);
      if (!cls) return '';
      return `.${cls} { background-image: url('${import.meta.env.BASE_URL}assets/${symbol.assets.svg}'); background-size: contain; background-repeat: no-repeat; background-position: center; }`;
    })
    .filter(Boolean)
    .join('\n');

  const sizeRule = `.nautical-icon { display: inline-block; width: ${size}px; height: ${size}px; }`;
  return <style>{`${rules}\n${sizeRule}`}</style>;
};

const CSSGrid = ({ size = 96, category }: GridProps) => {
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
      <StyleInjector size={size} />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(120px, 1fr))',
          gap: '1.5rem',
          padding: '1rem',
        }}
      >
        {symbols.map((symbol) => {
          const cls = getCssClassName(symbol.id) ?? '';
          return (
            <div
              key={symbol.id}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem' }}
            >
              <span
                className={`nautical-icon ${cls}`}
                role="img"
                aria-label={symbol.name}
                title={symbol.name}
              />
              <span style={{ fontSize: '0.7rem', textAlign: 'center', color: '#555' }}>
                {symbol.code}
              </span>
              <span style={{ fontSize: '0.65rem', textAlign: 'center', color: '#888' }}>
                {symbol.name}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};

const meta: Meta<GridProps> = {
  title: 'Nautical Symbols/CSS Sprite',
  component: CSSGrid,
  parameters: { layout: 'padded' },
  argTypes: {
    size: { control: { type: 'number', min: 32, max: 256, step: 8 } },
  },
};

export default meta;

export const SignalFlags: StoryObj<GridProps> = {
  name: 'Signal flags',
  render: ({ size }) => <CSSGrid size={size} category="flags" />,
  args: { size: 96 },
};

export const Ensigns: StoryObj<GridProps> = {
  name: 'Ensigns and jacks',
  render: ({ size }) => <CSSGrid size={size} category="ensigns" />,
  args: { size: 96 },
};

export const ChartSymbols: StoryObj<GridProps> = {
  name: 'Chart symbols',
  render: ({ size }) => <CSSGrid size={size} category="chart" />,
  args: { size: 96 },
};

export const LetterFlags: StoryObj<GridProps> = {
  name: 'Letter flags',
  render: ({ size }) => <CSSGrid size={size} category="letter-flags" />,
  args: { size: 96 },
};

export const NumberPennants: StoryObj<GridProps> = {
  name: 'ICS number pennants',
  render: ({ size }) => <CSSGrid size={size} category="number-pennants" />,
  args: { size: 96 },
};

export const NatoNumberFlags: StoryObj<GridProps> = {
  name: 'NATO number flags',
  render: ({ size }) => <CSSGrid size={size} category="nato-number-flags" />,
  args: { size: 96 },
};

export const SpecialPennants: StoryObj<GridProps> = {
  name: 'Answer pennant and substitutes',
  render: ({ size }) => <CSSGrid size={size} category="special-pennants" />,
  args: { size: 96 },
};

export const CivilEnsigns: StoryObj<GridProps> = {
  name: 'Civil ensigns',
  render: ({ size }) => <CSSGrid size={size} category="civil-ensigns" />,
  args: { size: 96 },
};

export const NavalEnsigns: StoryObj<GridProps> = {
  name: 'Naval and coast guard ensigns',
  render: ({ size }) => <CSSGrid size={size} category="naval-ensigns" />,
  args: { size: 96 },
};

export const Jacks: StoryObj<GridProps> = {
  name: 'Jacks',
  render: ({ size }) => <CSSGrid size={size} category="jacks" />,
  args: { size: 96 },
};

export const CardinalMarks: StoryObj<GridProps> = {
  name: 'Cardinal marks',
  render: ({ size }) => <CSSGrid size={size} category="cardinal-marks" />,
  args: { size: 96 },
};

export const LateralMarks: StoryObj<GridProps> = {
  name: 'Lateral marks',
  render: ({ size }) => <CSSGrid size={size} category="lateral-marks" />,
  args: { size: 96 },
};

export const Topmarks: StoryObj<GridProps> = {
  name: 'Topmarks',
  render: ({ size }) => <CSSGrid size={size} category="topmarks" />,
  args: { size: 96 },
};

export const Dangers: StoryObj<GridProps> = {
  name: 'Rocks, wrecks and obstructions',
  render: ({ size }) => <CSSGrid size={size} category="dangers" />,
  args: { size: 96 },
};

export const AllSymbols: StoryObj<GridProps> = {
  name: 'All Symbols',
  render: ({ size }) => <CSSGrid size={size} />,
  args: { size: 96 },
};
