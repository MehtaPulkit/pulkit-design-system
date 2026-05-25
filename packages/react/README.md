# @pulkit-design-system/react

Accessible React components for Pulkit Design System.

## Install

```bash
npm install @pulkit-design-system/react @pulkit-design-system/tokens
```

React and React DOM are peer dependencies.

## Usage

Import the component styles and the component exports from the package.

```tsx
import "@pulkit-design-system/react/styles.css";
import {
  Alert,
  Badge,
  Button,
  Card,
  Checkbox,
  FormField,
  Input,
  Modal,
  Radio,
  Select,
  Textarea
} from "@pulkit-design-system/react";

export function Example() {
  return (
    <div style={{ maxWidth: 500, margin: "0 auto", padding: 24 }}>
      <Alert variant="info">This is an accessible info alert.</Alert>

      <Card>
        <h2>Sign in</h2>
        <FormField label="Email" hint="Use your work email address">
          <Input type="email" placeholder="hello@example.com" />
        </FormField>

        <FormField label="Password">
          <Input type="password" placeholder="Enter password" />
        </FormField>

        <FormField label="Role">
          <Select>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </Select>
        </FormField>

        <Button variant="primary" size="large">
          Submit
        </Button>
      </Card>

      <div style={{ marginTop: 16 }}>
        <Badge variant="success">New</Badge>
        <Badge variant="warning" size="small">
          Beta
        </Badge>
      </div>
    </div>
  );
}
```

## Component overview

The package exports a set of accessible building blocks for forms, layout, and feedback.

- `Alert` — inline banners for success, warning, error, and info messaging.
- `Badge` — small status labels and counters.
- `Button` — primary, secondary, and subtle button variants with size options.
- `Card` — container surfaces for grouped content.
- `Checkbox` — accessible checkbox controls.
- `FormField` — label + hint + helper text wrappers for form controls.
- `Input` — text, email, password, and other input types.
- `Modal` — dialog overlay with accessible focus handling.
- `Radio` — grouped radio button controls.
- `Select` — dropdown select controls.
- `Textarea` — multi-line text entry.

## Theming

This package uses CSS variables from `@pulkit-design-system/tokens`.

Set `data-theme="dark"` on a parent element to switch themes:

```html
<main data-theme="dark">
  <!-- your app markup -->
</main>
```

You can also nest themes for local variations:

```html
<section data-theme="dark">
  <div className="card">Dark section content</div>
</section>
```

## Accessibility

Components are built with accessibility in mind:

- `FormField` connects labels, hints, and input controls.
- `Modal` supports focus trapping and keyboard dismissal.
- `Alert` uses semantic markup for status announcements.

## Notes

- Import `@pulkit-design-system/react/styles.css` once per application.
- `@pulkit-design-system/tokens` provides theme values and CSS variables.
- The package is written in TypeScript and includes exported component prop types.

## Build & test

From `packages/react`:

```bash
npm run build
npm run test
```
