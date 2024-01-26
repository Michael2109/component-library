<script setup lang="ts">

const emits = defineEmits(["click"])
</script>

<template>
<button @click="emits('click')">
  <slot name="prepend"/>
  <slot/>
    <slot name="append"/>
</button>
</template>

<style scoped lang="sass">
@import "Button"
</style>