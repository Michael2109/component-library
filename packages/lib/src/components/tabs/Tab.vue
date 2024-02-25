<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: false,
    default: undefined
  },
  key: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="tab-header">{{ label }}</div>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped lang="sass"></style>
