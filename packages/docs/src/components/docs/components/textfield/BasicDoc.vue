<script setup lang="ts">
import DocSection from '@/components/docs/usage/DocUsageSection.vue';
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';
import { TextField } from '@linusborg/lib';

const code: DocUsageSectionCode = {
  basic: `<p>This is some text and <Code>some code</Code> in a sentence</p>
`
};
</script>

<template>
  <DocSection title="Basic" :code="code">

    <TextField>

    <template #left-icon>
      Left Icon
    </template>

      <template #right-icon>
        Right Icon
      </template>


    </TextField>

    <template #description> A table.</template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
