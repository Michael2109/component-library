<script setup lang="ts">
import Preview from '@/components/docs/Preview.vue';
import Documentation from '@/App.vue';
import Document from '@/components/docs/DocSection.vue';
import DocumentHeader from '@/components/docs/DocSectionHeader.vue';
import type { DocSectionCode } from '@/components/docs/doc-section-code';
import DocSection from '@/components/docs/DocSection.vue';

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
      to xs, sm, md, lg, or xlg.
    </template></DocSection
  >
</template>

<style scoped lang="sass"></style>
