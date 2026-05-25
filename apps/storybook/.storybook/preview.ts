import type { Preview } from "@storybook/react";
import "@pulkit-design-system/react/styles.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    },
    a11y: {
      element: "#storybook-root"
    }
  }
};

export default preview;
