<script setup lang="ts">
import DocSection from '@/components/docs/section/DocSection.vue';
import type { DocSectionCode } from '@/components/docs/section/doc-section-code';
import { Table } from '@linusborg/lib';

const code: DocSectionCode = {
  basic: `<Table :items="">Solid</Table>
<Button variant="outlined">Outlined</Button>
<Button variant="text">Text</Button>
<Button variant="link">Link</Button>`
};
</script>

<template>
  <DocSection title="Variants" :code="code">
    <Table :items="[{ example1: 'Something', example2: 'Something2' }]">
      <Column key="example1" header="Test 1"></Column>
      <Column key="example2" header="Test 2"></Column>
      <Column key="example3" header="Test 3"></Column>
    </Table>

    <template #description>
      Use the variant prop to change the visual style of the Button. You can set
      the value to solid, outline, text, or link.
    </template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
