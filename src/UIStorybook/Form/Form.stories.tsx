import type { Meta, StoryObj } from '@storybook/react';

import  Form from './Form.tsx';
import { Icons } from '../Icons/Icons.tsx';

const meta: Meta<typeof Form> = {
  title: 'uikit-form',
  component: Form,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Register: Story = {
  args: {
    formType: 'register',
    buttonText: 'Зарегистрироваться',
    buttonType: 'primary',
  },
};

export const TwoButtons: Story = {
  args: {
    formType: 'twoButtons',
    buttonText: 'Войти',
    secondButtonText: 'Отмена',
    buttonType: 'minorPrimary',
  },
};

export const Search: Story = {
  args: {
  formType: 'search',
  buttonText: <Icons  type='emptyLike' size={35}></Icons>,
  buttonType: 'link',
  },
};

export const Data: Story = {
  args: {
    formType: 'data',
    buttonText: 'Сохранить',
    buttonType: 'primary',
  },
};
