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

const codes: Array<CodeInfo> = [
  {
    label: 'npm',
    code: `# Using npm
npm install @aurora-lib/vue`,
    lang: 'html'
  }
];
</script>

<template>
  <h1>Getting Started</h1>

  <h2>Installation</h2>

  <CodeBlockTabs :codes="codes"></CodeBlockTabs>

  <h2>Import</h2>
  <CodeBlock
    lang="html"
    code="import { Button } from '@aurora-lib/vue'"
  ></CodeBlock>
</template>

<style scoped lang="sass"></style>
