<script setup lang="ts">
import ComponentDoc from '@/components/docs/ComponentDoc.vue';
import BasicDoc from '@/components/docs/components/menu/MenuBasicDoc.vue';
import MenuBasicDoc from '@/components/docs/components/menu/MenuBasicDoc.vue';
import MenuGroupDoc from '@/components/docs/components/menu/MenuGroupDoc.vue';
</script>

<template>
  <ComponentDoc title="Menu" description="Menu description.">
    <template #usage>
      <MenuBasicDoc></MenuBasicDoc>
      <MenuGroupDoc></MenuGroupDoc>
    </template>

    <template #api></template>
  </ComponentDoc>
</template>

<style scoped lang="sass"></style>
