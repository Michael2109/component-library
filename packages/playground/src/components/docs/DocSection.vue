<script setup lang="ts">
import type { PropType } from 'vue';
import type { DocSectionCode } from '@/components/docs/doc-section-code';
import Preview from '@/components/docs/Preview.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  code: {
    type: Object as PropType<DocSectionCode>,
    required: true
  }
});
</script>

<template>
  <span class="document-title">{{ title }}</span>
  <p class="document-description">
    <slot name="description"> </slot>
  </p>

  <div class="doc-section-component">
    <slot></slot>
  </div>
  <preview :code="code.basic"></preview>
</template>

<style scoped lang="sass">

.document-title
  font-weight: 600
  line-height: 1.2
  margin: 1.5rem 0 1rem
  font-size: 1.75rem

.document-description
  display: block
  margin-block-start: 1em
  margin-block-end: 1em
  margin-inline-start: 0
  margin-inline-end: 0

.doc-section-component
  display: flex
  justify-content: center
  align-items: center
  gap: 8px
  background-color: #ffffff
  border: #d8d8d8 solid 1px
  margin-top: 8px
  padding: 10px
  margin-bottom: 8px
  border-radius: 5px
</style>
