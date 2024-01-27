import type { Meta, StoryObj } from '@storybook/react';

import { InputWrapper } from './InputWrapper.tsx';

const meta: Meta<typeof InputWrapper> = {
  title: 'uikit-inputWrapper',
  component: InputWrapper,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    labelText: "Label",
    hintText: "I'm a hint",
    errorText: "I'm an error",
    children: <input/>,
  },
};
