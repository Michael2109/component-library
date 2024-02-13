<script lang="ts" setup>
import { computed, PropType, ref, watch } from 'vue';
import type { Ref } from 'vue';
import Button from '../button/Button.vue';

const slots = defineSlots();

const props = defineProps({
  items: {
    type: Object as PropType<any>,
    required: true
  }
});

const tableHeaders = computed(() => {
  return slots.default().reduce((headers: Array<any>, child: any) => {
    headers.push(child);

    return headers;
  }, []);
});

const headerKeys = computed(() => {
  return tableHeaders.value.map((header: any) => header.props.key);
});

const rows = computed(() => {
  const result = props.items.map((item: any) => {
    const row: Array<string> = [];
    headerKeys.value.forEach((headerKey) => {
      row.push(item[headerKey]);
    });
    return row;
  });

  console.log(result);
  return result;
});
</script>

<template>
  <table class="table">
    <tr>
      <template v-for="(header, index) of tableHeaders" :key="header">
        <td><component v-if="header" :is="header"></component></td>
      </template>
    </tr>
    <tr v-for="row in rows" :key="row">
      <td v-for="data in row">{{ data }}</td>
    </tr>
  </table>
</template>

<style scoped lang="sass">
.table
  width: 100%
  border-collapse: collapse

td, th
  border: 1px solid #dddddd
  text-align: left
  padding: 8px

tr:nth-child(even)
  background-color: #dddddd
</style>
