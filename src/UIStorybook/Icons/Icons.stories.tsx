import type { Meta, StoryObj } from '@storybook/react';

import { Icons } from './Icons.tsx'

const meta: Meta<typeof Icons> = {
  title: 'uikit-icons',
  component: Icons,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const filledLike: Story = {
  args: {
    type: 'emptyLike',
    size: 35,
  },
};

export const emptyLike: Story = {
  args: {
    type: 'filledLike',
    size: 35,
  },
};

