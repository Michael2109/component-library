<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';

const model = defineModel<string>();

const emits = defineEmits(['click']);

const props = defineProps({
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xlg'>,
    require: false,
    default: 'md'
  },
  label: {
    type: String,
    required: false,
    default: undefined
  },
  placeholder: {
    type: String,
    required: false,
    default: undefined
  },
  backgroundColour: {
    type: String,
    required: false,
    default: undefined
  },
  variant: {
    type: String,
    required: false
  },
  prefix: {
    type: String,
    required: false,
    default: undefined
  },
  postfix: {
    type: String,
    required: false,
    default: undefined
  }
});

const inputClass = computed(() => {
  return {
    'aurora-text-field': true,
    'aurora-text-field-filled': props.variant === 'filled',
    'aurora-text-field-outlined': props.variant === 'outlined',
    'aurora-text-field-xs': props.size === 'xs',
    'aurora-text-field-md': props.size === 'md',
    'aurora-text-field-lg': props.size === 'lg',
    'aurora-text-field-xlg': props.size === 'xlg',
    'aurora-text-field-include-prefix': props.prefix
  };
});
</script>

<template>
  <div class="aurora-text-field-prefix">
    <slot name="prefix"><div :class="prefix"></div></slot>
  </div>
  <input :placeholder="placeholder" type="text" :class="inputClass" />

  <div class="aurora-text-field-postfix">
    <slot name="postfix"><div :class="postfix"></div></slot>
  </div>
</template>

<style scoped lang="sass">

.aurora-text-field
  width: 150px
  border-radius: 6px
  padding: 10px

.icon
  font-size: 100px

.aurora-text-field-xlg
  width: 300px
  border-radius: 10px
  padding: 6px
  font-size: 20px

.aurora-text-field-lg
  width: 400px
  border-radius: 20px
  padding: 20px
  font-size: 50px

.aurora-text-field-md
  padding: 5px
  font-size: 14px

.aurora-text-field-sm
  width: 250px
  border-radius: 10px
  padding: 10px
  font-size: 20px

.aurora-text-field-xs
  width: 175px
  border-radius: 5px
  padding: 5px
  font-size: 10px

.aurora-text-field-filled
  background-color: #dcdcdc
  border: 1px

.aurora-text-field-outlined
  background-color: transparent
  border: 1px solid #1a1a1a

.aurora-text-field-include-prefix
  padding-left: 28px

.aurora-text-field-prefix
  position: absolute
  padding-left: 10px

.aurora-text-field-postfix
  position: absolute
  right: 10px
  padding-left: 10px
</style>
