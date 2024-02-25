<script setup lang="ts">
import { computed, watch } from 'vue';
import type { PropType } from 'vue';
import {
  getBackgroundColor,
  getFontColor
} from '../../common/color-to-css-variable';

const model = defineModel<Boolean>();

const emits = defineEmits(['change']);

const props = defineProps({
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

const backgroundColorCssVariable = computed(() => {
  return getBackgroundColor(props.color);
});

const fontColor = computed(() => {
  return getFontColor(props.color);
});
</script>

<template>
  <div class="checkbox-container">
    <input
      class="aurora-checkbox"
      type="checkbox"
      v-model="model"
      :disabled="disabled"
    />
    <div class="checkbox-label"><slot></slot></div>
  </div>
</template>

<style scoped lang="sass">
.aurora-checkbox
  background-color: v-bind('backgroundColorCssVariable')
  color: v-bind('fontColor')
.checkbox-container
  display: flex
  align-items: center

.checkbox-label
  color: var(--color-black-text)
</style>
