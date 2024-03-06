<script setup lang="ts">
import { computed } from 'vue';
import {
  getBackgroundColor,
  getFontColor
} from '../../common/color-to-css-variable';

const model = defineModel<Boolean>();

const emits = defineEmits(['close']);

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: undefined
  },
  severity: {
    type: String,
    required: false,
    default: 'primary'
  },
  closeable: {
    type: Boolean,
    required: false,
    default: false
  }
});

const slots = defineSlots();

const backgroundColorCssVariable = computed(() => {
  return getBackgroundColor(props.severity);
});

const fontColor = computed(() => {
  return getFontColor(props.severity);
});
</script>

<template>
  <div class="chip">
    <div class="chip-content"><slot /></div>
    <div v-if="closeable" class="chip-close">
      <svg
        @click="emits('close')"
        class="chip-svg"
        focusable="false"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path
          d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<style scoped lang="sass">
.chip
  display: inline-flex
  flex-direction: row
  background-color: v-bind('backgroundColorCssVariable')
  color: v-bind('fontColor')
  border: none
  cursor: default
  height: 36px
  outline: none
  padding: 0
  font-size: 14px
  font-weight: bold
  white-space: nowrap
  align-items: center
  border-radius: 16px
  vertical-align: middle
  text-decoration: none
  justify-content: center

.chip-head
  display: flex
  position: relative
  overflow: hidden
  font-size: 1.25rem
  flex-shrink: 0
  align-items: center
  user-select: none
  border-radius: 50%
  justify-content: center
  width: 36px
  height: 36px
  font-size: 20px
  margin-right: -4px

.chip-content
  cursor: inherit
  display: flex
  align-items: center
  user-select: none
  white-space: nowrap
  padding-left: 12px
  padding-right: 12px

.chip-svg
  color: #999999
  cursor: pointer
  height: auto
  margin: 4px 4px 0 -8px
  fill: currentColor
  width: 1em
  height: 1em
  display: inline-block
  font-size: 24px
  transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms
  user-select: none
  flex-shrink: 0

.chip-svg:hover
  color: #666666
</style>
