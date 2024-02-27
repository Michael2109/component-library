<script setup lang="ts">
import CodeBlock from '@/components/docs/usage/CodeBlock.vue';

const installCode = `# Using npm
npm install @aurora-lib/vue

# Using yarn
yarn add @aurora-lib/vue

# Using pnpm
pnpm add @aurora-lib/vue
`;
</script>

<template>
  <h1>Getting Started</h1>

  <h2>Installation</h2>

  <CodeBlock lang="html" :code="installCode"></CodeBlock>

  <h2>Import</h2>
  <CodeBlock
    lang="html"
    code="import { Button } from '@aurora-lib/vue'"
  ></CodeBlock>
</template>

<style scoped lang="sass"></style>
