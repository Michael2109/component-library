<script setup lang="ts">
const props = defineProps({
  color: {
    type: String,
    required: false,
    default: undefined
  }
});
</script>

<template>
  <code>
    <slot></slot>
  </code>
</template>

<style scoped lang="sass">
code
  background-color: #EDF2F7
  font-size: 16px
  display: inline-block
  padding-inline: 0.2em
  border-radius: 3px
</style>
