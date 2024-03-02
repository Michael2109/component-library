<script setup lang="ts">
import VCodeBlock from '@wdns/vue-code-block';
import CodeBlock from '@/components/docs/usage/CodeBlock.vue';
import type { PropType } from 'vue';

export interface CodeInfo {
  label: string;
  code: string;
  lang: string;
}

defineProps({
  codes: {
    type: Object as PropType<Array<CodeInfo>>,
    required: true
  }
});
</script>

<template>
  <Tabs>
    <Tab
      v-for="codeInfo in codes"
      :key="codeInfo.label"
      :label="codeInfo.label"
      :value="codeInfo.label"
    ></Tab>
  </Tabs>
</template>

<style scoped lang="sass"></style>
