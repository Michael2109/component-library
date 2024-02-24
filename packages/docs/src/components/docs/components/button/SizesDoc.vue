<script setup lang="ts">
import DocSection from '@/components/docs/usage/DocUsageSection.vue';
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';

const code: DocUsageSectionCode = {
  basic: `<Button size='xs'>Extra Small</Button>
<Button size='sm'>Small</Button>
<Button size='md'>Default</Button>
<Button size='lg'>Large</Button>
<Button size='xlg'>Extra Large</Button>`
};
</script>

<template>
  <DocSection title="Sizes" :code="code">
    <Button size="xs">Extra Small</Button>
    <Button size="sm">Small</Button>
    <Button size="md">Default</Button>
    <Button size="lg">Large</Button>
    <Button size="xlg">Extra Large</Button>

    <template #description>
      Use the size prop to change the size of the button. You can set the value
      to <Code>xs</Code>, <Code>sm</Code>, <Code>md</Code>, <Code>lg</Code>, or
      <Code>xlg</Code>.
    </template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
