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
  <div class="aurora-sidebar">
    <slot name="top" />
    <div class="sidebar-bottom">
      <slot name="bottom" />
    </div>
  </div>
</template>

<style scoped lang="sass">
.aurora-sidebar
  display: flex
  flex-direction: column
  border-right: var(--colors-surface-300)
  border-right-style: solid
  border-right-width: 1px
  width: 250px
  background-color: var(--colors-surface-50)
  top: 0
  left: 0
  height: 100%
  overflow-y: auto
  padding-top: 0

.sidebar-bottom
  margin-top: auto
</style>
