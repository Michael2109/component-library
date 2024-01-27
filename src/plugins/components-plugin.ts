// themePlugin.js

import {baseTheme} from "./base-theme";
import {toCustomPropertiesArray} from "object-to-css-variables";

export default {
    install(app, options: Configuration) {
        // Merge the provided theme with a default theme
        const theme: Theme = { ...getDefaultTheme(), ...options.theme };

        console.log("Got theme")
        console.log(theme)

        // Inject the theme into the app
        app.config.globalProperties.$theme = theme;

        // Define a global method to update the theme
        app.config.globalProperties.$updateTheme = (newTheme) => {
            Object.assign(theme, newTheme);
        };

        updateCSSVariables(theme)
    },
};

function getDefaultTheme(): Theme {
    return baseTheme
}

function updateCSSVariables(theme: Theme) {
    // Access the document's style property to update CSS variables
    const rootStyle = document.documentElement.style;

    const cssVariables = toCustomPropertiesArray(theme)

    cssVariables.forEach(cssVariable => {

        console.log(cssVariable)
        rootStyle.setProperty(cssVariable.key, cssVariable.value);
    })
}