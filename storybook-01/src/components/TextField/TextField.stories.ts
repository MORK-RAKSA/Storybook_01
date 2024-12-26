import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import  TextField from './TextField';

const meta = {
  title: 'Example/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: {
        type: 'text'
      },
    },
    width: {
      control: {
        type: 'select',
        options: ["small", "medium", "large", "xl", "full"]
      },
    }
  },
  
  args: { onChange: fn() },
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    label: "Enter",
    width: 'small'
  },
};
