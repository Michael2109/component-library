<script setup lang="ts">
import DocSection from '@/components/docs/section/DocSection.vue';
import type { DocSectionCode } from '@/components/docs/section/doc-section-code';
import { Chip, Table } from '@linusborg/lib';

const code: DocSectionCode = {
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
</script>

<template>
  <DocSection title="Basic" :code="code">
    <Chip label="Example"></Chip>

    <template #description> A table. </template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
