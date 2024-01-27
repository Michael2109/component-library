<script setup lang="ts">
import {defineModel} from "vue";

const model = defineModel<string>()


const emits = defineEmits(["click"])
</script>

<template>
<input type="text" v-model="model" @click="(e) => emits('click', e)"/>
</template>

<style scoped lang="sass">
@import "input"
</style>