<script setup lang="ts">
import SizesDoc from '@/components/docs/components/button/SizesDoc.vue';
import VariantsDoc from '@/components/docs/components/button/VariantsDoc.vue';
import ColorsDoc from '@/components/docs/components/button/ColorsDoc.vue';
import IconsDoc from '@/components/docs/components/button/IconsDoc.vue';
import ComponentDoc from '@/components/docs/ComponentDoc.vue';
import Props from '@/components/docs/components/button/api/Props.vue';
import BasicDoc from '@/components/docs/components/table/BasicDoc.vue';
</script>

<template>
  <ComponentDoc title="Table" description="Table description.">
    <template #usage>
      <BasicDoc></BasicDoc>
    </template>

    <template #api><Props></Props> </template>
  </ComponentDoc>
</template>

<style scoped lang="sass"></style>
