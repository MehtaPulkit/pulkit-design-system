import { forwardRef } from "react";
import { cx } from "../utils/cx";
import type { ControlSize } from "./Input";

export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {
  error?: boolean;
  controlSize?: ControlSize;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, error, controlSize = "md", children, ...props }, ref) => (
    <select
      ref={ref}
      className={cx("pds-select", `pds-select--${controlSize}`, className)}
      aria-invalid={error || props["aria-invalid"] ? true : undefined}
      {...props}
    >
      {children}
    </select>
  )
);

Select.displayName = "Select";
