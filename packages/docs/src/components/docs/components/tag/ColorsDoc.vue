<script setup lang="ts">
import DocSection from '@/components/docs/usage/DocUsageSection.vue';
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';
import { Tag, Chip, Table } from '@linusborg/lib';

const code: DocUsageSectionCode = {
  basic: ` <Chip label="Chip"></Chip>`
};
</script>

<template>
  <DocSection title="Colors" :code="code">
    <Tag color="gray">Gray</Tag>
    <Tag color="red">Red</Tag>
    <Tag color="orange">Orange</Tag>
    <Tag color="yellow">Yellow</Tag>
    <Tag color="green">Green</Tag>
    <Tag color="teal">Teal</Tag>
    <Tag color="blue">Blue</Tag>
    <Tag color="cyan">Cyan</Tag>
    <Tag color="purple">Purple</Tag>
    <Tag color="pink">Pink</Tag>

    <template #description> A table.</template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
