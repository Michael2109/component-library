<script setup lang="ts">
import { computed } from 'vue';
import type { PropType } from 'vue';

import { useTheme } from '../../plugins/components-plugin';
import type { Theme } from '@/theme/theme';
import {
  getBackgroundColor,
  getHoverColor,
  calculateFontColor,
  getFontColor
} from '@/common/color-to-css-variable';
import type { Sizes } from '@/common/sizes';

type ButtonType = 'default' | 'text';

const props = defineProps({
  href: {
    type: String,
    require: false,
    default: undefined
  },
  size: {
    type: String as PropType<Sizes>,
    require: false,
    default: 'md'
  },
  variant: {
    type: String as PropType<'solid' | 'outlined' | 'text' | 'link'>,
    require: false,
    default: 'solid'
  },
  severity: {
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
    'aurora-button': true,
    'aurora-button-xlg': props.size === 'xlg',
    'aurora-button-lg': props.size === 'lg',
    'aurora-button-sm': props.size === 'sm',
    'aurora-button-xsm': props.size === 'xs',
    'aurora-button-solid': props.variant === 'solid',
    'aurora-button-outlined': props.variant === 'outlined',
    'aurora-button-text': props.variant === 'text',
    'aurora-button-link': props.variant === 'link'
  };
});

const backgroundColorCssVariable = computed(() => {
  return getBackgroundColor(props.severity);
});

const hoverColor = computed(() => {
  if (props.variant === 'text' || props.variant === 'outlined') {
    return getHoverColor(undefined);
  }
  return getHoverColor(props.severity);
});

const fontColor = computed(() => {
  if (props.variant === 'text') {
    return getFontColor(undefined);
  }
  return getFontColor(props.severity);
});

const theme: Theme = useTheme().global();

function onClick() {
  if (props.href) {
    window.location.href = props.href;
  }
  emits('click');
}
</script>

<template>
  <button :href="href" @click="onClick" :class="className">
    <div v-if="icon" :class="icon"></div>
    <slot name="leftIcon"></slot>
    <div v-if="loading && iconPosition === 'left'" class="aurora-button-icon">
      <div class="mdi mdi-loading aurora-button-loading" />
    </div>
    <slot name="prepend" />
    <slot />
    <slot name="append" />

    <div v-if="iconPosition === 'right'" class="aurora-button-icon">
      <div class="mdi mdi-loading button-loading" />
    </div>
    <slot name="rightIcon"></slot>
  </button>
</template>

<style scoped lang="sass">
.aurora-button
  display: flex
  justify-content: center
  background-color: v-bind('backgroundColorCssVariable')
  color: v-bind('fontColor')
  font-family: var(--button-font-family, var(--font-family))
  font-size: 16px
  font-weight: 600
  padding: 5px 12px 5px 12px
  border-radius: 4px
  border: none
  cursor: pointer
  animation-duration: 1s
  transition: background-color 0.3s ease

.aurora-button:hover
  background-color: v-bind("hoverColor")

.aurora-button-icon
  padding-left: 2px
  padding-right: 2px

// Loading
.aurora-button-loading
  animation: spin 1s linear infinite

@keyframes spin
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(360deg)

// Size
.aurora-button-xsm
  padding: 4px 8px 4px 8px
  font-size: 12px

.aurora-button-sm
  padding: 4px 10px 4px 10px
  font-size: 14px

.aurora-button-lg
  padding: 8px 14px 8px 14px
  font-size: 18px

.aurora-button-xlg
  padding: 10px 18px 10px 18px
  font-size: 20px

// Variant
.aurora-button-outlined
  border: 1px solid black
  color: var(--typographies-black)
  background-color: transparent

.aurora-button-text
  background-color: transparent
  border: none

.aurora-button-text:hover
  background-color: rgba(0, 0, 0, 0.05)

.aurora-button-link
  background: none !important
  border: none
  padding: 0 !important
  color: #8e8e8e
  cursor: pointer

.aurora-button-link:hover
  text-decoration: underline
</style>
