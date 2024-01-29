// themePlugin.js

import {baseTheme} from "./base-theme";
import {toCustomPropertiesArray} from "object-to-css-variables";
import {App} from "vue";

export default {
    install(app: App, options: Configuration) {
        // Merge the provided theme with a default theme
        const theme: Theme = { ...getDefaultTheme(), ...options.theme };

        updateCSSVariables(theme)
    }
};

function getDefaultTheme(): Theme {
    return baseTheme
}

function updateCSSVariables(theme: Theme) {
    // Access the document's style property to update CSS variables
    const rootStyle = document.documentElement.style;

    const cssVariables = toCustomPropertiesArray(theme as any)

    cssVariables.forEach(cssVariable => rootStyle.setProperty(cssVariable.key, ""+ cssVariable.value))
}