<script setup lang="ts">
import {computed} from "vue";
import type {PropType} from 'vue';

const props = defineProps({
  header: {
    type: String,
    require: false,
  },

  fillVariant: {
    type: String,
    required: false
  },

});

const fillVariantClass = computed(() => {
  if (props.fillVariant === "filled") {
    return "box-filled"
  } else (props.fillVariant === "outlined")
  {
    return "box-border"
  }

})


</script>

<template>

  <div :class="fillVariantClass">

    <slot name="header"><h1 class="header">{{ header }}</h1></slot>

    <div class="paragraph-border">

      <div class="aurora-panel-content">
        <slot>No content</slot>
      </div>

    </div>

  </div>


</template>

<style scoped lang="sass">

.box-border
  border-radius: 10px
  border: 1px solid darkgray

.box-filled
  border-radius: 10px
  background: #8EEEC5

.header
  padding: 10px 10px 5px 10px
  font-size: 20px
  font-weight: bold
  margin: 0px

.aurora-panel-content
  padding: 5px 10px 10px 10px
  background: #cccccc
  border-radius: 10px

.paragraph-border
  padding: 10px 10px 10px 10px
  background: transparent

</style>