<script setup lang="ts"></script>

<template>
	Button View

	<div class="flex flex-wrap justify-content-center gap-3 align-items-center">
		<Button size="xs">Extra Small</Button><Button size="sm">Small</Button
		><Button size="md">Default</Button><Button size="lg">Large</Button
		><Button size="xlg">Extra Large</Button>
	</div>
	<div class="flex gap-2">
		<Button variant="solid">Solid</Button
		><Button variant="outlined">Outlined</Button
		><Button variant="text">Text</Button><Button variant="link">Link</Button>
	</div>
	<div class="flex gap-2">
		<Button color="gray">Gray</Button> <Button color="red">Red</Button>
		<Button color="orange">Orange</Button>
		<Button color="yellow">Yellow</Button> <Button color="green">Green</Button>
		<Button color="teal">Teal</Button> <Button color="blue">Blue</Button>
		<Button color="cyan">Cyan</Button> <Button color="purple">Purple</Button>
		<Button color="pink">Pink</Button>
	</div>
	<div class="flex gap-2">
		<Button
			><template #leftIcon><div class="mdi mdi-account"></div></template>Left
			Icon</Button
		>
		<Button
			><template #rightIcon><div class="mdi mdi-account"></div></template>Right
			Icon</Button
		>
	</div>

	<div class="flex gap-2">
		<Button loading>Button</Button>
		<Button loading icon-position="right">Button</Button>
	</div>
</template>

<style scoped lang="sass"></style>
