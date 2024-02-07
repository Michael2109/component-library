<script setup lang="ts">

import {defineModel, watch} from "vue";

const model = defineModel<Boolean>()

const emits = defineEmits(["close"])

const props = defineProps({
label: {
  type: String,
  required: false,
  default: undefined
}
})

</script>

<template>
  <div class="date-picker">

  </div>

</template>

<style scoped lang="sass">
@import "date-picker"
</style>