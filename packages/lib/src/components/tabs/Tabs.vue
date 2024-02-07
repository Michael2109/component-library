<script lang="ts" setup>

import {computed} from "vue";
import Button from "../button/Button.vue";

const slots = defineSlots()

const props = defineProps({
  selectedKey: {
    type: String,
    required: true
  }
})

const tabHeaders = computed(() => {
  return slots.default().reduce((tabHeaders, child) => {

    console.log(child)
    tabHeaders.push(child.props.key);


    return tabHeaders;
  }, []);
})

const tabs = computed(() => {
  return slots.default().reduce((tabs, child) => {

    if (child.props.key === props.selectedKey) {
      tabs.push(child.children.default()[0]);
    }


    return tabs;
  }, []);
})
</script>

<template>
  <div>
    <div class="tab-headers">
      <Button v-for="tabHeader in tabHeaders" @click="selectedKey = tabHeader" variant="text"> {{ tabHeader }}</Button>
    </div>
    <template v-for="(tab, index) of tabs" :key="tab">
      <component :is="tab"></component>
    </template>
  </div>
</template>

<style scoped lang="sass">
.tab-headers
  display: flex
</style>