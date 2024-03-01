<template>
  <h1 class="component-title">
    {{ title }}
  </h1>

  <p class="component-description">{{ description }}</p>

  <Tabs selected-key="usage">
    <Tab label="Usage" key="usage">
      <div>
        <h2>Import</h2>

        <CodeBlock
          lang="js"
          :code="`import { ${title} } from '@aurora-lib/vue'`"
        ></CodeBlock>
        <div ref="usageContainer">
          <slot name="usage"></slot>
        </div></div
    ></Tab>
    <Tab label="API" key="props"><slot name="api"></slot></Tab>
    <Tab label="Styling" key="styling"><slot name="styling"></slot></Tab>
  </Tabs>

  <ComponentDocSidebar :names="names"></ComponentDocSidebar>
</template>
<script lang="ts" setup>
import CodeBlock from '@/components/docs/usage/CodeBlock.vue';
import ComponentDocSidebar from '@/components/docs/ComponentDocSidebar.vue';
import { computed, Ref, ref } from 'vue';

const usageContainer = ref<HTMLDivElement | null>(null);

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

const slots = defineSlots();

const names = computed(() => {
  const queryResults = usageContainer.value?.querySelectorAll(
    '.document-section-title'
  );
  console.log(queryResults);
  if (queryResults) {
    const documentSectionTitles = [
      ...usageContainer.value?.querySelectorAll('.document-section-title')
    ];
    return documentSectionTitles.map((element) => element.innerHTML);
  } else {
    return [];
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
