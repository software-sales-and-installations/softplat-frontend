import type { Meta, StoryObj } from '@storybook/react';

import { SliderOneCard } from './SliderOneCard.tsx';

const meta: Meta<typeof SliderOneCard> = {
  title: 'uikit-SliderOneCard',
  component: SliderOneCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
  },
};
