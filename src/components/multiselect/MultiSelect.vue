<script setup lang="ts">

import {computed, defineModel, ref, watch} from "vue";

const model = defineModel<Boolean>()

const emits = defineEmits(["change"])

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: undefined
  }
})

const visible = ref(false)

watch(model, (enabled: Boolean) => {
  emits("change",enabled )
})

const className = computed(() => {
  console.log({
    "dropdown-check-list": true,
    visible: visible
  })
  return {
    "dropdown-check-list": true,
    visible: visible.value
  }
})

</script>

<template>
  <div id="list1" :class="className" tabindex="100">
    <span class="anchor" @click="visible = !visible">Select Fruits</span>
    <ul class="items">
      <li><input type="checkbox" />Apple </li>
      <li><input type="checkbox" />Orange</li>
      <li><input type="checkbox" />Grapes </li>
      <li><input type="checkbox" />Berry </li>
      <li><input type="checkbox" />Mango </li>
      <li><input type="checkbox" />Banana </li>
      <li><input type="checkbox" />Tomato</li>
    </ul>
  </div>
</template>

<style scoped lang="sass">
@import "multi-select"
</style>