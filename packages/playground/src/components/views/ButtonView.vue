<script setup lang="ts">
import ComponentHeader from '@/components/docs/ComponentHeader.vue';
import SizesDoc from '@/components/docs/button/SizesDoc.vue';
import VariantsDoc from '@/components/docs/button/VariantsDoc.vue';
import ColorsDoc from '@/components/docs/button/ColorsDoc.vue';
import IconsDoc from '@/components/docs/button/IconsDoc.vue';
</script>

<template>
  <ComponentHeader
    title="Button"
    description="Button is an extension to standard input element with icons and theming."
  ></ComponentHeader>
  <SizesDoc></SizesDoc>
  <VariantsDoc></VariantsDoc>
  <ColorsDoc></ColorsDoc>
  <IconsDoc></IconsDoc>
</template>

<style scoped lang="sass"></style>
