<template>
	<Sidebar>
		<template #top>
			<div>Test</div>
			<Menu></Menu>
		</template>
	</Sidebar>
	<div class="app-layout"></div>
</template>

<script setup lang="ts"></script>

<style lang="sass">
.app-layout
	width: calc(100% - 250px)
	height: 100%
	margin-top: 0
	margin-left: 250px
</style>
