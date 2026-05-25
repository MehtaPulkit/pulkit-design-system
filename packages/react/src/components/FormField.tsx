import { cloneElement, isValidElement, useId } from "react";
import { cx } from "../utils/cx";

type DescribedChild = React.ReactElement<{
  id?: string;
  error?: boolean;
  required?: boolean;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
}>;

export interface FormFieldProps extends React.HTMLAttributes<HTMLDivElement> {
  label: React.ReactNode;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  required?: boolean;
  optionalText?: React.ReactNode;
  children: DescribedChild;
}

export function FormField({
  label,
  hint,
  error,
  required = false,
  optionalText,
  children,
  className,
  ...props
}: FormFieldProps) {
  const generatedId = useId();
  const controlId = children.props.id ?? generatedId;
  const hintId = hint ? `${controlId}-hint` : undefined;
  const errorId = error ? `${controlId}-error` : undefined;
  const describedBy = [children.props["aria-describedby"], hintId, errorId]
    .filter(Boolean)
    .join(" ");

  const control = isValidElement(children)
    ? cloneElement(children, {
        id: controlId,
        error: Boolean(error) || children.props.error,
        required: required || children.props.required,
        "aria-describedby": describedBy || undefined,
        "aria-invalid": error ? true : children.props["aria-invalid"]
      })
    : children;

  return (
    <div className={cx("pds-field", className)} {...props}>
      <label className="pds-field__label" htmlFor={controlId}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
        {!required && optionalText ? (
          <span className="pds-field__optional"> {optionalText}</span>
        ) : null}
      </label>
      {control}
      {hint ? (
        <p className="pds-field__hint" id={hintId}>
          {hint}
        </p>
      ) : null}
      {error ? (
        <p className="pds-field__error" id={errorId}>
          {error}
        </p>
      ) : null}
    </div>
  );
}
