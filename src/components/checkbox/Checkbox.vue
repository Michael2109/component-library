<script setup lang="ts">

const emits = defineEmits(["click"])

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: undefined
  }
})
</script>

<template>
  <input type="checkbox">{{ label }}
</template>

<style scoped lang="sass">
@import "Checkbox"
</style>