<script setup lang="ts">
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';
import DocSection from '@/components/docs/usage/DocUsageSection.vue';

const code: DocUsageSectionCode = {
  basic: `<Button color="gray">Gray</Button>
<Button color="red">Red</Button>
<Button color="orange">Orange</Button>
<Button color="yellow">Yellow</Button>
<Button color="green">Green</Button>
<Button color="teal">Teal</Button>
<Button color="blue">Blue</Button>
<Button color="cyan">Cyan</Button>
<Button color="purple">Purple</Button>
<Button color="pink">Pink</Button>`
};
</script>

<template>
  <DocSection title="Colors" :code="code">
    <Button color="gray">Gray</Button>
    <Button color="red">Red</Button>
    <Button color="orange">Orange</Button>
    <Button color="yellow">Yellow</Button>
    <Button color="green">Green</Button>
    <Button color="teal">Teal</Button>
    <Button color="blue">Blue</Button>
    <Button color="cyan">Cyan</Button>
    <Button color="purple">Purple</Button>
    <Button color="pink">Pink</Button>

    <template #description>
      Use the color prop to change the color of the button.
    </template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
