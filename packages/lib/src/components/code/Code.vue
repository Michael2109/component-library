<script setup lang="ts">
import { computed } from 'vue';
import {
  getBackgroundColor,
  getFontColor
} from '../../common/color-to-css-variable';

const props = defineProps({
  color: {
    type: String,
    required: false,
    default: 'gray'
  }
});

const backgroundColorCssVariable = computed(() => {
  return getBackgroundColor(props.color);
});

const fontColor = computed(() => {
  return getFontColor(props.color);
});
</script>

<template>
  <code class="aurora-code">
    <slot></slot>
  </code>
</template>

<style scoped lang="sass">
.aurora-code
  background: v-bind('backgroundColorCssVariable')
  color: v-bind(fontColor)
  font-size: 16px
  display: inline-block
  padding-inline: 0.2em
  border-radius: 3px
</style>
