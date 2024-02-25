<script setup lang="ts">
import { defineModel, watch } from 'vue';
import { PropType } from 'vue/dist/vue';

const model = defineModel<Boolean>();

const emits = defineEmits(['change']);

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: undefined
  },
  color: {
    type: String,
    required: false,
    default: undefined
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xlg'>,
    require: false,
    default: 'md'
  },
  disabled: {
    type: Boolean,
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
    <input type="checkbox" v-model="model" :disabled="disabled" />
    <div class="checkbox-label"><slot></slot></div>
  </div>
</template>

<style scoped lang="sass">
.checkbox-container
  display: flex
  align-items: center

.checkbox-label
  color: var(--color-black-text)
</style>
