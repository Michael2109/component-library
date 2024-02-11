<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import type { Ref } from 'vue';
import Button from '../button/Button.vue';

const slots = defineSlots();

const props = defineProps({
  selectedKey: {
    type: String,
    required: true
  }
});

const selected: Ref<string | undefined> = ref(props.selectedKey);

watch(
  () => props.selectedKey,
  (newValue: string) => {
    selected.value = newValue;
  }
);

const tabHeaders = computed(() => {
  return slots.default().reduce((tabHeaders: Array<any>, child: any) => {
    tabHeaders.push(child.props);

    return tabHeaders;
  }, []);
});

const tabs = computed(() => {
  return slots.default().reduce((tabs: Array<any>, child: any) => {
    if (child.props.key === selected.value) {
      if (child.children) {
        tabs.push(child.children.default()[0]);
      }
    }

    return tabs;
  }, []);
});
</script>

<template>
  <div>
    <div class="tab-headers">
      <Button
        v-for="{ label, key } in tabHeaders"
        @click="selected = key"
        variant="text"
      >
        {{ label }}</Button
      >
    </div>
    <template v-for="(tab, index) of tabs" :key="tab">
      <component v-if="tab" :is="tab"></component>
    </template>
  </div>
</template>

<style scoped lang="sass">
.tab-headers
  display: flex
</style>
