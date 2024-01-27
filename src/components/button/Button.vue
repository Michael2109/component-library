<script setup lang="ts">

import {computed, PropType} from "vue";

type ButtonType = "primary" |  "default" | "text"

const props = defineProps({
  type: {
    type: Object as PropType<ButtonType>,
    require: false,
    default: "default"
  }
})

const emits = defineEmits(["click"])

const className = computed(() => {
  return {
    'button-primary': (props.type === "primary"),
    'button-text': props.type === "text"
  }
})
</script>

<template>
  <button @click="emits('click')" :class="  className">
    <slot name="prepend"/>
    <slot/>
    <slot name="append"/>
  </button>
</template>

<style scoped lang="sass">
@import "button"
</style>