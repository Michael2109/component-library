<script setup lang="ts">
import type { MenuItem } from './menu-item';
import { type PropType, watch } from 'vue';

const emits = defineEmits(['change']);

const model = defineModel<string>();

const props = defineProps({
  selectedKey: {
    type: String,
    required: false,
    default: undefined
  },
  items: {
    type: Object as PropType<Array<MenuItem>>,
    required: false,
    default: []
  }
});

watch(
  () => props.selectedKey,
  (newValue) => {
    console.log('Selected key changed');
    console.log(newValue);
  }
);
</script>

<template>
  <ul class="aurora-menu">
    <li
      v-for="item in items"
      @click="item.command !== undefined ? item.command() : {}"
      :key="item.key"
      :class="
        selectedKey === item.key ? 'aurora-menu-item-selected' : undefined
      "
    >
      <div :class="item.items ? 'aurora-group' : 'aurora-item'">
        {{ item.label }}
      </div>
      <Menu :selected-key="selectedKey" v-if="items" :items="item.items"></Menu>
    </li>
  </ul>
</template>

<style scoped lang="sass">
.aurora-menu
  list-style-type: none
  padding: 0
.aurora-group
  text-transform: capitalize
  color: var(--typographies-black)
  padding-top: 15px
  padding-bottom: 15px
  padding-left: 10px
  font-size: 16px
  font-weight: bold
  transition: background-color 0.3s
.aurora-item
  border-radius: 5px
  color: var(--typographies-black)
  padding: 5px 5px 5px 10px
  font-size: 16px
  transition: background-color 0.0s
  cursor: pointer

.aurora-menu-item-selected
  background-color: var(--colors-surface-100)
  border-radius: 6px

.aurora-item:hover
  background-color: rgba(255, 255, 255, 0.1)

.aurora-item:active
  background-color: rgba(255, 255, 255, 0.2)
</style>
