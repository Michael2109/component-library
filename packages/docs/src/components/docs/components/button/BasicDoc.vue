<script setup lang="ts">
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';
import DocSection from '@/components/docs/usage/DocUsageSection.vue';
import { Checkbox } from '@aurora-lib/vue';

const code: DocUsageSectionCode = {
  basic: `<Checkbox>Checkbox</Checkbox>`
};
</script>

<template>
  <DocSection title="Basic" :code="code">
    <Checkbox>Checkbox</Checkbox>
  </DocSection>
</template>

<style scoped lang="sass"></style>
