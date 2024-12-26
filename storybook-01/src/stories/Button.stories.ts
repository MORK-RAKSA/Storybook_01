import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

const meta = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    rounded: {
      control: {
        type: "select",
        options: ["sm", "m", "l", "xl", "full"],
      },
    },
    variant: {
      control: {
        type: "select",
        options: ["primary", "secondary", "warning"],
      },
    },
  },
  
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const primary: Story = {
  args: {
    variant:'primary',
    size: 'small',
    label: 'Button',
    rounded: 'sm'
  },
};

export const Small: Story = {
  args: {
    variant:'primary',
    size: 'small',
    label: 'Button',
    rounded: 'sm'
  },
};
