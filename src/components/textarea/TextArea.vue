<script setup lang="ts">
import {defineModel} from "vue";

const model = defineModel<string>()

const props = defineProps({
  id: {
    type: String,
    required: false
  },
  name: {
    type: String,
    required: false
  },
  rows: {
    type: Number,
    required: false,
    default: 5
  },
  cols: {
    type: Number,
    required: false,
    default: 5
  },
})
</script>

<template>
  <textarea :id="id" :name="name" :rows="rows" :cols="cols" v-model="model"></textarea>
</template>

<style scoped lang="sass">
@import "text-area"
</style>