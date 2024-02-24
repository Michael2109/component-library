<template>
  <h1 class="component-title">
    {{ title }}
  </h1>

  <p class="component-description">{{ description }}</p>

  <Tabs selected-key="usage">
    <Tab label="Usage" key="usage"> <slot name="usage"></slot></Tab>
    <Tab label="API" key="props"><slot name="api"></slot></Tab>
    <Tab label="Styling" key="styling"><slot name="styling"></slot></Tab>
  </Tabs>
</template>
<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
});
</script>
<style lang="sass">

.component-title
  padding-top: 20px
  font-weight: 600
  line-height: 1.2
  font-size: 1.75rem

.component-description
  display: block
  margin-block-start: 1em
  margin-block-end: 1em
  margin-inline-start: 0
  margin-inline-end: 0
</style>
