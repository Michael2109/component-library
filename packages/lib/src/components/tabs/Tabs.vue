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
        @click="selected = value"
      >
        {{ label }}
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
  position: relative
  padding: 4px
  border-top: 1px solid var(--colors-surface-300)
  z-index: 1

.tab-headers
  display: flex
  margin: 0 0 0 64px

.tab-header
  font-weight: 550
  color: var(--typographies-black)
  border-radius: 8px 8px 0 0
  display: inline-block
  border-bottom: none

  position: relative
  bottom: -1px
  z-index: 0
  padding: 12px
  cursor: pointer

.tab-header-active
  background-color: var(--colors-surface-50)
  border-top: 2px solid var(--colors-surface-300)
  border-left: 2px solid var(--colors-surface-300)
  border-right: 2px solid var(--colors-surface-300)
  z-index: 2
</style>
