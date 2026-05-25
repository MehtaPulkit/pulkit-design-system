import { forwardRef } from "react";
import { cx } from "../utils/cx";

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className, label, id, ...props }, ref) => {
    const input = (
      <input
        ref={ref}
        id={id}
        type="checkbox"
        className={cx("pds-checkbox", className)}
        {...props}
      />
    );

    if (!label) {
      return input;
    }

    return (
      <label className="pds-control">
        {input}
        <span>{label}</span>
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
