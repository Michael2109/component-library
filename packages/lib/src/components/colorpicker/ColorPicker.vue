<script setup lang="ts">

import {defineModel, watch} from "vue";

const model = defineModel<Boolean>()

const emits = defineEmits(["change"])

const props = defineProps({

})

watch(model, (enabled: any) => {
  emits("change",enabled )
})
</script>

<template>
 <input type="color"/>
</template>

<style scoped lang="sass">
@import "color-picker"
</style>