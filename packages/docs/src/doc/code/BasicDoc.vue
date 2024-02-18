<script setup lang="ts">
import DocSection from '@/components/docs/section/DocSection.vue';
import type { DocSectionCode } from '@/components/docs/section/doc-section-code';
import { Code } from '@linusborg/lib';

const code: DocSectionCode = {
  basic: ` <Code></Code>`
};
</script>

<template>
  <DocSection title="Basic" :code="code">
    <Code>This is some text </Code>

    <template #description> A table.</template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
