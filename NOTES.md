# Notes

## Why I Built It

I built this project to show that I can think beyond isolated components. A real design system needs token architecture, package boundaries, accessibility defaults, documentation, tests, and a release strategy. This repo demonstrates those pieces in a compact, reviewable form.

## Key Technical Decisions

- I used npm workspaces to model a real package ecosystem without adding unnecessary tooling.
- I separated `@pulkit-design-system/tokens` from `@pulkit-design-system/react` so design decisions are not coupled to React implementation details.
- I used Vite library mode to generate ESM and CJS builds with TypeScript declarations.
- React and React DOM are peer dependencies so consumers do not get duplicate React runtimes.
- I kept class composition simple with a local `cx` helper instead of adding a dependency for a small surface area.
- I added npm publishing metadata such as package `exports`, `publishConfig`, `files`, license, and keywords so the packages look and behave like real publishable artifacts.

## Token And Component Separation

The tokens package owns colors, typography, spacing, radius, shadows, z-index, and breakpoints. It exposes those tokens as CSS variables, a TypeScript object, and JSON.

I split tokens into primitive and semantic layers. Primitive tokens are raw values such as blue, slate, spacing, and radius scales. Semantic tokens express product intent such as background, foreground, border, primary, danger, overlay, and focus ring.

The React package consumes semantic CSS variables instead of raw palette values. That means components depend on design intent, not theme implementation. For example, a Button uses `--pds-color-primary` rather than a specific blue hex value. This makes dark mode a token concern instead of a component rewrite.

## Accessibility

I used native elements wherever possible because native controls already provide strong keyboard and assistive technology behavior.

Important examples:

- FormField creates the relationship between label, hint, error, and control using `htmlFor`, `aria-describedby`, `required`, and `aria-invalid`.
- Modal uses `role="dialog"`, `aria-modal`, labelled title text, portal rendering, body scroll lock, initial focus, focus restoration, Escape close, overlay close, and focus trapping.
- Alert uses assertive semantics only for danger states and polite status semantics for non-critical feedback.
- Disabled and loading states are exposed through native `disabled` and `aria-busy`.

## Architect Review Improvements

After reviewing the system like a senior frontend architect, I improved the areas that would matter most in production:

- Strengthened Modal behavior with portal rendering, scroll locking, focus restore, configurable Escape and overlay dismissal, and tests around those behaviors.
- Added semantic token metadata so the system can explain the difference between raw palette values and product-facing theme decisions.
- Added `controlSize` APIs for Input, Textarea, and Select so form density can be adjusted consistently.
- Added required and optional label support to FormField while keeping the accessible name clean.
- Tightened package publishing metadata and dry-run package contents so the package surface is intentional.
- Expanded Storybook to include token/theming examples, form sizing, and stronger documentation around accessibility and consumption.

The talking point here is that I did not just add components. I reviewed the system for long-term maintainability, consumer ergonomics, accessibility behavior, and publishing quality.

## How This Scales In A Company

In a larger organization, I would add a contribution model around design review, accessibility review, engineering review, and release approval. Tokens would likely be generated from a shared source of truth and reviewed with designers before release.

The package structure can scale into more packages:

- `tokens` for platform-agnostic design decisions.
- `react` for React components.
- `icons` for shared icon assets.
- `eslint-config` and `typescript-config` for engineering standards.
- `docs` or Storybook for product-team documentation.

## Versioning

I would use semantic versioning:

- Patch releases for bug fixes and visual corrections.
- Minor releases for new components, variants, and additive props.
- Major releases for breaking prop changes, removed tokens, or behavior changes.

In production I would add Changesets, generated changelogs, CI checks, and migration notes for major versions.

## Designer And Engineer Collaboration

Designers would own the design intent and token decisions. Engineers would own implementation quality, package API, accessibility, testing, and migration safety. Storybook becomes the shared review surface where both groups can inspect variants, states, and edge cases.

For token changes, I would encourage designers and engineers to review semantic names together. Good token names should describe purpose, not appearance, so themes can evolve without renaming every consumer.

## What I Would Improve Next

- Add visual regression testing to catch unintended styling changes.
- Add compound components for Dialog, Select, Tabs, Tooltip, Menu, and Combobox.
- Add a Changesets release workflow.
- Add generated token documentation and Figma token export alignment.
- Add more exhaustive keyboard tests for interactive components.
- Add CI with install, lint, test, build, Storybook build, and npm dry-run checks.
- Add automated accessibility checks in CI using Storybook test runner or Playwright plus axe.
