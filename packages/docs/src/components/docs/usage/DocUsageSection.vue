<script setup lang="ts">
import type { PropType } from 'vue';
import type { DocUsageSectionCode } from '@/components/docs/usage/doc-usage-section-code';
import CodeBlock from '@/components/docs/usage/CodeBlock.vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  code: {
    type: Object as PropType<DocUsageSectionCode>,
    required: true
  }
});
</script>

<template>
  <div class="document-section">
    <div class="document-section-content">
      <h2 :id="title" class="document-section-title">
        {{ title }}
      </h2>
      <a
        aria-current="page"
        href="/button/#import"
        class="document-section-title-link"
      >
        #
      </a>
    </div>

    <p class="document-section-description">
      <slot name="description"> </slot>
    </p>

    <div class="doc-section-component">
      <slot></slot>
    </div>
    <CodeBlock :code="code.basic" lang="html"></CodeBlock>
  </div>
</template>

<style scoped lang="sass">
.document-section
  margin-top: 30px

.document-section-title
  font-weight: 600
  line-height: 1.2
  margin: 2.5rem 0 1rem
  font-size: 1.5rem

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
  justify-content: left
  align-items: center
  gap: 10px
  background-color: var(--colors-surface-50)
  //border: var(--color-surface-300) solid 1px
  margin-top: 8px
  margin-bottom: 16px
  border-radius: 5px
</style>
