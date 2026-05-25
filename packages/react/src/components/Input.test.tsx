import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("supports disabled state", () => {
    render(<Input aria-label="Email" disabled />);
    expect(screen.getByLabelText("Email")).toBeDisabled();
  });

  it("announces invalid state when error is true", () => {
    render(<Input aria-label="Email" error />);
    expect(screen.getByLabelText("Email")).toHaveAttribute("aria-invalid", "true");
  });

  it("applies a control size class", () => {
    render(<Input aria-label="Search" controlSize="lg" />);
    expect(screen.getByLabelText("Search")).toHaveClass("pds-input--lg");
  });
});
