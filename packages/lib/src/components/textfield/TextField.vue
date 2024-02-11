<script setup lang="ts">
import { computed, defineModel } from 'vue';
import type { PropType } from 'vue';

const model = defineModel<string>();

const emits = defineEmits(['click']);

const text = computed(() => model.value);

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
    input: true,
    'input-xlg': props.size === 'xlg',
    'input-lg': props.size === 'lg',
    'input-sm': props.size === 'sm',
    'input-xsm': props.size === 'xs'
  };
});

const padding = computed(() => {
  switch (props.size) {
    case 'xs':
      return '4px';
    case 'sm':
      return '7px';
    case 'md':
      return '10px';
    case 'lg':
      return '13px';
    case 'xlg':
      return '16px';
  }
});
</script>

<template>
  <div class="text-field">
    <input type="text" required :class="className" />

    <label>Username</label>
  </div>
</template>

<style scoped lang="sass">
.text-field
  position: relative
  margin: 40px 0 20px

input
  font-size: 18px
  padding: v-bind(padding)
  display: block
  width: 300px
  background-color: var(--input-background-color)
  border-color: var(--input-border-color)
  border-radius: 6px
  box-sizing: border-box
  border-width: 1px
  border-color: #1a1a1a
  outline: none
  font-family: var(--input-font-family, --font-family) sans-serif
  font-size: var(--input-font-size, --font-size)
  width: 300px

  &:focus
    outline: none

label
  color: #999
  font-size: 18px
  font-weight: normal
  position: absolute
  pointer-events: none
  left: 5px
  top: v-bind(padding)
  transition: 0.2s ease all
  -moz-transition: 0.2s ease all
  -webkit-transition: 0.2s ease all

input
  &:focus ~ label, &:valid ~ label
    top: -16px
    font-size: 14px
    color: #4285f4

.bar
  position: relative
  display: block
  width: 315px

  &:before, &:after
    content: ''
    height: 2px
    width: 0
    bottom: 1px
    position: absolute
    background: #4285f4
    transition: 0.2s ease all
    -moz-transition: 0.2s ease all
    -webkit-transition: 0.2s ease all

  &:before
    left: 50%

  &:after
    right: 50%

input:focus ~ .bar
  &:before, &:after
    width: 50%

.highlight
  position: absolute
  height: 60%
  width: 100px
  top: 25%
  left: 0
  pointer-events: none
  opacity: 0.5

input:focus ~ .highlight
  -webkit-animation: inputHighlighter 0.3s ease
  -moz-animation: inputHighlighter 0.3s ease
  animation: inputHighlighter 0.3s ease

/* animations
@-webkit-keyframes inputHighlighter
  from
    background: #4285f4

  to
    width: 0
    background: transparent

@-moz-keyframes inputHighlighter
  from
    background: #4285f4

  to
    width: 0
    background: transparent

@keyframes inputHighlighter
  from
    background: #4285f4

  to
    width: 0
    background: transparent


.input:focus
  outline: none
</style>
