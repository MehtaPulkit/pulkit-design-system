import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button, Modal } from "@pulkit-design-system/react";
import "./storybook.css";

const meta = {
  title: "Components/Modal",
  component: Modal,
  parameters: {
    docs: {
      description: {
        component:
          "Modal provides a focused dialog layer. It sets dialog semantics, closes on Escape and overlay click, and traps keyboard focus."
      }
    }
  }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render() {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open dialog</Button>
        <Modal
          open={open}
          onOpenChange={setOpen}
          title="Archive project"
          description="This action moves the project out of the active workspace."
        >
          <div className="sb-stack">
            <Button variant="secondary" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button onClick={() => setOpen(false)}>Archive</Button>
          </div>
        </Modal>
      </>
    );
  }
};
