# Pulkit Design System

A portfolio-quality React design system monorepo built to demonstrate senior frontend and design-system engineering skills: package architecture, tokens, accessible components, Storybook documentation, testing, and publish-ready npm configuration.

## Why Design Systems Matter

Design systems turn repeated product decisions into shared infrastructure. A good system helps teams ship faster, improves consistency, lowers accessibility risk, and creates a common language for designers and engineers.

This project is intentionally small, but it is structured like a real package ecosystem: tokens are separated from React components, components are documented in Storybook, and package exports are ready for npm consumers.

## Architecture

```text
packages/
  tokens/      Design tokens exported as CSS, TypeScript, and JSON
  react/       Accessible React components built on the tokens
apps/
  storybook/   Component documentation and usage examples
```

The monorepo uses npm workspaces so each package can be versioned, built, and consumed through package boundaries while staying easy to run locally.

## Token Strategy

`@pulkit-design-system/tokens` exposes foundational values for colors, typography, spacing, radius, shadows, z-index, and breakpoints.

The important architectural choice is semantic CSS variables. Components use variables such as `--pds-color-bg`, `--pds-color-fg`, and `--pds-color-primary` instead of hard-coded palette values. That allows themes to swap at runtime with:

```html
<html data-theme="dark"></html>
```

Consumers can use tokens in three ways:

```ts
import { tokens } from "@pulkit-design-system/tokens";
import "@pulkit-design-system/tokens/css";
import tokenJson from "@pulkit-design-system/tokens/tokens.json";
```

## React Components

`@pulkit-design-system/react` includes:

- Button
- Input
- Textarea
- Select
- Checkbox
- Radio
- Badge
- Card
- Modal
- Alert
- FormField

Example:

```tsx
import "@pulkit-design-system/react/styles.css";
import { Button, FormField, Input } from "@pulkit-design-system/react";

export function SettingsForm() {
  return (
    <form>
      <FormField label="Email" hint="Use your work email" error="Email is required">
        <Input type="email" />
      </FormField>

      <Button variant="primary" size="md" loading>
        Save changes
      </Button>
    </form>
  );
}
```

## Accessibility Considerations

The components favor native HTML semantics and small, predictable abstractions:

- Buttons preserve the native `button` element and expose loading with `aria-busy`.
- FormField connects labels, hints, and errors through `htmlFor` and `aria-describedby`.
- Invalid fields receive `aria-invalid`.
- Modal uses `role="dialog"`, `aria-modal`, focus placement, focus trapping, Escape close, and overlay close.
- Alert uses `role="alert"` for danger messaging and `role="status"` for non-critical feedback.

## Local Development

Install dependencies:

```bash
npm install
```

Run Storybook:

```bash
npm run storybook
```

Run tests:

```bash
npm test
```

Build packages and Storybook:

```bash
npm run build
npm run build-storybook
```

Lint and format:

```bash
npm run lint
npm run format
```

## Publishing

Build the packages:

```bash
npm run build:packages
```

From each publishable package, validate the package contents:

```bash
npm pack --dry-run -w @pulkit-design-system/tokens
npm pack --dry-run -w @pulkit-design-system/react
```

Publish when ready:

```bash
npm publish -w @pulkit-design-system/tokens --access public
npm publish -w @pulkit-design-system/react --access public
```

In a production team, publishing should run through CI with tests, linting, build verification, changelog generation, and semantic version enforcement.

## Key Decisions

- **Separate tokens package:** design decisions can evolve independently from React implementation.
- **CSS variables for theming:** light and dark modes work at runtime without recompiling CSS.
- **Peer React dependencies:** consumers keep one React runtime in their app.
- **Vite library mode:** ESM and CJS outputs support modern bundlers and older tooling.
- **No heavy component dependency:** the implementation stays readable for anyone to review.
- **Storybook-first docs:** components are documented where engineers can inspect behavior interactively.

## Future Improvements

- Add visual regression testing with Chromatic or Playwright screenshots.
- Add a release workflow using Changesets.
- Expand components into composable primitives such as Tabs, Tooltip, Menu, and Combobox.
- Generate tokens from a design-tool-friendly source format.
- Add codemods and migration guides for breaking changes.
- Add package provenance and CI publish automation.
