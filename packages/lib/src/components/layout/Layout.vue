<script setup lang="ts">
import { computed, defineModel, useSlots } from 'vue';

const model = defineModel<Boolean>();

const props = defineProps({
  id: {
    type: String,
    required: false,
    default: undefined
  }
});

const slots = useSlots();

const maxHeight = computed(() => {
  if (!!slots['header']) {
    console.log(slots);
    return 'calc(100% - 65px)';
  }
  return '100%';
});
</script>

<template>
  <div class="layout">
    <slot name="header" />

    <div class="layout-bottom">
      <slot name="sidebar" />

      <div class="aurora-layout-content">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.layout
  height: 100%
  overflow: hidden
.aurora-layout-content
  max-height: 100%
  width: 100%
  overflow-y: auto
.layout-bottom
  display: flex
  width: 100%
  height: v-bind(maxHeight)
</style>
