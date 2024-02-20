<script setup lang="ts">
import ComponentView from '@/components/docs/ComponentView.vue';
import BasicDoc from '@/doc/textfield/BasicDoc.vue';
import Props from '@/doc/textfield/api/Props.vue';
</script>

<template>
  <ComponentView title="Table" description="Table description.">
    <template #usage>
      <BasicDoc></BasicDoc>
    </template>

    <template #api>
      <Props></Props>
    </template>
  </ComponentView>
</template>

<style scoped lang="sass"></style>
