// themePlugin.js

import { LIGHT_THEME } from '../theme/themes/light-theme';
import { toCustomPropertiesArray } from 'object-to-css-variables';
import type { App } from 'vue';
import type { Theme } from '@/theme/theme';
import type { Configuration } from './configuration';
import './style.sass';

let theme: Theme;

export default {
  install(app: App, options: Configuration) {
    // Merge the provided theme with a default theme
    theme = { ...getDefaultTheme(), ...options.theme };

    setTheme(theme);
  }
};

function getDefaultTheme(): Theme {
  return LIGHT_THEME;
}

export function useTheme() {
  return {
    global: () => theme,
    setTheme: (newTheme: Theme) => setTheme(newTheme)
  };
}

function setTheme(newTheme: Theme) {
  theme = newTheme;
  updateCSSVariables(theme);
}

function updateCSSVariables(theme: Theme) {
  // Access the document's style property to update CSS variables
  const rootStyle = document.documentElement.style;

  const cssVariables = toCustomPropertiesArray(theme as any);

  cssVariables.forEach((cssVariable) =>
    rootStyle.setProperty(cssVariable.key, '' + cssVariable.value)
  );
}
