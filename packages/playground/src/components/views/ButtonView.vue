<script setup lang="ts">
import Preview from '@/components/documentation/Preview.vue';

const examples = [
	`<Button size='xs'>Extra Small</Button><Button size='sm'>Small</Button>
<Button size='md'>Default</Button><Button size='lg'>Large</Button>
<Button size='xlg'>Extra Large</Button>`
];
</script>

<template>
	Button View

	<Preview :code="examples[0]">
		<Button size="xs">Extra Small</Button>
		<Button size="sm">Small </Button>
		<Button size="md">Default</Button>
		<Button size="lg">Large </Button>
		<Button size="xlg">Extra Large</Button>
	</Preview>
	<Preview code="">
		<Button variant="solid">Solid </Button>
		<Button variant="outlined">Outlined </Button>
		<Button variant="text">Text</Button>
		<Button variant="link">Link</Button>
	</Preview>
	<Preview code="">
		<Button color="gray">Gray</Button>
		<Button color="red">Red</Button>
		<Button color="orange">Orange</Button>
		<Button color="yellow">Yellow</Button>
		<Button color="green">Green</Button>
		<Button color="teal">Teal</Button>
		<Button color="blue">Blue</Button>
		<Button color="cyan">Cyan</Button>
		<Button color="purple">Purple</Button>
		<Button color="pink">Pink</Button>
	</Preview>
	<Preview code="">
		<Button>
			<template #leftIcon>
				<div class="mdi mdi-account"></div>
			</template>
			Left Icon
		</Button>
		<Button>
			<template #rightIcon>
				<div class="mdi mdi-account"></div>
			</template>
			Right Icon
		</Button>
	</Preview>

	<Preview code="">
		<Button loading>Button</Button>
		<Button loading icon-position="right">Button</Button>
	</Preview>
</template>

<style scoped lang="sass"></style>
