<script setup lang="ts">
import type { PropType } from 'vue';
import { computed, watch } from 'vue';
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

const checkboxClassName = computed(() => {
  return {
    button: true,
    'aurora-checkbox': true,
    'aurora-checkbox-xlg': props.size === 'xlg',
    'aurora-checkbox-lg': props.size === 'lg',
    'aurora-checkbox-sm': props.size === 'sm',
    'aurora-checkbox-xsm': props.size === 'xs',
    'aurora-checkbox-disabled': props.disabled
  };
});

const checkboxIconClassName = computed(() => {
  return {
    'aurora-checkbox-icon': true,
    mdi: true,
    'mdi-check': true,
    'aurora-checkbox-icon-xlg': props.size === 'xlg',
    'aurora-checkbox-icon-lg': props.size === 'lg',
    'aurora-checkbox-icon-sm': props.size === 'sm',
    'aurora-checkbox-icon-xsm': props.size === 'xs'
  };
});
function onClick() {
  if (!props.disabled) {
    model.value = !model.value;
  }
}
</script>

<template>
  <div class="aurora-checkbox-container">
    <input
      class="aurora-checkbox-hidden"
      type="checkbox"
      v-model="model"
      :disabled="disabled"
    />
    <div :class="checkboxClassName" @click="onClick">
      <div v-if="model" :class="checkboxIconClassName"></div>
    </div>
    <div class="aurora-checkbox-label">
      <slot></slot>
    </div>
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

.aurora-checkbox-disabled
  border-color: #bdbdc7
  background-color: #e2e8f0
  color: #c6c6c6

.aurora-checkbox-container
  display: flex
  align-items: center
  justify-content: center

.aurora-checkbox-xsm
  padding: 6px

.aurora-checkbox-sm
  padding: 8px

.aurora-checkbox-lg
  padding: 12px

.aurora-checkbox-xlg
  padding: 14px


.aurora-checkbox-icon-xsm
  width: 4px
  height: 4px
  left: -10px
  top: -3px

.aurora-checkbox-icon-sm
  width: 6px
  height: 6px
  left: -11px
  top: 0

.aurora-checkbox-icon-lg
  width: 10px !important
  height: 10px
  left: -11px
  top: 0


.aurora-checkbox-icon-xlg
  padding: 14px

.aurora-checkbox-label
  padding-left: 5px
  color: var(--typographies-black)
</style>
