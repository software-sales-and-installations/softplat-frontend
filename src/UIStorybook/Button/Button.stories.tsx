import type { Meta, StoryObj } from '@storybook/react';

import { Button } from './Button.tsx';

const meta: Meta<typeof Button> = {
  title: 'uikit-Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    disabled: { type: 'boolean' },
  },
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

export const Decline: Story = {
  args: {
    buttonType: 'decline',
    children: 'Отправить на доработку'
  },
};

export const Agree: Story = {
  args: {
    buttonType: 'agree',
    children: 'Одобрить'
  },
};

export const Minor: Story = {
  args: {
    buttonType: 'minor',
  },
};

export const Square: Story = {
  args: {
    buttonType: 'square',
  },
};

export const Link: Story = {
  args: {
    buttonType: 'link',
  },
};