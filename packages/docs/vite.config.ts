import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';
import path from 'path';
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    },
    dedupe: ['vue']
  },
  build: {
    // we don't minify so we can look at the bundle ouput. Change if you wanna deploy the playground
    minify: false,
    rollupOptions: {
      // Comment in to move vue out of the bundle - easier to look at the app's bundle content that way.
      // external: ['vue'],
    }
  },
  optimizeDeps: {
    exclude: ['@linusborg/lib']
  }
});
