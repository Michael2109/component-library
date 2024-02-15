<script setup lang="ts">
import DocSection from '@/components/docs/section/DocSection.vue';
import type { DocSectionCode } from '@/components/docs/section/doc-section-code';
import { Chip, Table } from '@linusborg/lib';

const code: DocSectionCode = {
  basic: ` <Chip label="Chip"></Chip>`
};
</script>

<template>
  <DocSection title="Basic" :code="code">
    <Chip label="Chip"></Chip>

    <template #description> A table.</template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
