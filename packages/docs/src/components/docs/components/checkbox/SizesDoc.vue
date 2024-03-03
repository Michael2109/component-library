<script setup lang="ts">
import DocSection from '@/components/docs/usage/DocUsageSection.vue';
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';
import { Checkbox, Chip, Table } from '@aurora-lib/vue';

const code: DocUsageSectionCode = {
  basic: `<Checkbox size="xs">Extra Small</Checkbox>
<Checkbox size="sm">Small</Checkbox>
<Checkbox size="md">Default</Checkbox>
<Checkbox size="lg">Large</Checkbox>
<Checkbox size="xlg">Extra Large</Checkbox>`
};
</script>

<template>
  <DocSection title="Sizes" :code="code">
    <Checkbox size="xs">Extra Small</Checkbox>
    <Checkbox size="sm">Small</Checkbox>
    <Checkbox size="md">Default</Checkbox>
    <Checkbox size="lg">Large</Checkbox>
    <Checkbox size="xlg">Extra Large</Checkbox>

    <template #description> A table.</template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
