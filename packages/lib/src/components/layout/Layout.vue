<script setup lang="ts">

import {defineModel, watch} from "vue";
import Button from "../button/Button.vue";

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
  <div class="layout">

      <slot name="header"/>

      <slot name="sidebar"/>
  </div>
</template>

<style scoped lang="sass">
@import "layout"
</style>