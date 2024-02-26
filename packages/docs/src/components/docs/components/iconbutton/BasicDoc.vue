<script setup lang="ts">
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';
import DocSection from '@/components/docs/usage/DocUsageSection.vue';

const code: DocUsageSectionCode = {
  basic: `<IconButton>Icon Button</IconButton>`
};
</script>

<template>
  <DocSection title="Basic" :code="code">
    <IconButton>Icon Button</IconButton>
  </DocSection>
</template>

<style scoped lang="sass"></style>
