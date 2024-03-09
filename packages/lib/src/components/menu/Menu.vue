<script setup lang="ts">
import type { MenuItem } from './menu-item';
import { type PropType, watch } from 'vue';

const emits = defineEmits(['change']);

const model = defineModel<string>();

const props = defineProps({
  items: {
    type: Object as PropType<Array<MenuItem>>,
    required: false,
    default: []
  }
});

watch(
  () => model,
  (newValue) => {
    console.log('Selected key changed');
    console.log(newValue);
  }
);

function onItemSelected(item: MenuItem) {
  if (!item.items) {
    item.command !== undefined ? item.command() : {};
    model.value = item.key;
    console.log(model.value);
  }
}

function menuItemClass(item: MenuItem) {
  return {
    'aurora-menu-item': true,
    'aurora-menu-item-selected': model.value === item.key
  };
}
function menuItemContentClass(item: MenuItem) {
  return {
    'aurora-group': item.items,
    'aurora-menu-item-content': true
  };
}
</script>

<template>
  <ul class="aurora-menu">
    <li
      v-for="item in items"
      @click.stop="() => onItemSelected(item)"
      :key="item.key"
      :class="menuItemClass(item)"
    >
      <div class="aurora-menu-item-content-container">
        <div
          v-if="item.icon"
          class="aurora-menu-item-icon"
          :class="item.icon"
        ></div>
        <div :class="menuItemContentClass(item)">
          {{ item.label }}
        </div>
      </div>
      <Menu v-model="model" v-if="items" :items="item.items"></Menu>
    </li>
  </ul>
</template>

<style scoped lang="sass">
.aurora-menu
  list-style-type: none
  padding: 0
  background-color: var(--colors-surface-50)
.aurora-group
  text-transform: capitalize
  color: var(--typographies-black)
  padding-top: 15px
  padding-bottom: 15px
  padding-left: 10px
  font-size: 16px
  font-weight: bold
  transition: background-color 0.3s
.aurora-menu-item-content
  width: 100%
  color: var(--typographies-black)
  padding: 5px 5px 5px 10px
  font-size: 16px
  transition: background-color 0.0s
  cursor: pointer

.aurora-menu-item-content-container
  display: flex
  align-items: center
  width: 100%

.aurora-menu-item-icon
  margin-left: 8px

.aurora-menu-item-content-container:hover
  background-color: var(--colors-surface-200)

.aurora-menu-item-selected
  background-color: var(--colors-surface-300)
</style>
