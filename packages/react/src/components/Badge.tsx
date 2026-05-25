import { forwardRef } from "react";
import { cx } from "../utils/cx";

export type BadgeVariant = "neutral" | "success" | "warning" | "danger";
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "neutral", size = "md", ...props }, ref) => (
    <span
      ref={ref}
      className={cx(
        "pds-badge",
        `pds-badge--${variant}`,
        `pds-badge--${size}`,
        className
      )}
      {...props}
    />
  )
);

Badge.displayName = "Badge";
