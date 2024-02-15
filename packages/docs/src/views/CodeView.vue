<script setup lang="ts">
import ComponentView from '@/components/docs/ComponentView.vue';
import Props from '@/doc/button/api/Props.vue';
import BasicDoc from '@/doc/code/BasicDoc.vue';
</script>

<template>
  <ComponentView
    title="Code"
    description="Button is an extension to standard input element with icons and theming."
  >
    <template #usage>
      <BasicDoc></BasicDoc>
    </template>

    <template #api>
      <Props></Props>
    </template>
  </ComponentView>
</template>

<style scoped lang="sass"></style>
