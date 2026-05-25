# @pulkit-design-system/tokens

Design tokens for Pulkit Design System.

## Install

```bash
npm install @pulkit-design-system/tokens
```

This package ships theme-aware CSS variables and a JSON token manifest.

## Usage

### Import CSS variables

Include the tokens stylesheet once in your application entry point.

```css
@import "@pulkit-design-system/tokens/css";
```

Or import it from JavaScript/TypeScript:

```ts
import "@pulkit-design-system/tokens/css";
```

### Use token values in CSS

The package defines a shared token namespace with `--pds-` prefixes.

```css
button {
  background: var(--pds-color-primary);
  color: var(--pds-color-primary-contrast);
  border-radius: var(--pds-radius-md);
  box-shadow: var(--pds-shadow-sm);
}

.card {
  padding: var(--pds-space-6);
  background: var(--pds-color-bg);
  color: var(--pds-color-fg);
}
```

### Theme switching

By default, the tokens expose a light theme. Use `data-theme="dark"` on a parent element to switch colors.

```html
<html>
  <body>
    <main>
      <!-- Light theme content -->
    </main>

    <main data-theme="dark">
      <!-- Dark theme content -->
    </main>
  </body>
</html>
```

### Import token metadata

The package also exports a JSON manifest that can be used for tooling or runtime token inspection.

```ts
import tokens from "@pulkit-design-system/tokens/tokens.json";
console.log(tokens);
```

## Token categories

- Colors
  - `--pds-color-bg`
  - `--pds-color-bg-subtle`
  - `--pds-color-bg-muted`
  - `--pds-color-fg`
  - `--pds-color-fg-muted`
  - `--pds-color-border`
  - `--pds-color-primary`
  - `--pds-color-primary-hover`
  - `--pds-color-primary-contrast`
  - `--pds-color-danger`
  - `--pds-color-success`
  - `--pds-color-warning`
  - `--pds-color-overlay`
  - `--pds-focus-ring`

- Typography
  - `--pds-font-sans`
  - `--pds-font-mono`
  - `--pds-font-size-xs`
  - `--pds-font-size-sm`
  - `--pds-font-size-md`
  - `--pds-font-size-lg`
  - `--pds-font-size-xl`
  - `--pds-line-height-tight`
  - `--pds-line-height-normal`
  - `--pds-line-height-relaxed`
  - `--pds-font-weight-regular`
  - `--pds-font-weight-medium`
  - `--pds-font-weight-semibold`
  - `--pds-font-weight-bold`

- Spacing
  - `--pds-space-0`
  - `--pds-space-1`
  - `--pds-space-2`
  - `--pds-space-3`
  - `--pds-space-4`
  - `--pds-space-5`
  - `--pds-space-6`
  - `--pds-space-8`
  - `--pds-space-10`
  - `--pds-space-12`

- Radius
  - `--pds-radius-none`
  - `--pds-radius-sm`
  - `--pds-radius-md`
  - `--pds-radius-lg`
  - `--pds-radius-full`

- Shadow
  - `--pds-shadow-sm`
  - `--pds-shadow-md`
  - `--pds-shadow-lg`

- Layers
  - `--pds-z-base`
  - `--pds-z-dropdown`
  - `--pds-z-overlay`
  - `--pds-z-modal`
  - `--pds-z-toast`

- Breakpoints
  - `--pds-breakpoint-sm`
  - `--pds-breakpoint-md`
  - `--pds-breakpoint-lg`
  - `--pds-breakpoint-xl`

## Notes

- Use `@pulkit-design-system/tokens/css` whenever you need the theme variables in CSS.
- The `data-theme="dark"` attribute only changes the color palette; other token values remain shared across themes.
- This package is designed to be used together with `@pulkit-design-system/react`, but can also be consumed directly in other frameworks or plain CSS/HTML projects.

## Build

From `packages/tokens`:

```bash
npm run build
```
