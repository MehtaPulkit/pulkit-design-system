import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { afterEach, describe, expect, it, vi } from "vitest";
import { useRef, useState } from "react";
import { Button } from "./Button";
import { Modal } from "./Modal";

describe("Modal", () => {
  afterEach(() => {
    document.body.style.overflow = "";
  });

  it("closes on Escape", async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(
      <Modal open onOpenChange={onOpenChange} title="Confirm">
        <Button>Continue</Button>
      </Modal>
    );

    await user.keyboard("{Escape}");
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("closes on overlay click", async () => {
    const user = userEvent.setup();
    const onOpenChange = vi.fn();
    render(
      <Modal open onOpenChange={onOpenChange} title="Confirm">
        <Button>Continue</Button>
      </Modal>
    );

    await user.click(screen.getByRole("dialog").parentElement as HTMLElement);
    expect(onOpenChange).toHaveBeenCalledWith(false);
  });

  it("cycles focus within the dialog", async () => {
    const user = userEvent.setup();
    render(
      <Modal open onOpenChange={() => undefined} title="Confirm">
        <Button>First</Button>
        <Button>Second</Button>
      </Modal>
    );

    const close = screen.getByRole("button", { name: "Close dialog" });
    const second = screen.getByRole("button", { name: "Second" });
    expect(close).toHaveFocus();

    await user.keyboard("{Shift>}{Tab}{/Shift}");
    expect(second).toHaveFocus();
  });

  it("locks scroll and restores focus when closed", async () => {
    const user = userEvent.setup();

    function Example() {
      const [open, setOpen] = useState(false);
      const triggerRef = useRef<HTMLButtonElement>(null);

      return (
        <>
          <Button ref={triggerRef} onClick={() => setOpen(true)}>
            Open
          </Button>
          <Modal
            open={open}
            onOpenChange={setOpen}
            title="Confirm"
            finalFocusRef={triggerRef}
          >
            <Button>Continue</Button>
          </Modal>
        </>
      );
    }

    render(<Example />);
    await user.click(screen.getByRole("button", { name: "Open" }));
    expect(document.body.style.overflow).toBe("hidden");

    await user.keyboard("{Escape}");
    expect(document.body.style.overflow).toBe("");
    expect(screen.getByRole("button", { name: "Open" })).toHaveFocus();
  });
});
