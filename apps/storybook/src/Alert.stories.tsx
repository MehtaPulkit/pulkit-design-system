import type { Meta, StoryObj } from "@storybook/react";
import { Alert } from "@pulkit-design-system/react";
import "./storybook.css";

const meta = {
  title: "Components/Alert",
  component: Alert,
  tags: ["autodocs"],
  args: {
    title: "Settings saved",
    children: "Your changes have been applied."
  },
  parameters: {
    docs: {
      description: {
        component:
          "Alerts communicate important feedback. Danger alerts use role=alert; other variants use role=status."
      }
    }
  }
} satisfies Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Variants: Story = {
  render: () => (
    <div className="sb-column">
      <Alert title="Info">Review the configuration before publishing.</Alert>
      <Alert variant="success" title="Published">
        The package is available to consumers.
      </Alert>
      <Alert variant="warning" title="Token change">
        This update may affect downstream visual snapshots.
      </Alert>
      <Alert variant="danger" title="Build failed">
        Fix the TypeScript errors before release.
      </Alert>
    </div>
  )
};
