<script setup lang="ts">

import {defineModel, watch} from "vue";

const model = defineModel<Boolean>()

const emits = defineEmits(["change"])

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: undefined
  }
})

watch(model, (enabled: Boolean) => {
  emits("change",enabled )
})
</script>

<template>
  <label class="switch">
    <input type="checkbox">
    <span class="slider"></span>
  </label>
</template>

<style scoped lang="sass">
@import "switch"
</style>