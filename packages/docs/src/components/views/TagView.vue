<script setup lang="ts">
import ComponentDoc from '@/components/docs/ComponentDoc.vue';
import Props from '@/components/docs/components/button/api/Props.vue';
import BasicDoc from '@/components/docs/components/tag/BasicDoc.vue';
import SeverityDoc from '@/components/docs/components/tag/ColorsDoc.vue';
import CloseableDoc from '@/components/docs/components/tag/CloseableDoc.vue';
</script>

<template>
  <ComponentDoc
    title="Tag"
    description="Button is an extension to standard input element with icons and theming."
  >
    <template #usage>
      <BasicDoc></BasicDoc>
      <SeverityDoc></SeverityDoc>
      <CloseableDoc></CloseableDoc>
    </template>

    <template #api>
      <Props></Props>
    </template>
  </ComponentDoc>
</template>

<style scoped lang="sass"></style>
