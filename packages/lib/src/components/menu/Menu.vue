<script setup lang="ts">
import type { MenuItem } from './menu-item';
import type { PropType } from 'vue';

const emits = defineEmits(['change']);

const model = defineModel<string>();

const props = defineProps({
  items: {
    type: Object as PropType<Array<MenuItem>>,
    required: false,
    default: []
  }
});
</script>

<template>
  <ul class="menu">
    <li
      v-for="item in items"
      @click="item.command !== undefined ? item.command() : {}"
      :key="item.key"
    >
      <div :class="item.items ? 'group' : 'item'">
        {{ item.label }}
      </div>
      <Menu v-if="items" :items="item.items"></Menu>
    </li>
  </ul>
</template>

<style scoped lang="sass">
.menu
  list-style-type: none
  padding: 0
.group
  color: var(--colors-black-text)
  padding-top: 15px
  padding-bottom: 15px
  padding-left: 10px
  font-size: 16px
  font-weight: bold
  transition: background-color 0.3s
.item
  color: var(--colors-black-text)
  padding: 5px
  padding-left: 10px
  font-size: 16px
  transition: background-color 0.3s

.item:hover
  background-color: rgba(255, 255, 255, 0.1)

.item:active
  background-color: rgba(255, 255, 255, 0.2)



li:hover > ul
  display: block /* Show nested menus on parent hover */
</style>
