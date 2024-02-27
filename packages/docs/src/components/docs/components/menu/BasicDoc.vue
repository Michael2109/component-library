<script setup lang="ts">
import DocSection from '@/components/docs/usage/DocUsageSection.vue';
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';
import { Menu } from '@aurora-lib/vue';
import type { MenuItem } from '@aurora-lib/vue';

const code: DocUsageSectionCode = {
  basic: `<Menu>This is some text and <Code>some code</Code> in a sentence</Menu>
`
};

const basicMenuItems: Array<MenuItem> = [
  { key: 'key', label: 'Label' },
  { key: 'key', label: 'Label' },
  { key: 'key', label: 'Label' },
  {
    key: 'key',
    label: 'Label',
    items: [
      { key: 'key', label: 'Label' },
      { key: 'key', label: 'Label' }
    ]
  }
];
</script>

<template>
  <DocSection title="Basic" :code="code">
    <Menu :items="basicMenuItems" />

    <template #description> A table.</template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
