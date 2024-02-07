<script setup lang="ts">
import { defineModel, PropType } from 'vue'
import MenuItem from './menu-item'

const model = defineModel<Boolean>()

const emits = defineEmits(['change'])

const props = defineProps({
	items: {
		type: Object as PropType<Array<MenuItem>>,
		required: false,
		default: undefined,
	},
})
</script>

<template>
	<ul class="menu">
		<li v-for="item in items">Home</li>
		<!--		<li>
			<a>About</a>
			<ul class="submenu">
				<li>Company</li>
				<li>Team</li>
			</ul>
		</li>
		<li>
			<a>Services</a>
			<ul class="submenu">
				<li>Web Development</li>
				<li>Design</li>
			</ul>
		</li>
		<li>Contact</li>-->
	</ul>
</template>

<style scoped lang="sass">
@import "menu"
</style>
