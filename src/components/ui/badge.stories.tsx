import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './badge';

const meta = {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Badge',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: 'Error',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: 'Outline',
    variant: 'outline',
  },
};

export const AgentStatus: Story = {
  render: () => (
    <div className="flex gap-2">
      <Badge variant="default">Active</Badge>
      <Badge variant="secondary">Idle</Badge>
      <Badge variant="destructive">Failed</Badge>
      <Badge variant="outline">Pending</Badge>
    </div>
  ),
};

export const Skills: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>TypeScript</Badge>
      <Badge>React</Badge>
      <Badge>shadcn/ui</Badge>
      <Badge>Tailwind</Badge>
      <Badge>Storybook</Badge>
    </div>
  ),
};
