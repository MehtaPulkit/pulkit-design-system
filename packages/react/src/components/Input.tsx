import { forwardRef } from "react";
import { cx } from "../utils/cx";

export type ControlSize = "sm" | "md" | "lg";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  controlSize?: ControlSize;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, controlSize = "md", ...props }, ref) => (
    <input
      ref={ref}
      className={cx("pds-input", `pds-input--${controlSize}`, className)}
      aria-invalid={error || props["aria-invalid"] ? true : undefined}
      {...props}
    />
  )
);

Input.displayName = "Input";
