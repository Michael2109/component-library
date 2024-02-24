<script setup lang="ts">
import DocSection from '@/components/docs/usage/DocUsageSection.vue';
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';

const code: DocUsageSectionCode = {
  basic: `<Button variant="solid">Solid</Button>
<Button variant="outlined">Outlined</Button>
<Button variant="text">Text</Button>
<Button variant="link">Link</Button>`
};
</script>

<template>
  <DocSection title="Variants" :code="code">
    <Button variant="solid">Solid</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="text">Text</Button>
    <Button variant="link">Link</Button>
    <template #description>
      Use the variant prop to change the visual style of the Button. You can set
      the value to solid, outline, text, or link.
    </template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
