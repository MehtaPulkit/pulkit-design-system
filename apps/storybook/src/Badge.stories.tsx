import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@pulkit-design-system/react";
import "./storybook.css";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  args: { children: "Live", variant: "neutral", size: "md" },
  argTypes: {
    variant: {
      control: "select",
      options: ["neutral", "success", "warning", "danger"]
    },
    size: { control: "select", options: ["sm", "md"] }
  },
  parameters: {
    docs: {
      description: {
        component:
          "Badges communicate compact status metadata. Keep labels short and avoid using color as the only meaning."
      }
    }
  }
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="sb-stack">
      <Badge>Neutral</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>
  )
};
