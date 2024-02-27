<script setup lang="ts">
import DocSection from '@/components/docs/usage/DocUsageSection.vue';
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';
import { Tag } from '@aurora/vue';

const code: DocUsageSectionCode = {
  basic: ` <Tag>Tag</Tag>`
};
</script>

<template>
  <DocSection title="Basic" :code="code">
    <Tag>Tag</Tag>

    <template #description> A table.</template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
