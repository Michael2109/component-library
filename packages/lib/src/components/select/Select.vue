<script setup lang="ts">

import {defineModel, PropType, watch} from "vue";

const model = defineModel<Boolean>()

const emits = defineEmits(["change"])

const props = defineProps({
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

watch(() => model, (enabled: any) => {
  emits("change",enabled )
})
</script>

<template>
  <div class="select-container">
    <select :id="id" :name="name" v-model="model">
      <option v-for="option in options" :key="option.value" :value="option.value">{{ option.title }}</option>
    </select>
  </div>
</template>

<style scoped lang="sass">
@import "select"
</style>