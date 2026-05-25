import type { Meta, StoryObj } from "@storybook/react";
import { Badge, Button, Card, Input } from "@pulkit-design-system/react";
import { tokens } from "@pulkit-design-system/tokens";
import "./storybook.css";

const meta = {
  title: "Foundations/Tokens",
  parameters: {
    docs: {
      description: {
        component:
          "Tokens separate primitive values from semantic decisions. Components consume semantic CSS variables so theme changes do not require component rewrites."
      }
    }
  }
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const SemanticThemes: Story = {
  render: () => (
    <div className="sb-theme-grid">
      {(["light", "dark"] as const).map((theme) => (
        <div className="sb-theme-sample" data-theme={theme} key={theme}>
          <Card title={`${theme} theme`} description="Semantic CSS variables">
            <div className="sb-column" style={{ marginTop: 16 }}>
              <Input placeholder="Token-driven control" />
              <div className="sb-stack">
                <Button>Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Badge variant="success">Accessible state</Badge>
              </div>
            </div>
          </Card>
        </div>
      ))}
    </div>
  )
};

export const SpacingScale: Story = {
  render: () => (
    <div className="sb-column">
      {Object.entries(tokens.spacing).map(([name, value]) => (
        <div className="sb-token-row" key={name}>
          <code>space-{name}</code>
          <span>{value}</span>
          <span
            className="sb-token-block"
            style={{ width: value === "0" ? 1 : value }}
          />
        </div>
      ))}
    </div>
  )
};
