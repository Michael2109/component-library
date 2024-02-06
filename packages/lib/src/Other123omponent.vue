<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
	example: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<div>Example other{{ example }}</div>
</template>

<style scoped lang="postcss"></style>
