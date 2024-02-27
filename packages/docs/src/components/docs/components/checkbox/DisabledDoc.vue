<script setup lang="ts">
import DocSection from '@/components/docs/usage/DocUsageSection.vue';
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';
import { Checkbox, Chip, Table } from '@aurora/vue';

const code: DocUsageSectionCode = {
  basic: ` <Checkbox label="Checkbox" disabled></Checkbox>`
};
</script>

<template>
  <DocSection title="Disabled" :code="code">
    <Checkbox disabled>Checkbox</Checkbox>

    <template #description> A table.</template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
