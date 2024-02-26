<script setup lang="ts">
import ComponentDoc from '@/components/docs/ComponentDoc.vue';
import Props from '@/components/docs/components/iconbutton/api/Props.vue';
import BasicDoc from '@/components/docs/components/iconbutton/BasicDoc.vue';
</script>

<template>
  <ComponentDoc
    title="Icon Button"
    description="Icon Button Description."
  >
    <template #usage>
      <BasicDoc></BasicDoc>
    </template>

    <template #api><Props></Props> </template>
  </ComponentDoc>
</template>

<style scoped lang="sass"></style>
