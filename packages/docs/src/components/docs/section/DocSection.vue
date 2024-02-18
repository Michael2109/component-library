<script setup lang="ts">
import type { PropType } from 'vue';
import type { DocSectionCode } from '@/components/docs/section/doc-section-code';
import Preview from '@/components/docs/section/Preview.vue';

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
  <div class="document-section">
    <div class="document-section-title">
      <div class="document-section-content">
        <h2>
          {{ title }}
          <a
            aria-current="page"
            href="/button/#import"
            class="document-section-title-link"
          >
            #
          </a>
        </h2>
      </div>
    </div>

    <p class="document-section-description">
      <slot name="description"> </slot>
    </p>

    <div class="doc-section-component">
      <slot></slot>
    </div>
    <preview :code="code.basic"></preview>
  </div>
</template>

<style scoped lang="sass">
.document-section
  margin-top: 30px

.document-section-title
  font-weight: 600
  line-height: 1.2
  margin: 1.5rem 0 1rem
  font-size: 1.25rem

.document-section-title-link
  text-decoration: none
  display: none

.document-section-title:hover > .document-section-title-link
  display: inline

.document-section-description
  display: block
  margin-block-start: 1em
  margin-block-end: 1em
  margin-inline-start: 0
  margin-inline-end: 0

.doc-section-component
  padding: 20px
  flex-wrap: wrap
  display: flex
  justify-content: center
  align-items: center
  gap: 10px
  background-color: var(--color-surface-200)
  //border: var(--color-surface-300) solid 1px
  margin-top: 8px
  margin-bottom: 8px
  border-radius: 5px
</style>
