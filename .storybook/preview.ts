import type { Preview } from "@storybook/vue3";
import { themes } from '@storybook/theming';

import { setup } from "@storybook/vue3";
import componentsPlugin from "../src/plugins/components-plugin";
import {baseTheme} from "../src/plugins/base-theme";
import App from "../src/App.vue";

setup((app) => {
  app.use(componentsPlugin, {
    theme: baseTheme
  });
});

const preview: Preview = {

  parameters: {
    docs: {
      theme: themes.light,
    },
  },
  decorators: [
    (story) => ({
      components: { story, App},
      template: '<story />',
    }),
  ],
};


export default preview;