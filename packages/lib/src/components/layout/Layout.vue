<script setup lang="ts">
import { defineModel } from 'vue';

const model = defineModel<Boolean>();

const props = defineProps({
  id: {
    type: String,
    required: false,
    default: undefined
  }
});
</script>

<template>
  <div class="layout">
    <slot name="header" />

    <slot name="sidebar" />

    <div class="aurora-layout-content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="sass">
.aurora-layout-content
  max-height: calc(100% - 65px)
  overflow-y: scroll
.layout
  width: 100%
  height: 100%
</style>
