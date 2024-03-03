<script setup lang="ts">
import { computed, watch } from 'vue';
import type { PropType } from 'vue';
import {
  getBackgroundColor,
  getBorderColor,
  getFontColor
} from '@/common/color-to-css-variable';
import type { Sizes } from '@/common/sizes';

const model = defineModel<Boolean>();

const emits = defineEmits(['change']);

const props = defineProps({
  size: {
    type: String as PropType<Sizes>,
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

const className = computed(() => {
  return {
    button: true,
    'aurora-checkbox-xlg': props.size === 'xlg',
    'aurora-checkbox-lg': props.size === 'lg',
    'aurora-checkbox-sm': props.size === 'sm',
    'aurora-checkbox-xsm': props.size === 'xs'
  };
});
</script>

<template>
  <div class="checkbox-container">
    <input
      class="aurora-checkbox-hidden"
      type="checkbox"
      v-model="model"
      :disabled="disabled"
    />
    <div class="aurora-checkbox" @click="model = !model">
      <div v-if="model" class="aurora-checkbox-icon mdi mdi-check"></div>
    </div>
    <div class="checkbox-label"><slot></slot></div>
  </div>
</template>

<style scoped lang="sass">
.aurora-checkbox-hidden
  display: none

.aurora-checkbox
  border: 1px solid var(--typographies-black)
  border-radius: 4px
  background-color: var(--typographies-white)

  padding: 8px

  position: relative

.aurora-checkbox-icon
  color: var(--typographies-black)
  text-align: center
  position: absolute
  top: 50%
  left: 0
  right: 0
  margin: auto
  transform: translateY(-50%)

.checkbox-container
  display: flex
  align-items: center

.checkbox-label
  color: var(--typographies-black)
</style>
