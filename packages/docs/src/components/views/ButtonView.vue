<script setup lang="ts">
import SizesDoc from '@/components/docs/components/button/SizesDoc.vue';
import VariantsDoc from '@/components/docs/components/button/VariantsDoc.vue';
import SeverityDoc from '@/components/docs/components/button/ColorsDoc.vue';
import IconsDoc from '@/components/docs/components/button/IconsDoc.vue';
import ComponentDoc from '@/components/docs/ComponentDoc.vue';
import Props from '@/components/docs/components/button/api/Props.vue';
import BasicDoc from '@/components/docs/components/button/BasicDoc.vue';
</script>

<template>
  <ComponentDoc
    title="Button"
    description="Button is an extension to standard input element with icons and theming."
  >
    <template #usage>
      <BasicDoc></BasicDoc>
      <SizesDoc></SizesDoc>
      <VariantsDoc></VariantsDoc>
      <ColorsDoc></ColorsDoc>
      <IconsDoc></IconsDoc>
    </template>

    <template #api><Props></Props> </template>
  </ComponentDoc>
</template>

<style scoped lang="sass"></style>
