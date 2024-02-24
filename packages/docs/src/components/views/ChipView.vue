<script setup lang="ts">
import ComponentDoc from '@/components/docs/ComponentDoc.vue';
import Props from '@/components/docs/components/button/api/Props.vue';
import BasicDoc from '@/components/docs/components/chip/BasicDoc.vue';
</script>

<template>
  <ComponentDoc
    title="Chip"
    description="Button is an extension to standard input element with icons and theming."
  >
    <template #usage>
      <BasicDoc></BasicDoc>
    </template>

    <template #api>
      <Props></Props>
    </template>
  </ComponentDoc>
</template>

<style scoped lang="sass"></style>
