<script setup lang="ts">
import DocSection from '@/components/docs/usage/DocUsageSection.vue';
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';
import { Chip, Table } from '@linusborg/lib';

const code: DocUsageSectionCode = {
  basic: ` <Chip label="Chip"></Chip>`
};
</script>

<template>
  <DocSection title="Basic" :code="code">
    <Chip label="Chip"></Chip>

    <template #description> A table.</template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
