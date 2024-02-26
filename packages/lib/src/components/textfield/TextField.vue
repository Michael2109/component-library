<script setup lang="ts">
import {computed} from 'vue';
import type {PropType} from 'vue';


const model = defineModel<string>();

const emits = defineEmits(['click']);

const props = defineProps({
  size: {
    type: String as PropType<'xs' | 'sm' | 'md' | 'lg' | 'xlg'>,
    require: false,
    default: 'md'
  },
  label: {
    type: String,
    required: false,
    default: undefined
  },
  placeholder: {
    type: String,
    required: false,
    default: undefined
  },
  backgroundColour: {
    type: String,
    required: false,
    default: undefined
  },
  variant: {
    type: String,
    required: false
  }
});

const variantClass = computed(()=> {
  if (props.variant==="filled") {
    return "input-filled"
  }
  else if (props.variant==="outlined") {
    return "input-outlined"
  }

  else {
    return ""
  }
})

const sizeClass = computed(()=> {
  if (props.size==="xs") {
    return "input-xs"
  }
  else if (props.size==="md") {
    return "input-md"
  }

  else if (props.size==="lg") {
    return "input-lg"
  }

  else if (props.size==="xlg") {
    return "input-xlg"
  }

  else {
    return ""
  }



})


</script>

<template>

    <slot name="left-icon"></slot>

  <input type="text" :class="variantClass +' '+ sizeClass"/>

  <slot class="icon" name="right-icon"></slot>

</template>

<style scoped lang="sass">

.icon
  font-size: 100px

.input-xlg
  width: 475px
  border-radius: 25px
  padding: 25px
  font-size: 60px

.input-lg
  width: 400px
  border-radius: 20px
  padding: 20px
  font-size: 50px

.input-md
  width: 325px
  border-radius: 15px
  padding: 15px
  font-size: 30px

.input-sm
  width: 250px
  border-radius: 10px
  padding: 10px
  font-size: 20px

.input-xs
  width: 175px
  border-radius: 5px
  padding: 5px
  font-size: 10px

.input-filled
  background-color: #dcdcdc
  border: 1px

.input-outlined
  background-color: transparent
  border: 1px solid #1a1a1a

input
  width: 173px
  border-radius: 10px
  padding: 10px

</style>
