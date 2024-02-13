<script lang="ts" setup>
const slots = defineSlots();

const props = defineProps({
  key: {
    type: String,
    required: true
  },
  header: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div>{{ header }}</div>
</template>

<style scoped lang="sass"></style>
