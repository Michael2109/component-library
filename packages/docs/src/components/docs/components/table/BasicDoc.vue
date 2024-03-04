<script setup lang="ts">
import DocSection from '@/components/docs/usage/DocUsageSection.vue';
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';
import { Table } from '@aurora_ui/vue';

const code: DocUsageSectionCode = {
  basic: `<Table
  :items="[
    { firstName: 'John', lastName: 'Doe', age: 30 },
    { firstName: 'Jane', lastName: 'Doe', age: 25 },
    { firstName: 'James', lastName: 'Smith', age: 40 }
  ]"
>
  <Column key="firstName" header="First Name"></Column>
  <Column key="lastName" header="Last Name"></Column>
  <Column key="age" header="Age"></Column>
</Table>`
};

const items = [
  { firstName: 'John', lastName: 'Doe', age: 30 },
  { firstName: 'Jane', lastName: 'Doe', age: 25 },
  { firstName: 'James', lastName: 'Smith', age: 40 }
];
</script>

<template>
  <DocSection title="Basic" :code="code">
    <Table :items="items">
      <Column key="firstName" header="First Name"></Column>
      <Column key="lastName" header="Last Name"></Column>
      <Column key="age" header="Age"></Column>
    </Table>

    <template #description> A table. </template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
