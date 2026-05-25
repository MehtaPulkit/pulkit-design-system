import { forwardRef } from "react";
import { cx } from "../utils/cx";

export interface RadioProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, id, ...props }, ref) => {
    const input = (
      <input
        ref={ref}
        id={id}
        type="radio"
        className={cx("pds-radio", className)}
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

Radio.displayName = "Radio";
