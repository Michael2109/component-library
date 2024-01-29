<script setup lang="ts">

import {computed, defineModel, PropType, ref, watch} from "vue";

const model = defineModel<Array<string>>()

const emits = defineEmits(["change"])

const props = defineProps({
  label: {
    type: String,
    required: false,
    default: undefined
  },
  id: {
    type: String,
    required: false,
    default: undefined
  },
  name: {
    type: String,
    required: false,
    default: undefined
  },
  options: {
    type: Object as PropType<Array<AutoCompleteOption>>,
    required: false,
    default: []
  }
})

const visible = ref(false)

const className = computed(() => {
  return {
    "dropdown-check-list": true,
    visible: visible.value
  }
})

function onOptionChange(event: any){
  console.log(event.target)
  //model.push()
}

</script>

<template>
  <div id="list1" :class="className" tabindex="100">
    <span class="anchor" @click="visible = !visible">Select Fruits</span>
    <ul class="items">
      <li v-for="option in options" :key="option.value"><input type="checkbox" @change="onOptionChange" />{{ option.title }} </li>
    </ul>
  </div>
</template>

<style scoped lang="sass">
@import "multi-select"
</style>