<script setup lang="ts">
import DocSection from '@/components/docs/usage/DocUsageSection.vue';
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';
import { Code, Table } from '@aurora-lib/vue';

const code: DocUsageSectionCode = {
  basic: `<Code color="gray">Gray</Code>
<Code color="red">Red</Code>
<Code color="orange">Orange</Code>
<Code color="yellow">Yellow</Code>
<Code color="green">Green</Code>
<Code color="teal">Teal</Code>
<Code color="blue">Blue</Code>
<Code color="cyan">Cyan</Code>
<Code color="purple">Purple</Code>
<Code color="pink">Pink</Code>`
};
</script>

<template>
  <DocSection title="Colors" :code="code">
    <Code color="gray">Gray</Code>
    <Code color="red">Red</Code>
    <Code color="orange">Orange</Code>
    <Code color="yellow">Yellow</Code>
    <Code color="green">Green</Code>
    <Code color="teal">Teal</Code>
    <Code color="blue">Blue</Code>
    <Code color="cyan">Cyan</Code>
    <Code color="purple">Purple</Code>
    <Code color="pink">Pink</Code>

    <template #description> Code.</template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
