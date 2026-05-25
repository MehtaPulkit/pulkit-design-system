import { forwardRef } from "react";
import { cx } from "../utils/cx";

export type AlertVariant = "info" | "success" | "warning" | "danger";

export interface AlertProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  variant?: AlertVariant;
  title?: React.ReactNode;
}

export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant = "info", title, children, ...props }, ref) => (
    <div
      ref={ref}
      role={variant === "danger" ? "alert" : "status"}
      className={cx("pds-alert", `pds-alert--${variant}`, className)}
      {...props}
    >
      {title ? <p className="pds-alert__title">{title}</p> : null}
      {children ? <p className="pds-alert__description">{children}</p> : null}
    </div>
  )
);

Alert.displayName = "Alert";
