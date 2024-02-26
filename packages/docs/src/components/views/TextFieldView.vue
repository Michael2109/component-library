<script setup lang="ts">
import ComponentDoc from '@/components/docs/ComponentDoc.vue';
import BasicDoc from '@/components/docs/components/textfield/BasicDoc.vue';
import Props from '@/components/docs/components/textfield/api/Props.vue';
</script>

<template>
  <ComponentDoc title="Table" description="Table description.">
    <template #usage>

      <BasicDoc></BasicDoc>
hihgbuiy
    </template>

    <template #api>
      <Props></Props>
    </template>
  </ComponentDoc>
</template>

<style scoped lang="sass"></style>
