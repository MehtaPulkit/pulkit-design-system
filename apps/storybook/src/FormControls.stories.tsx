import type { Meta, StoryObj } from "@storybook/react";
import {
  Checkbox,
  FormField,
  Input,
  Radio,
  Select,
  Textarea
} from "@pulkit-design-system/react";
import "./storybook.css";

const meta = {
  title: "Components/Form Controls",
  parameters: {
    docs: {
      description: {
        component:
          "Form controls use native inputs for keyboard and screen reader support. Pair text inputs with FormField to connect labels, hints, and errors."
      }
    }
  }
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Inputs: Story = {
  render: () => (
    <div className="sb-column">
      <FormField label="Email" hint="Use your work email">
        <Input type="email" placeholder="name@company.com" />
      </FormField>
      <FormField label="Bio">
        <Textarea placeholder="Short profile summary" />
      </FormField>
      <FormField label="Role">
        <Select defaultValue="">
          <option value="" disabled>
            Select a role
          </option>
          <option>Designer</option>
          <option>Engineer</option>
          <option>Product manager</option>
        </Select>
      </FormField>
    </div>
  )
};

export const ErrorAndDisabled: Story = {
  render: () => (
    <div className="sb-column">
      <FormField label="Email" hint="Use your work email" error="Email is required">
        <Input type="email" />
      </FormField>
      <FormField label="Company">
        <Input disabled value="Acme Inc" readOnly />
      </FormField>
    </div>
  )
};

export const Sizes: Story = {
  render: () => (
    <div className="sb-column">
      <FormField label="Small input">
        <Input controlSize="sm" placeholder="Compact" />
      </FormField>
      <FormField label="Medium input">
        <Input controlSize="md" placeholder="Default" />
      </FormField>
      <FormField label="Large input">
        <Input controlSize="lg" placeholder="High emphasis" />
      </FormField>
      <FormField label="Large textarea" optionalText="Optional">
        <Textarea controlSize="lg" placeholder="Longer form content" />
      </FormField>
    </div>
  )
};

export const ChoiceControls: Story = {
  render: () => (
    <div className="sb-column">
      <Checkbox label="Send me product updates" defaultChecked />
      <Checkbox label="Disabled option" disabled />
      <Radio label="Monthly billing" name="billing" defaultChecked />
      <Radio label="Annual billing" name="billing" />
    </div>
  )
};
