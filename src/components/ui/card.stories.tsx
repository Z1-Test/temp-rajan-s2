import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './card';
import { Button } from './button';

const meta = {
  title: 'UI/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the card content area. You can put any content here.</p>
      </CardContent>
      <CardFooter>
        <Button>Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const AgentCard: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Frontend Generator</CardTitle>
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Active</span>
        </div>
        <CardDescription>Generates UI components from specifications</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Skills:</span>
            <span className="font-medium">8</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Tasks Completed:</span>
            <span className="font-medium">142</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Success Rate:</span>
            <span className="font-medium">98.5%</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="gap-2">
        <Button size="sm" variant="outline">View Details</Button>
        <Button size="sm">Deploy</Button>
      </CardFooter>
    </Card>
  ),
};

export const MetricCard: Story = {
  render: () => (
    <Card className="w-[300px]">
      <CardHeader>
        <CardTitle className="text-sm font-medium">Active Agents</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold">45</div>
        <p className="text-xs text-muted-foreground mt-1">+12 from last hour</p>
      </CardContent>
    </Card>
  ),
};
