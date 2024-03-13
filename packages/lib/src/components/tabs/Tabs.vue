<script lang="ts" setup>
import { computed, type PropType, ref, watch } from 'vue';
import type { Ref } from 'vue';
import Button from '../button/Button.vue';

const slots = defineSlots();

const props = defineProps({
  selectedKey: {
    type: String,
    required: false,
    default: undefined
  },
  variant: {
    type: Object as PropType<'outlined'>,
    required: false,
    default: undefined
  }
});

const selected: Ref<string | undefined> = ref(props.selectedKey);

watch(
  () => props.selectedKey,
  (newValue: string | undefined) => {
    selected.value = newValue;
  }
);

const tabHeaders = computed(() => {
  return slots.default().reduce((tabHeaders: Array<any>, child: any) => {
    tabHeaders.push({
      ...child.props,
      ...{ active: child.props.value === selected.value }
    });

    return tabHeaders;
  }, []);
});

const tabs = computed(() => {
  return slots.default().reduce((tabs: Array<any>, child: any) => {
    if (child.props.value === selected.value) {
      if (child.children) {
        tabs.push(child.children.default()[0]);
      }
    }

    return tabs;
  }, []);
});

function tabHeaderClasses(active: boolean) {
  return {
    'tab-header': true,
    'tab-header-active': active
  };
}

const tabHeaderButtonClass = computed(() => {
  return {
    'tab-header-button': true
  };
});
</script>

<template>
  <div class="tabs-container">
    <div class="tab-headers">
      <div
        v-for="{ label, value, active } in tabHeaders"
        :class="tabHeaderClasses(active)"
      >
        <Button
          @click="selected = value"
          variant="text"
          :class="tabHeaderButtonClass"
        >
          {{ label }}</Button
        >
      </div>
    </div>
    <div class="aurora-tab-header-border"></div>
    <template v-for="(tab, index) of tabs" :key="tab">
      <div class="aurora-tab-content">
        <component v-if="tab" :is="tab"></component>
      </div>
    </template>
  </div>
</template>

<style scoped lang="sass">

.tabs-container
  position: relative

.aurora-tab-content
  background-color: var(--colors-surface-50)
  //border-top: solid rgba(38, 38, 38, 0.2) 1px

.tab-headers
  display: flex
  margin-bottom: 1px

.aurora-tab-header-border
  position: absolute
  width: 100%
  bottom: 0
  left: 0
  border-bottom: 1px solid #ccc /* Add border along the bottom */

.tab-header
  font-weight: 550
  color: var(--typographies-black)
  border-radius: 5px 5px 0 0
  outline: none
  background-color: #f1f1f1
  cursor: pointer
  margin-right: -1px /* compensate for the border width */


.tab-header-active
  background-color: var(--colors-surface-50)
</style>
