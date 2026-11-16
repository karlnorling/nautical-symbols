import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { SymbolById } from '@nautical-symbols/react';
import { getAllSymbols, getSymbolsByCategory, getSymbolsByGroup } from '@nautical-symbols/core';

interface GridProps {
  size?: number;
  category?: string;
}

const SymbolGrid = ({ size = 96, category }: GridProps) => {
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
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '0.75rem',
        padding: '1rem',
        alignItems: 'flex-start',
      }}
    >
      {symbols.map((symbol) => (
        <div
          key={symbol.id}
          title={`${symbol.code} — ${symbol.name}`}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.25rem',
            width: size + 16,
          }}
        >
          <SymbolById id={symbol.id} width={size} height={size} />
          <span style={{ fontSize: '0.6rem', textAlign: 'center', color: '#555', lineHeight: 1.2 }}>
            {symbol.code}
          </span>
        </div>
      ))}
    </div>
  );
};

const meta: Meta<typeof SymbolById> = {
  title: 'Nautical Symbols/React Components',
  component: SymbolById,
  parameters: { layout: 'centered' },
  argTypes: {
    id: { control: 'text' },
    width: { control: 'number' },
    height: { control: 'number' },
    title: { control: 'text' },
    description: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof SymbolById>;

export const FlagAlfa: Story = {
  args: { id: 'flag-alfa', width: 128 },
};

export const ChartCanBuoyRed: Story = {
  args: { id: 'chart-can-buoy-red', width: 128 },
};

export const UnknownId: Story = {
  args: { id: 'not-a-real-symbol', width: 128 },
};

export const SignalFlags: StoryObj<GridProps> = {
  name: 'Signal flags',
  render: ({ size }) => <SymbolGrid size={size} category="flags" />,
  args: { size: 96 },
};

export const Ensigns: StoryObj<GridProps> = {
  name: 'Ensigns and jacks',
  render: ({ size }) => <SymbolGrid size={size} category="ensigns" />,
  args: { size: 96 },
};

export const ChartSymbols: StoryObj<GridProps> = {
  name: 'Chart symbols',
  render: ({ size }) => <SymbolGrid size={size} category="chart" />,
  args: { size: 96 },
};

export const LetterFlags: StoryObj<GridProps> = {
  name: 'Letter flags',
  render: ({ size }) => <SymbolGrid size={size} category="letter-flags" />,
  args: { size: 96 },
};

export const NumberPennants: StoryObj<GridProps> = {
  name: 'ICS number pennants',
  render: ({ size }) => <SymbolGrid size={size} category="number-pennants" />,
  args: { size: 96 },
};

export const NatoNumberFlags: StoryObj<GridProps> = {
  name: 'NATO number flags',
  render: ({ size }) => <SymbolGrid size={size} category="nato-number-flags" />,
  args: { size: 96 },
};

export const SpecialPennants: StoryObj<GridProps> = {
  name: 'Answer pennant and substitutes',
  render: ({ size }) => <SymbolGrid size={size} category="special-pennants" />,
  args: { size: 96 },
};

export const CivilEnsigns: StoryObj<GridProps> = {
  name: 'Civil ensigns',
  render: ({ size }) => <SymbolGrid size={size} category="civil-ensigns" />,
  args: { size: 96 },
};

export const NavalEnsigns: StoryObj<GridProps> = {
  name: 'Naval and coast guard ensigns',
  render: ({ size }) => <SymbolGrid size={size} category="naval-ensigns" />,
  args: { size: 96 },
};

export const Jacks: StoryObj<GridProps> = {
  name: 'Jacks',
  render: ({ size }) => <SymbolGrid size={size} category="jacks" />,
  args: { size: 96 },
};

export const CardinalMarks: StoryObj<GridProps> = {
  name: 'Cardinal marks',
  render: ({ size }) => <SymbolGrid size={size} category="cardinal-marks" />,
  args: { size: 96 },
};

export const LateralMarks: StoryObj<GridProps> = {
  name: 'Lateral marks',
  render: ({ size }) => <SymbolGrid size={size} category="lateral-marks" />,
  args: { size: 96 },
};

export const Topmarks: StoryObj<GridProps> = {
  name: 'Topmarks',
  render: ({ size }) => <SymbolGrid size={size} category="topmarks" />,
  args: { size: 96 },
};

export const Dangers: StoryObj<GridProps> = {
  name: 'Rocks, wrecks and obstructions',
  render: ({ size }) => <SymbolGrid size={size} category="dangers" />,
  args: { size: 96 },
};

export const AllSymbols: StoryObj<GridProps> = {
  name: 'All Symbols',
  render: ({ size }) => <SymbolGrid size={size} />,
  args: { size: 96 },
};
