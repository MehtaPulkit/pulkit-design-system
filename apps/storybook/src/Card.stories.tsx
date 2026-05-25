import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Button, Card } from "@pulkit-design-system/react";
import "./storybook.css";

const meta = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Cards group related content and actions. Use them for repeated items or contained summaries, not as decoration around every page section."
      }
    }
  }
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Card title="Team plan" description="Shared components for product teams.">
      <div style={{ marginTop: 16, display: "grid", gap: 12 }}>
        <Badge variant="success">Active</Badge>
        <Button size="sm">Manage plan</Button>
      </div>
    </Card>
  )
};
