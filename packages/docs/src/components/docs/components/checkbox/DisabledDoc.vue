<script setup lang="ts">
import DocSection from '@/components/docs/usage/DocUsageSection.vue';
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';
import { Checkbox, Chip, Table } from '@aurora-lib/vue';

const code: DocUsageSectionCode = {
  basic: `<Checkbox disabled>Disabled</Checkbox>`
};
</script>

<template>
  <DocSection title="Disabled" :code="code">
    <Checkbox disabled>Disabled</Checkbox>

    <template #description> A table.</template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
