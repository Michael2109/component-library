<template>
  <div class="component-doc-sidebar">
    <div v-for="name in names" :key="name">
      <Button variant="text" :href="`#` + name">{{ name }}</Button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, PropType } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

defineProps({
  names: {
    type: Object as PropType<Array<string>>,
    required: false,
    default: undefined
  }
});
</script>
<style lang="sass">
.component-doc-sidebar
  position: fixed
  right: 16px
</style>
