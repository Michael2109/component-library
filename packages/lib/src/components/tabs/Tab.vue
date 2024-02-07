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
})

</script>

<template>
  <template >Other</template>
  <div class="tab-header">{{label}}</div>
<slot></slot>
</template>

<style scoped lang="sass">

</style>