<template>
  <h1 class="component-title">
    {{ title }}
  </h1>

  <p class="component-description">{{ description }}</p>

  <Tabs selected-key="usage">
    <Tab label="Usage" value="usage">
      <div style="display: flex; height: 100%">
        <div class="usage" style="flex: 1">
          <h2>Import</h2>

          <CodeBlock
            lang="js"
            :code="`import { ${title} } from '@aurora-lib/vue'`"
          ></CodeBlock>

          <div class="usage" ref="usageContainer">
            <slot name="usage"></slot>
          </div>
        </div>
        <div class="component-doc-sidebar-container">
          <ComponentDocSidebar
            :names="names"
            style="width: 200px; flex-shrink: 0"
          ></ComponentDocSidebar>
        </div>
      </div>
    </Tab>
    <Tab label="API" value="props">
      <slot name="api"></slot>
    </Tab>
    <Tab label="Styling" value="styling">
      <slot name="styling"></slot>
    </Tab>
  </Tabs>
</template>
<script lang="ts" setup>
import CodeBlock from '@/components/docs/usage/CodeBlock.vue';
import ComponentDocSidebar from '@/components/docs/ComponentDocSidebar.vue';
import { onMounted, ref } from 'vue';

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

const names = ref<Array<string> | undefined>(undefined);

onMounted(() => {
  const queryResults = usageContainer.value?.querySelectorAll(
    '.document-section-title'
  );
  if (queryResults) {
    const documentSectionTitles = [...queryResults];
    names.value = documentSectionTitles.map((element) => element.innerHTML);
  } else {
    names.value = [];
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

.component-doc-sidebar-container
  width: 300px
  height: 100%
  background-color: white
</style>
