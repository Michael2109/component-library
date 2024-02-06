<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
	name: 'TestComponent',
	props: {
		message: { type: String, required: true },
	},
	emits: ['messageChanged'],
	setup() {},
})
</script>
<template>
	<h1>This is your test component!</h1>
	<div>
		<p data-test-message>{{ message }} !!</p>
	</div>
</template>
<style lang="postcss"></style>
