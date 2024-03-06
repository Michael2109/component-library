<script setup lang="ts">
const props = defineProps({});
</script>

<template>
  <code class="aurora-code">
    <slot></slot>
  </code>
</template>

<style scoped lang="sass">
.aurora-code
  background: var(--code-background-color)
  color: var(--typographies-black)
  font-size: 16px
  display: inline-block
  padding-inline: 0.2em
  border-radius: 3px
</style>
