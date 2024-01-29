import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import {fileURLToPath} from "url";
import dts from "vite-plugin-dts"

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(),  dts({
        insertTypesEntry: true,
    })],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    build: {
        sourcemap: true,
        lib: {
            // src/indext.ts is where we have exported the component(s)
            entry: resolve(__dirname, "src/index.ts"),
            name: "ComponentsLibrary",
            formats: ['es', 'umd'],
            fileName: (format) => `index.${format}.js`
        },

        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: ["vue"],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: "Vue",
                },
            },
        },
    },

})
