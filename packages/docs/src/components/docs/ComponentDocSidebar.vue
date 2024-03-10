<template>
  <div class="component-doc-sidebar">
    <h3 class="component-doc-sidebar-header">Sections</h3>
    <div v-for="name in names" :key="name">
      <Button
        variant="text"
        :href="`#` + name"
        class="component-doc-sidebar-button"
        >{{ name }}</Button
      >
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
<style lang="sass" scoped>
.component-doc-sidebar
  position: fixed
  right: 100px
.component-doc-sidebar-header
  text-transform: uppercase
  padding-left: 12px

.component-doc-sidebar-button:hover
  border-left: 2px solid black !important
</style>
