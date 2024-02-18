<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';

import { useTheme } from '../../plugins/components-plugin';
import type { Theme } from '@/theme/theme';
import {
  getBackgroundColor,
  calculateFontColor,
  getFontColor
} from '../../common/color-to-css-variable';

type ButtonType = 'default' | 'text';

const props = defineProps({
  type: {
    type: String as PropType<ButtonType>,
    require: false,
    default: 'default'
  },
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xlg'>,
    require: false,
    default: 'md'
  },
  variant: {
    type: String as PropType<'solid' | 'outlined' | 'text' | 'link'>,
    require: false,
    default: 'solid'
  },
  color: {
    type: String,
    require: false,
    default: 'primary'
  },
  disabled: {
    type: Boolean,
    require: false,
    default: false
  },
  loading: {
    type: Boolean,
    require: false,
    default: false
  },
  icon: {
    type: String,
    require: false,
    default: undefined
  },
  iconPosition: {
    type: String as PropType<'left' | 'right'>,
    require: false,
    default: 'left'
  }
});

const emits = defineEmits(['click']);

const className = computed(() => {
  return {
    button: true,
    'button-xlg': props.size === 'xlg',
    'button-lg': props.size === 'lg',
    'button-sm': props.size === 'sm',
    'button-xsm': props.size === 'xs',
    'button-solid': props.variant === 'solid',
    'button-outlined': props.variant === 'outlined',
    'button-text': props.variant === 'text',
    'button-link': props.variant === 'link'
  };
});

const backgroundColorCssVariable = computed(() => {
  return getBackgroundColor(props.color);
});

const fontColor = computed(() => {
  if (props.variant === 'text') {
    return getFontColor(undefined);
  }
  return getFontColor(props.color);
});

const theme: Theme = useTheme().global();
</script>

<template>
  <button @click="emits('click')" :class="className">
    <slot name="leftIcon"></slot>
    <div v-if="loading && iconPosition === 'left'" class="button-icon">
      <div class="mdi mdi-loading button-loading" />
    </div>
    <slot name="prepend" />
    <slot />
    <slot name="append" />

    <div v-if="iconPosition === 'right'" class="button-icon">
      <div class="mdi mdi-loading button-loading" />
    </div>
    <slot name="rightIcon"></slot>
  </button>
</template>

<style scoped lang="sass">
.button
  display: flex
  justify-content: center
  background-color: v-bind('backgroundColorCssVariable')
  color: v-bind('fontColor')
  font-family: var(--button-font-family, var(--font-family))
  font-size: var(--input-font-size, --font-size)
  font-weight: 600
  padding: 12px
  border-radius: 10px
  border: none
  cursor: pointer
  animation-duration: 1s
  transition: background-color 0.3s ease

.button:hover
  background-color: #8df7ca

.button-primary
  background-color: #8EEEC5

.button-primary:hover
  background-color: #92f5cb

.button-icon
  padding-left: 2px
  padding-right: 2px

// Loading
.button-loading
  animation: spin 1s linear infinite

@keyframes spin
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)

// Size
.button-xsm
  padding: 5px

.button-sm
  padding: 8px

.button-lg
  padding: 16px

.button-xlg
  padding: 18px

// Variant
.button-outlined
  border: 1px solid black
  background-color: white

.button-text
  background-color: transparent
  border: none

.button-text:hover
  background-color: rgba(0, 0, 0, 0.05)

.button-link
  background: none !important
  border: none
  padding: 0 !important
  color: #8e8e8e
  cursor: pointer

.button-link:hover
  text-decoration: underline
</style>
