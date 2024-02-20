<script setup lang="ts">
import DocumentProps from '@/components/docs/props/DocumentProps.vue';
import type { DocumentProperty } from '@/components/docs/props/document-property';

const properties: Array<DocumentProperty> = [
  {
    name: 'variant',
    type: 'string',
    default: 'solid',
    description:
      'Use the variant prop to change the visual style of the Button. You can set the value to solid, outline, text, or link.'
  },
  {
    name: 'color',
    type: 'string',
    default: 'solid',
    description:
      'Use the variant prop to change the visual style of the Button. You can set the value to solid, outline, text, or link.'
  }
];
</script>

<template>
  <DocumentProps :properties="properties"></DocumentProps>
</template>

<style scoped lang="sass"></style>
