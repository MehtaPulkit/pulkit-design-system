import { forwardRef } from "react";
import { cx } from "../utils/cx";
import type { ControlSize } from "./Input";

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  controlSize?: ControlSize;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, controlSize = "md", ...props }, ref) => (
    <textarea
      ref={ref}
      className={cx("pds-textarea", `pds-textarea--${controlSize}`, className)}
      aria-invalid={error || props["aria-invalid"] ? true : undefined}
      {...props}
    />
  )
);

Textarea.displayName = "Textarea";
