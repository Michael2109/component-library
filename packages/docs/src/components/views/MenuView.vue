<script setup lang="ts">
import ComponentView from '@/components/docs/ComponentView.vue';
import BasicDoc from '@/doc/menu/BasicDoc.vue';
</script>

<template>
  <ComponentView title="Menu" description="Menu description.">
    <template #usage>
      <BasicDoc></BasicDoc>
    </template>

    <template #api></template>
  </ComponentView>
</template>

<style scoped lang="sass"></style>
