<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
	exampleabc: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<div>Example other{{ exampleabc }}</div>
</template>

<style scoped lang="postcss"></style>
