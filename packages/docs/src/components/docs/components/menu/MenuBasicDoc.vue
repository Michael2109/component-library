<script setup lang="ts">
import DocSection from '@/components/docs/usage/DocUsageSection.vue';
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';
import { Menu } from '@aurora_ui/vue';
import type { MenuItem } from '@aurora_ui/vue';
import { ref } from 'vue';

const code: DocUsageSectionCode = {
  basic: `<Menu>This is some text and <Code>some code</Code> in a sentence</Menu>
`
};

const basicMenuItems: Array<MenuItem> = [
  { key: 'new', label: 'New', icon: 'mdi mdi-circle' },
  { key: 'search', label: 'Search', icon: 'mdi mdi-circle' }
];

const selectedKey = ref('new');
</script>

<template>
  <DocSection title="Basic" :code="code">
    <div style="width: 250px">
      <Menu v-model="selectedKey" :items="basicMenuItems" />
    </div>
    <template #description> A table.</template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
