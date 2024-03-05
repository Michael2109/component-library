<script setup lang="ts">
import VCodeBlock from '@wdns/vue-code-block';

defineProps({
  code: {
    type: String,
    required: true
  },
  lang: {
    type: String,
    required: true
  }
});
</script>

<template>
  <div class="code-block">
    <VCodeBlock :code="code" prismjs :lang="lang" theme="tomorrow" />
  </div>
</template>

<style scoped lang="sass"></style>
