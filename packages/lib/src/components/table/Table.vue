<script lang="ts" setup>
import { computed, ref, watch } from 'vue';
import type { Ref } from 'vue';
import Button from '../button/Button.vue';

const slots = defineSlots();

const props = defineProps({
  items: {
    type: String,
    required: true
  }
});

const tableHeaders = computed(() => {
  return slots.default().reduce((tabHeaders: Array<any>, child: any) => {
    tabHeaders.push(child.children.default());

    return tabHeaders;
  }, []);
});
</script>

<template>
  <slot></slot>
</template>

<style scoped lang="sass"></style>
