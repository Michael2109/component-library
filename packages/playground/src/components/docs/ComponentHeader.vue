<template>
  <span class="component-title">{{ title }}</span>
  <a
    aria-current="page"
    href="/button/#import"
    class="router-link-active router-link-exact-active"
    id="import"
  >
    #
  </a>

  <p class="component-description">{{ description }}</p>
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
  font-weight: 600
  line-height: 1.2
  margin: 1.5rem 0 1rem
  font-size: 1.75rem

.component-description
  display: block
  margin-block-start: 1em
  margin-block-end: 1em
  margin-inline-start: 0
  margin-inline-end: 0
</style>
