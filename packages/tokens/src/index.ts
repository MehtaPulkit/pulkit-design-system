import tokenJson from "./tokens.json";

export const tokens = tokenJson;
export const semanticTokens = tokenJson.semantic;

export type DesignTokens = typeof tokens;
export type ColorToken = keyof typeof tokens.color;
export type SemanticTheme = keyof typeof tokens.semantic;
export type SemanticColorToken = keyof typeof tokens.semantic.light;
export type SpacingToken = keyof typeof tokens.spacing;
export type RadiusToken = keyof typeof tokens.radius;
export type ShadowToken = keyof typeof tokens.shadow;
export type ZIndexToken = keyof typeof tokens.zIndex;
export type BreakpointToken = keyof typeof tokens.breakpoint;

export const lightTheme = {
  "color-bg": "#ffffff",
  "color-bg-subtle": "#f8fafc",
  "color-bg-muted": "#f1f5f9",
  "color-fg": "#0f172a",
  "color-fg-muted": "#475569",
  "color-border": "#cbd5e1",
  "color-primary": "#2563eb",
  "color-primary-hover": "#1d4ed8",
  "color-primary-contrast": "#ffffff",
  "color-danger": "#dc2626",
  "color-danger-bg": "#fef2f2",
  "color-success": "#16a34a",
  "color-success-bg": "#f0fdf4",
  "color-warning": "#ca8a04",
  "color-warning-bg": "#fefce8"
} as const;

export const darkTheme = {
  "color-bg": "#0b1120",
  "color-bg-subtle": "#111827",
  "color-bg-muted": "#1f2937",
  "color-fg": "#f8fafc",
  "color-fg-muted": "#cbd5e1",
  "color-border": "#334155",
  "color-primary": "#60a5fa",
  "color-primary-hover": "#93c5fd",
  "color-primary-contrast": "#0b1120",
  "color-danger": "#f87171",
  "color-danger-bg": "#450a0a",
  "color-success": "#4ade80",
  "color-success-bg": "#052e16",
  "color-warning": "#facc15",
  "color-warning-bg": "#422006"
} as const;
