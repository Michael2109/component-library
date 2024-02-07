<template>
	<Sidebar>
		<template #top>
			<div>Test</div>
		</template>
	</Sidebar>
	<div class="app-layout"></div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
	msg: string
}>()
const count = ref(0)
</script>

<style lang="sass">
.app-layout
	width: calc(100% - 250px)
	height: 100%
	margin-top: 0
	margin-left: 250px
</style>
