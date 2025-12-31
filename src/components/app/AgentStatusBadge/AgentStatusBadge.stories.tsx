import type { Meta, StoryObj } from '@storybook/react';
import { AgentStatusBadge } from './AgentStatusBadge';

const meta: Meta<typeof AgentStatusBadge> = {
  title: 'App/AgentStatusBadge',
  component: AgentStatusBadge,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['active', 'inactive', 'deploying', 'error'],
      description: 'Agent operational status',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size variant',
    },
    showIcon: {
      control: 'boolean',
      description: 'Show status icon',
    },
    showDot: {
      control: 'boolean',
      description: 'Show animated status dot',
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof AgentStatusBadge>;

export const Active: Story = {
  args: {
    status: 'active',
  },
};

export const Inactive: Story = {
  args: {
    status: 'inactive',
  },
};

export const Deploying: Story = {
  args: {
    status: 'deploying',
  },
};

export const Error: Story = {
  args: {
    status: 'error',
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <AgentStatusBadge status="active" />
      <AgentStatusBadge status="inactive" />
      <AgentStatusBadge status="deploying" />
      <AgentStatusBadge status="error" />
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <span className="w-20 text-sm text-muted-foreground">Small:</span>
        <AgentStatusBadge status="active" size="sm" />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-20 text-sm text-muted-foreground">Medium:</span>
        <AgentStatusBadge status="active" size="md" />
      </div>
      <div className="flex items-center gap-2">
        <span className="w-20 text-sm text-muted-foreground">Large:</span>
        <AgentStatusBadge status="active" size="lg" />
      </div>
    </div>
  ),
};

export const WithoutIcon: Story = {
  args: {
    status: 'active',
    showIcon: false,
  },
};

export const WithoutDot: Story = {
  args: {
    status: 'active',
    showDot: false,
  },
};

export const Minimal: Story = {
  args: {
    status: 'active',
    showIcon: false,
    showDot: false,
  },
};

export const DarkMode: Story = {
  args: {
    status: 'active',
  },
  decorators: [
    (Story) => (
      <div className="dark">
        <div className="bg-background p-8 rounded-lg">
          <Story />
        </div>
      </div>
    ),
  ],
};
