<script setup lang="ts">
import { LIGHT_THEME } from '@aurora_ui/vue';
import CodeBlock from '@/components/docs/usage/CodeBlock.vue';

const lightTheme = JSON.stringify(LIGHT_THEME, null, 2);
</script>

<template>
  <div>Theme</div>
  <CodeBlock lang="html" :code="lightTheme"></CodeBlock>
</template>

<style scoped lang="sass"></style>
