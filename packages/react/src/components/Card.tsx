import { forwardRef } from "react";
import { cx } from "../utils/cx";

export interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  title?: React.ReactNode;
  description?: React.ReactNode;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, title, description, children, ...props }, ref) => (
    <div ref={ref} className={cx("pds-card", className)} {...props}>
      {title ? <h3 className="pds-card__title">{title}</h3> : null}
      {description ? (
        <p className="pds-card__description">{description}</p>
      ) : null}
      {children}
    </div>
  )
);

Card.displayName = "Card";
