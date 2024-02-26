<script setup lang="ts">
import { defineModel, watch } from 'vue';

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
  <div class="header">
    <slot name="left" />
    <div class="header-right">
      <slot name="right" />
    </div>
  </div>
</template>

<style scoped lang="sass">
.header
  display: flex
  flex-direction: row
  width: 100%
  height: 64px
  background-color: var(--colors-surface-50)
  border-bottom: var(--colors-surface-300)
  border-bottom-style: solid
  border-bottom-width: 1px

.header-right
  margin-left: auto
  display: flex
  align-items: center
  margin-right: 10px
</style>
