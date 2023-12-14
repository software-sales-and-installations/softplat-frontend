import type { Meta, StoryObj } from '@storybook/react';

import { Textarea } from './Textarea.tsx';

const meta: Meta<typeof Textarea> = {
  title: 'uikit-textarea',
  component: Textarea,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};



