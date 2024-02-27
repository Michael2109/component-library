<script setup lang="ts">
import type { PropType } from 'vue';
import type { DocumentProperty } from '@/components/docs/props/document-property';
import { Column, Table } from '@aurora/vue';

defineProps({
  properties: {
    type: Object as PropType<Array<DocumentProperty>>,
    required: true
  }
});
</script>

<template>
  <Table :items="properties">
    <Column key="name" header="Name"></Column>
    <Column key="type" header="Type"></Column>
    <Column key="default" header="Default Value"></Column>
    <Column key="description" header="Description"></Column>
  </Table>
</template>

<style scoped lang="sass"></style>
