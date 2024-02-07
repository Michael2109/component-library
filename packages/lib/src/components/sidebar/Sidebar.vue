<script setup lang="ts">
import { defineModel } from 'vue'

const model = defineModel<Boolean>()

const props = defineProps({
	id: {
		type: String,
		required: false,
		default: undefined,
	},
})
</script>

<template>
	<div class="sidebar">
		<slot name="top" />
		<div class="sidebar-bottom">
			<slot name="bottom" />
		</div>
	</div>
</template>

<style scoped lang="sass">
.sidebar
	display: flex
	flex-direction: column
	border-right: #1a1a1a
	border-right-style: solid
	border-right-width: 1px
	width: 250px
	background-color: #f0f0f0
	position: fixed
	top: 0
	left: 0
	height: 100%
	overflow-y: auto
	padding-top: 20px

.sidebar-bottom
	margin-top: auto
</style>
