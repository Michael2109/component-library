<script setup lang="ts">

import {defineModel, watch} from "vue";

const model = defineModel<Boolean>()


const props = defineProps({
  id: {
    type: String,
    required: false,
    default: undefined
  },
})

</script>

<template>
  <div class="header">
    <slot name="left"/>
    <div class="header-right">
    <slot name="right"/></div>
  </div>
</template>

<style scoped lang="sass">
@import "header"
</style>