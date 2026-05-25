import { forwardRef, useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import { cx } from "../utils/cx";

const focusableSelector = [
  "a[href]",
  "button:not([disabled])",
  "textarea:not([disabled])",
  "input:not([disabled])",
  "select:not([disabled])",
  "[tabindex]:not([tabindex='-1'])"
].join(",");

export interface ModalProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: React.ReactNode;
  description?: React.ReactNode;
  closeOnEscape?: boolean;
  closeOnOverlayClick?: boolean;
  initialFocusRef?: React.RefObject<HTMLElement | null>;
  finalFocusRef?: React.RefObject<HTMLElement | null>;
}

export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onOpenChange,
      title,
      description,
      closeOnEscape = true,
      closeOnOverlayClick = true,
      initialFocusRef,
      finalFocusRef,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const titleId = useId();
    const descriptionId = useId();
    const dialogRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      if (!open) {
        return;
      }

      const previouslyFocused = document.activeElement as HTMLElement | null;
      const finalFocusTarget = finalFocusRef?.current;
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      const firstFocusable =
        initialFocusRef?.current ??
        dialogRef.current?.querySelector<HTMLElement>(focusableSelector) ??
        dialogRef.current;
      firstFocusable?.focus();

      return () => {
        document.body.style.overflow = originalOverflow;
        (finalFocusTarget ?? previouslyFocused)?.focus?.();
      };
    }, [finalFocusRef, initialFocusRef, open]);

    if (!open) {
      return null;
    }

    if (typeof document === "undefined") {
      return null;
    }

    const setRefs = (node: HTMLDivElement | null) => {
      dialogRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === "Escape" && closeOnEscape) {
        event.stopPropagation();
        onOpenChange(false);
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) {
        return;
      }

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(focusableSelector)
      );
      if (focusable.length === 0) {
        event.preventDefault();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    return createPortal(
      <div
        className="pds-dialog__overlay"
        onMouseDown={(event) => {
          if (closeOnOverlayClick && event.target === event.currentTarget) {
            onOpenChange(false);
          }
        }}
      >
        <div
          ref={setRefs}
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          aria-describedby={description ? descriptionId : undefined}
          className={cx("pds-dialog", className)}
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          {...props}
        >
          <button
            type="button"
            className="pds-dialog-close"
            aria-label="Close dialog"
            onClick={() => onOpenChange(false)}
          >
            &times;
          </button>
          <h2 id={titleId} className="pds-dialog__title">
            {title}
          </h2>
          {description ? (
            <p id={descriptionId} className="pds-dialog__description">
              {description}
            </p>
          ) : null}
          {children}
        </div>
      </div>,
      document.body
    );
  }
);

Modal.displayName = "Modal";
