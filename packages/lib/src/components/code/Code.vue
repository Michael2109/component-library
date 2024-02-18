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
  <code class="code">
    <slot></slot>
  </code>
</template>

<style scoped lang="sass">
.code
  color: var(--color-black-text)
  background-color: var(--code-background-color)
  font-size: 16px
  display: inline-block
  padding-inline: 0.2em
  border-radius: 3px
</style>
