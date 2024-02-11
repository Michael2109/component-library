<script setup lang="ts">
import DocSection from '@/components/docs/DocSection.vue';
import type { DocSectionCode } from '@/components/docs/doc-section-code';

const code: DocSectionCode = {
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
      to <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, or
      <code>xlg</code>.
    </template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
