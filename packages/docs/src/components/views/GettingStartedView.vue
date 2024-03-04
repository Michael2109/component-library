<script setup lang="ts">
import CodeBlock from '@/components/docs/usage/CodeBlock.vue';
import CodeBlockTabs, {
  CodeInfo
} from '@/components/docs/usage/CodeBlockTabs.vue';

const installCode = `# Using npm
npm install @aurora-lib/vue

# Using yarn
yarn add @aurora-lib/vue

# Using pnpm
pnpm add @aurora-lib/vue
`;

const usePluginCode = `app.use(ComponentsPlugin, {
  theme: LIGHT_THEME
})`;

const codes: Array<CodeInfo> = [
  {
    label: 'npm',
    code: `# Using npm
npm install @aurora-lib/vue`,
    lang: 'html'
  }
];

const useComponentCode = `import { Button } from '@aurora-lib/vue'

app.component("Button", Button)`;
</script>

<template>
  <h1>Getting Started</h1>

  <h2>Installation</h2>

  <!--  <CodeBlockTabs :codes="codes"></CodeBlockTabs>-->

  <CodeBlock lang="html" :code="installCode"></CodeBlock>

  <h2>Use plugin</h2>
  <CodeBlock lang="html" :code="usePluginCode"></CodeBlock>

  <h2>Import CSS</h2>
  <CodeBlock
    lang="html"
    code="import '@aurora-lib/vue/dist/style.css';"
  ></CodeBlock>

  <h2>Use a component</h2>
  <CodeBlock lang="html" :code="useComponentCode"></CodeBlock>
</template>

<style scoped lang="sass"></style>
