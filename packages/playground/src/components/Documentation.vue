<template>
	<Sidebar>
		<template #top>
			<div>Test</div>
			<Menu v-model="items"></Menu>
		</template>
	</Sidebar>
	<div class="app-layout"></div>
</template>

<script setup lang="ts">
import { Ref, ref } from 'vue'
import type { MenuItem } from '@linusborg/lib/types/components/menu/menu-item'

const items: Ref<Array<MenuItem>> = ref([
	{ label: 'Button', command: () => console.log('Do something') },
	{ label: 'Menu', command: () => console.log('Do something') },
])
</script>

<style lang="sass">
.app-layout
	width: calc(100% - 250px)
	height: 100%
	margin-top: 0
	margin-left: 250px
</style>
