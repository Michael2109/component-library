<script setup lang="ts">
import type { MenuItem } from './menu-item';

const emits = defineEmits(['change']);

const model = defineModel<Array<MenuItem>>();
</script>

<template>
  <ul class="menu">
    <li v-for="item in model" @click="item.command()" :key="item.key">
      {{ item.label }}
    </li>
  </ul>
</template>

<style scoped lang="sass">
@import "menu"
</style>
