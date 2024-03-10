<script setup lang="ts">
import ComponentDoc from '@/components/docs/ComponentDoc.vue';
import BasicDoc from '@/components/docs/components/textfield/TextFieldBasicDoc.vue';
import Props from '@/components/docs/components/textfield/api/Props.vue';
import TextFieldPrefixDoc from '@/components/docs/components/textfield/TextFieldPrefixDoc.vue';
import TextFieldPostfixDoc from '@/components/docs/components/textfield/TextFieldPostfixDoc.vue';
</script>

<template>
  <ComponentDoc title="Table" description="Table description.">
    <template #usage>
      <BasicDoc></BasicDoc>
      <TextFieldPrefixDoc></TextFieldPrefixDoc>
    </template>

    <template #api>
      <Props></Props>
    </template>
  </ComponentDoc>
</template>

<style scoped lang="sass"></style>
