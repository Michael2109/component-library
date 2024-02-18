<script setup lang="ts">
import VCodeBlock from '@wdns/vue-code-block';
import CodeBlock from '@/components/docs/code/CodeBlock.vue';

const props = defineProps({
  code: {
    type: String,
    required: true
  }
});
</script>

<template>
  <CodeBlock :code="code" prismjs lang="html" />
</template>

<style scoped lang="sass">

.preview-title
  font-weight: 600
  line-height: 1.2
  margin: 1.5rem 0 1rem
  font-size: 1.25rem

.preview-description
  display: block
  margin-block-start: 1em
  margin-block-end: 1em
  margin-inline-start: 0
  margin-inline-end: 0
</style>
