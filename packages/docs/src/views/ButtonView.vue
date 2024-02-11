<script setup lang="ts">
import SizesDoc from '@/doc/button/SizesDoc.vue';
import VariantsDoc from '@/doc/button/VariantsDoc.vue';
import ColorsDoc from '@/doc/button/ColorsDoc.vue';
import IconsDoc from '@/doc/button/IconsDoc.vue';
import ComponentView from '@/components/docs/ComponentView.vue';
import Props from '@/doc/button/api/Props.vue';
</script>

<template>
  <ComponentView
    title="Button"
    description="Button is an extension to standard input element with icons and theming."
  >
    <template #usage>
      <SizesDoc></SizesDoc>
      <VariantsDoc></VariantsDoc>
      <ColorsDoc></ColorsDoc>
      <IconsDoc></IconsDoc>
    </template>

    <template #api><Props></Props> </template>
  </ComponentView>
</template>

<style scoped lang="sass"></style>
