import type { Meta, StoryObj } from '@storybook/react';

import { IconEmptyStar } from './IconEmptyStar.tsx'

const meta: Meta<typeof IconEmptyStar> = {
  title: 'uikit-icons',
  component: IconEmptyStar,
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

