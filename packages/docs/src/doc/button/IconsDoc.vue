<script setup lang="ts">
import type { DocSectionCode } from '@/components/docs/section/doc-section-code';
import DocSection from '@/components/docs/section/DocSection.vue';

const code: DocSectionCode = {
  basic: `<Button>
  <template #leftIcon>
    <div class="mdi mdi-account"></div>
  </template>
  Left Icon
</Button>
<Button>
  <template #rightIcon>
    <div class="mdi mdi-account"></div>
  </template>
  Right Icon
</Button>`
};
</script>

<template>
  <DocSection title="Icons" :code="code">
    <Button>
      <template #leftIcon>
        <div class="mdi mdi-account"></div>
      </template>
      Left Icon
    </Button>
    <Button>
      <template #rightIcon>
        <div class="mdi mdi-account"></div>
      </template>
      Right Icon
    </Button>

    <template #description>
      Use the leftIcon and rightIcon slot to display icons.
    </template>
  </DocSection>
</template>

<style scoped lang="sass"></style>
