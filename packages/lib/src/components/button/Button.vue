<script setup lang="ts">
import type { PropType } from 'vue';
import { computed } from 'vue';

import { useTheme } from '../../plugins/components-plugin';
import type { Theme } from '@/theme/theme';
import {
  getBackgroundColor,
  getFontColor,
  getHoverColor
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
    'aurora-button-link': props.variant === 'link',
    'aurora-button-primary': props.severity === 'primary',
    'aurora-button-secondary': props.severity === 'secondary',
    'aurora-button-success': props.severity === 'success',
    'aurora-button-info': props.severity === 'info',
    'aurora-button-warning': props.severity === 'warning',
    'aurora-button-danger': props.severity === 'danger'
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

<style scoped lang="sass"></style>
