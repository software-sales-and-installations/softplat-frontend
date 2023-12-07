import type { Meta, StoryObj } from '@storybook/react';

import { Input } from './Input.tsx';

const meta: Meta<typeof Input> = {
  title: 'uikit-input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};


