import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FormField } from "./FormField";
import { Input } from "./Input";

describe("FormField", () => {
  it("connects label, hint, and error to the control", () => {
    render(
      <FormField label="Email" hint="Use your work email" error="Email is required">
        <Input type="email" />
      </FormField>
    );

    const input = screen.getByLabelText("Email");
    expect(input).toHaveAccessibleDescription(
      "Use your work email Email is required"
    );
    expect(input).toHaveAttribute("aria-invalid", "true");
  });

  it("passes required state to the control", () => {
    render(
      <FormField label="Workspace name" required>
        <Input />
      </FormField>
    );

    expect(screen.getByRole("textbox", { name: /Workspace name/ })).toBeRequired();
  });
});
