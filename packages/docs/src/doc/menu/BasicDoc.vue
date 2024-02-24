<script setup lang="ts">
import DocSection from '@/components/docs/section/DocSection.vue';
import type { DocSectionCode } from '@/components/docs/section/doc-section-code';
import { Menu, TextField } from '@linusborg/lib';

const code: DocSectionCode = {
  basic: `<Menu>This is some text and <Code>some code</Code> in a sentence</Menu>
`
};
</script>

<template>
  <DocSection title="Basic" :code="code">
    <Menu />

    <template #description> A table.</template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
