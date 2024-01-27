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
  <div class="checkbox-container">
  <input type="checkbox" v-model="model"><div class="components-checkbox-label">{{ label }}</div>
  </div>
</template>

<style scoped lang="sass">
@import "checkbox"
</style>