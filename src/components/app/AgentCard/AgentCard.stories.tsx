import type { Meta, StoryObj } from '@storybook/react';
import { AgentCard } from './AgentCard';

const meta: Meta<typeof AgentCard> = {
  title: 'App/AgentCard',
  component: AgentCard,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: ['active', 'inactive', 'deploying', 'error'],
    },
    variant: {
      control: 'select',
      options: ['compact', 'detailed'],
    },
  },
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof AgentCard>;

export const Default: Story = {
  args: {
    agentId: 'agent-001',
    name: 'Data Analyzer',
    description: 'Analyzes large datasets and extracts actionable insights using advanced ML algorithms',
    status: 'active',
    version: '2.1.0',
    tasksCompleted: 1247,
    uptime: 99.8,
    capabilities: ['Python', 'ML', 'Data Analysis', 'Visualization'],
  },
};

export const Compact: Story = {
  args: {
    ...Default.args,
    variant: 'compact',
  },
};

export const AllStatuses: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <AgentCard
        agentId="agent-1"
        name="Active Agent"
        description="Currently running and processing tasks"
        status="active"
        version="1.0.0"
        onViewDetails={() => console.log('View')}
      />
      <AgentCard
        agentId="agent-2"
        name="Inactive Agent"
        description="Stopped agent ready for deployment"
        status="inactive"
        version="1.0.0"
        onDeploy={() => console.log('Deploy')}
      />
      <AgentCard
        agentId="agent-3"
        name="Deploying Agent"
        description="Deployment in progress"
        status="deploying"
        version="1.0.0"
        onDeploy={() => console.log('Deploy')}
      />
      <AgentCard
        agentId="agent-4"
        name="Error Agent"
        description="Encountered an error during execution"
        status="error"
        version="1.0.0"
        onDeploy={() => console.log('Deploy')}
      />
    </div>
  ),
};

export const WithManyCapabilities: Story = {
  args: {
    ...Default.args,
    capabilities: ['Python', 'JavaScript', 'ML', 'Data Science', 'NLP', 'Computer Vision', 'DevOps', 'Cloud'],
  },
};

export const Minimal: Story = {
  args: {
    agentId: 'agent-minimal',
    name: 'Simple Agent',
    status: 'active',
  },
};

export const LongContent: Story = {
  args: {
    agentId: 'agent-long',
    name: 'Agent with Very Long Name That Should Truncate Properly',
    description: 'This is an extremely long description that contains multiple sentences and a lot of detailed information about what this agent does, including its capabilities, use cases, and technical specifications. It should be truncated in the UI.',
    status: 'active',
    version: '3.2.1',
    capabilities: Array.from({ length: 15 }, (_, i) => `Skill ${i + 1}`),
  },
};
