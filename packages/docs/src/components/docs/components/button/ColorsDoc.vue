<script setup lang="ts">
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';
import DocSection from '@/components/docs/usage/DocUsageSection.vue';

const code: DocUsageSectionCode = {
  basic: `<Button severity="primary">Gray</Button>
<Button severity="secondary">Red</Button>
<Button severity="success">Orange</Button>
<Button severity="info">Yellow</Button>
<Button severity="warning">Green</Button>
<Button severity="danger">Teal</Button>`
};
</script>

<template>
  <DocSection title="Severity" :code="code">
    <Button severity="primary">Primary</Button>
    <Button severity="secondary">Secondary</Button>
    <Button severity="success">Success</Button>
    <Button severity="info">Info</Button>
    <Button severity="warning">Warning</Button>
    <Button severity="danger">Danger</Button>

    <template #description>
      Use the color prop to change the color of the button.
    </template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
