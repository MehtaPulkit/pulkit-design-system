import { describe, expect, it } from "vitest";
import * as components from ".";

describe("component exports", () => {
  it("exports the public component surface", () => {
    expect(components.Button).toBeDefined();
    expect(components.Input).toBeDefined();
    expect(components.Textarea).toBeDefined();
    expect(components.Select).toBeDefined();
    expect(components.Checkbox).toBeDefined();
    expect(components.Radio).toBeDefined();
    expect(components.Badge).toBeDefined();
    expect(components.Card).toBeDefined();
    expect(components.Modal).toBeDefined();
    expect(components.Alert).toBeDefined();
    expect(components.FormField).toBeDefined();
  });
});
