<script setup lang="ts">
import DocSection from '@/components/docs/usage/DocUsageSection.vue';
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';
import { Tag } from '@linusborg/lib';

const code: DocUsageSectionCode = {
  basic: ` <Tag closable>Tag</Tag>`
};
</script>

<template>
  <DocSection title="Closeable" :code="code">
    <Tag closeable>Tag</Tag>

    <template #description> A table.</template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
