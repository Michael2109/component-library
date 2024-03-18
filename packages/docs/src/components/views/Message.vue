<script setup lang="ts">
import {computed} from "vue";
import type {PropType} from 'vue';

const props = defineProps({
  severity: {
    type: String as PropType<'success' | 'warning' | 'error' | 'info' | 'secondary' | 'contrast'>,
    require: true,
  }

  });

const severityClass = computed(()=> {
  if (props.severity==="success") {
    return "input-success"
  }
  else if (props.severity==="warning") {
    return "input-warning"
  }

  else if (props.severity==="error") {
    return "input-error"
  }

  else if (props.severity==="info") {
    return "input-info"
  }

  else if (props.severity==="secondary") {
    return "input-secondary"
  }

  else if (props.severity==="contrast") {
    return "input-contrast"
  }

  else {
    return ""
  }


})


</script>

<template>



  <div class="style" :class="severityClass">

        <slot></slot>

  </div>

</template>

<style scoped lang="sass">

.style
  border-radius: 10px
  padding: 5px 5px 5px 5px

.input-success
  background: green
  border: 1px solid black

.input-warning
  background: yellow
  border: 1px solid black


.input-error
  background: red
  border: 1px solid black


.input-info
  background: deepskyblue
  border: 1px solid black


.input-secondary
  background: grey
  border: 1px solid black


