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
  }
});

const className = computed(() => {
  return {
    'input-xlg': props.size === 'xlg',
    'input-lg': props.size === 'lg',
    'input-sm': props.size === 'sm',
    'input-xsm': props.size === 'xs'
  };
});
</script>

<template>
  <div class="text-field">
    <input type="text" required :class="className" />
    ghdsiufhusdfio
  </div>
</template>

<style scoped lang="sass">
input
  width: 300px
</style>
