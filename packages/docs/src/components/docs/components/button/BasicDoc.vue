<script setup lang="ts">
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';
import DocSection from '@/components/docs/usage/DocUsageSection.vue';
import { Checkbox } from '@aurora_ui/vue';

const code: DocUsageSectionCode = {
  basic: `<Button>Button</Button>`
};
</script>

<template>
  <DocSection title="Basic" :code="code">
    <Button>Button</Button>
  </DocSection>
</template>

<style scoped lang="sass"></style>
