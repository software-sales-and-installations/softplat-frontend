import type { Meta, StoryObj } from '@storybook/react';
import { Icons } from './Icons.tsx';

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
export const trash: Story = {
  args: {
    type: 'trash',
    size: 35,
  },
};
export const vkontakteWhite: Story = {
  args: {
    type: 'vkontakteWhite',
    size: 40,
  },
};
export const telegrammWhite: Story = {
  args: {
    type: 'telegrammWhite',
    size: 40,
  },
};
export const vkontakteGray: Story = {
  args: {
    type: 'vkontakteGray',
    size: 40,
  },
};
export const telegrammGray: Story = {
  args: {
    type: 'telegrammGray',
    size: 40,
  },
};
export const minusDefault: Story = {
  args: {
    type: 'minusDefault',
    size: 25,
  },
};
export const plusDefault: Story = {
  args: {
    type: 'plusDefault',
    size: 25,
  },
};
export const notedDefault: Story = {
  args: {
    type: 'notedDefault',
    size: 20,
  },
};
export const notedPressed: Story = {
  args: {
    type: 'notedPressed',
    size: 20,
  },
};
export const pickDefault: Story = {
  args: {
    type: 'pickDefault',
    size: 20,
  },
};
export const pickPressed: Story = {
  args: {
    type: 'pickPressed',
    size: 20,
  },
};
export const garbageAktive: Story = {
  args: {
    type: 'garbageAktive',
    size: 30,
  },
};
export const garbageUnaktive: Story = {
  args: {
    type: 'garbageUnaktive',
    size: 30,
  },
};
export const starAktive: Story = {
  args: {
    type: 'starAktive',
    size: 20,
  },
};
export const starUnaktive: Story = {
  args: {
    type: 'starUnaktive',
    size: 20,
  },
};
export const uploadAbled: Story = {
  args: {
    type: 'uploadAbled',
    size: 40,
  },
};
export const downloadAbled: Story = {
  args: {
    type: 'downloadAbled',
    size: 30,
  },
};
export const pencilAbled: Story = {
  args: {
    type: 'pencilAbled',
    size: 30,
  },
};
export const eye: Story = {
  args: {
    type: 'eye',
    size: 30,
  },
};
export const eyeOff: Story = {
  args: {
    type: 'eyeOff',
    size: 30,
  },
};
export const down: Story = {
  args: {
    type: 'down',
    size: 20,
  },
};

export const right: Story = {
  args: {
    type: 'right',
    size: 20,
  },
};

export const left: Story = {
  args: {
    type: 'left',
    size: 20,
  },
};

export const up: Story = {
  args: {
    type: 'up',
    size: 20,
  },
};
export const cross: Story = {
  args: {
    type: 'cross',
    size: 40,
  },
};
export const shopping: Story = {
  args: {
    type: 'shopping',
    size: 40,
  },
};
export const calendar: Story = {
  args: {
    type: 'calendar',
    size: 40,
  },
};
export const warning: Story = {
  args: {
    type: 'warning',
    size: 40,
  },
};
export const search: Story = {
  args: {
    type: 'search',
    size: 40,
  },
};
export const info: Story = {
  args: {
    type: 'info',
    size: 40,
  },
};
export const access: Story = {
  args: {
    type: 'access',
    size: 80,
  },
};
