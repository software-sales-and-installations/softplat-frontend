import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from './Checkbox.tsx';

const meta: Meta<typeof Checkbox> = {
  title: 'uikit-checkbox',
  component: Checkbox,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};


