<script setup lang="ts">
import type { PropType } from 'vue';
import type { DocumentProperty } from '@/components/docs/props/document-property';

defineProps({
  properties: {
    type: Object as PropType<Array<DocumentProperty>>,
    required: true
  }
});
</script>

<template>
  {{ properties }}
</template>

<style scoped lang="sass"></style>
