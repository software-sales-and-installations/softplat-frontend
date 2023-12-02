import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

// const Template = (arg) => <Button {...arg} />;

// const meta: Meta<typeof Button> = {
//   title: 'uikit/Buttons/Button',
//   component: Button,
//   tags: ['autodocs'],
//   argTypes: {
//     disabled: { type: 'boolean' },
//     customIcon: { type: 'string' },
//   },
// };

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary: Story = {
  args: {
    children: 'Добавить в корзину',
  },
};
