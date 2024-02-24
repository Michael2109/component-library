<script setup lang="ts">
import ComponentDoc from '@/components/docs/ComponentDoc.vue';
import BasicDoc from '@/components/docs/components/menu/BasicDoc.vue';
</script>

<template>
  <ComponentDoc title="Menu" description="Menu description.">
    <template #usage>
      <BasicDoc></BasicDoc>
    </template>

    <template #api></template>
  </ComponentDoc>
</template>

<style scoped lang="sass"></style>
