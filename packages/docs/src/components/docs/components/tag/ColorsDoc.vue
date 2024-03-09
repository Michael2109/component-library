<script setup lang="ts">
import DocSection from '@/components/docs/usage/DocUsageSection.vue';
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';
import { Tag, Chip, Table } from '@aurora_ui/vue';

const code: DocUsageSectionCode = {
  basic: `<Tag severity="primary">Primary</Tag>
<Tag severity="secondary">Secondary</Tag>
<Tag severity="success">Success</Tag>
<Tag severity="info">Info</Tag>
<Tag severity="warning">Warning</Tag>
<Tag severity="danger">Danger</Tag>`
};
</script>

<template>
  <DocSection title="Colors" :code="code">
    <Tag severity="primary">Primary</Tag>
    <Tag severity="secondary">Secondary</Tag>
    <Tag severity="success">Success</Tag>
    <Tag severity="info">Info</Tag>
    <Tag severity="warning">Warning</Tag>
    <Tag severity="danger">Danger</Tag>
    <template #description> A table.</template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
