<script setup lang="ts">
import DocSection from '@/components/docs/usage/DocUsageSection.vue';
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';
import { Checkbox, Chip, Table } from '@linusborg/lib';

const code: DocUsageSectionCode = {
  basic: ` <Chip label="Chip"></Chip>`
};
</script>

<template>
  <DocSection title="Colors" :code="code">
    <Checkbox color="gray">Gray</Checkbox>
    <Checkbox color="red">Red</Checkbox>
    <Checkbox color="orange">Orange</Checkbox>
    <Checkbox color="yellow">Yellow</Checkbox>
    <Checkbox color="green">Green</Checkbox>
    <Checkbox color="teal">Teal</Checkbox>
    <Checkbox color="blue">Blue</Checkbox>
    <Checkbox color="cyan">Cyan</Checkbox>
    <Checkbox color="purple">Purple</Checkbox>
    <Checkbox color="pink">Pink</Checkbox>

    <template #description> A table.</template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
