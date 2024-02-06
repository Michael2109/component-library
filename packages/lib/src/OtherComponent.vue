<script setup lang="ts">
import { defineProps } from 'vue'

const props = defineProps({
	example123: {
		type: String,
		required: true,
	},
})
</script>

<template>
	<div>Example other{{ example123 }}</div>
</template>

<style scoped lang="postcss"></style>
