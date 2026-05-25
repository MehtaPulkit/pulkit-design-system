import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@pulkit-design-system/react";
import "./storybook.css";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Buttons trigger actions. Use the primary variant for the main action, secondary for alternatives, and ghost for low-emphasis actions."
      }
    }
  },
  argTypes: {
    variant: { control: "select", options: ["primary", "secondary", "ghost"] },
    size: { control: "select", options: ["sm", "md", "lg"] }
  },
  args: {
    children: "Save changes",
    variant: "primary",
    size: "md"
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="sb-stack">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost">Ghost</Button>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="sb-stack">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  )
};

export const DisabledAndLoading: Story = {
  render: () => (
    <div className="sb-stack">
      <Button disabled>Disabled</Button>
      <Button loading>Saving</Button>
    </div>
  )
};
