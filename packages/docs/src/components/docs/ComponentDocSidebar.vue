<template>
  <h1>Sidebar</h1>

  <a :href="`#` + name" v-for="name in names" :key="name">{{ name }}</a>
</template>
<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps({
  names: {
    type: Object as PropType<Array<string>>,
    required: true
  }
});
</script>
<style lang="sass"></style>
