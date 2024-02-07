<script setup lang="ts">
import { defineModel, PropType } from 'vue'
import type { MenuItem } from './menu-item'

const emits = defineEmits(['change'])

const model = defineModel<Array<MenuItem>>()
</script>

<template>
	<ul class="menu">
		<li v-for="item in model" @click="item.command()" :key="item.key">
			{{ item.label }}
		</li>
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
