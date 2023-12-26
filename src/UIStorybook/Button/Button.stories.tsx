import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button.tsx';

const meta: Meta<typeof Button> = {
  title: 'uikit-button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    buttonType: 'primary',
    children: 'Добавить в корзину'
  },
};

export const Secondary: Story = {
  args: {
    buttonType: 'secondary',
    children: 'Text'
  },
};

export const MinorPrimary: Story = {
  args: {
    buttonType: 'minorPrimary',
    children: 'Text'
  },
};

export const MinorSecondary: Story = {
  args: {
    buttonType: 'minorSecondary',
    children: 'Text'
  },
};

export const Link: Story = {
  args: {
    buttonType: 'link',
    children: 'Войти'
  },
};
