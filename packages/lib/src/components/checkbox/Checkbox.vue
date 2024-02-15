<script setup lang="ts">
import { defineModel, watch } from 'vue';

const model = defineModel<Boolean>();

const emits = defineEmits(['change']);

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: undefined
  }
});

watch(model, (enabled: any) => {
  emits('change', enabled);
});
</script>

<template>
  <div class="checkbox-container">
    <input type="checkbox" v-model="model" />
    <div class="checkbox-label"><slot></slot></div>
  </div>
</template>

<style scoped lang="sass">
.checkbox-container
  display: flex
  align-items: center
</style>
