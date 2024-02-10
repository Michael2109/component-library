<script setup lang="ts">
import VCodeBlock from '@wdns/vue-code-block';

import { html as beautify } from 'js-beautify';

const props = defineProps({
	code: {
		type: String,
		required: true
	}
});
</script>

<template>
	<div class="preview">
		<slot></slot>
	</div>
	<VCodeBlock :code="code" highlightjs lang="html" theme="default" />
</template>

<style scoped lang="sass">
.preview
	display: flex
	justify-content: center
	align-items: center
	gap: 8px
	background-color: #ffffff
	border: #1a1a1a solid 1px
	margin-top: 8px
	padding: 10px
	margin-bottom: 8px
	border-radius: 5px
</style>
