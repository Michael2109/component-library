<script setup lang="ts">
import SizesDoc from '@/doc/button/SizesDoc.vue';
import VariantsDoc from '@/doc/button/VariantsDoc.vue';
import ColorsDoc from '@/doc/button/ColorsDoc.vue';
import IconsDoc from '@/doc/button/IconsDoc.vue';
import ComponentView from '@/components/docs/ComponentView.vue';
import Props from '@/doc/button/api/Props.vue';
import BasicDoc from '@/doc/table/BasicDoc.vue';
</script>

<template>
  <ComponentView title="Table" description="Table description.">
    <template #usage>
      <BasicDoc></BasicDoc>
    </template>

    <template #api><Props></Props> </template>
  </ComponentView>
</template>

<style scoped lang="sass"></style>
