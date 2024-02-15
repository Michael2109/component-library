<script setup lang="ts">
import DocSection from '@/components/docs/section/DocSection.vue';
import type { DocSectionCode } from '@/components/docs/section/doc-section-code';
import { Checkbox, Table } from '@linusborg/lib';

const code: DocSectionCode = {
  basic: ` <Checkbox></Checkbox>`
};
</script>

<template>
  <DocSection title="Basic" :code="code">
    <Checkbox>This is some text </Checkbox>

    <template #description> A table.</template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
