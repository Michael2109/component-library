<script setup lang="ts">
import ComponentDoc from '@/components/docs/ComponentDoc.vue';
import Props from '@/components/docs/components/checkbox/api/Props.vue';
import BasicDoc from '@/components/docs/components/checkbox/BasicDoc.vue';
import SizesDoc from '@/components/docs/components/checkbox/SizesDoc.vue';
import DisabledDoc from '@/components/docs/components/checkbox/DisabledDoc.vue';
</script>

<template>
  <ComponentDoc
    title="Checkbox"
    description="Button is an extension to standard input element with icons and theming."
  >
    <template #usage>
      <BasicDoc></BasicDoc>
      <SizesDoc></SizesDoc>
      <DisabledDoc></DisabledDoc>
    </template>

    <template #api>
      <Props></Props>
    </template>
  </ComponentDoc>
</template>

<style scoped lang="sass"></style>
