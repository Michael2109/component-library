import type { App } from 'vue'
import MyComponent from './Component.vue'
import OtherComponent from './OtherComponent.vue'
import TestComponent from './TestComponent.vue'
import NewComp from './NewComp.vue'
import DefComp from './DefComp.vue'
import ExtraComp from './ExtraComp.vue'
import Button from './components/button/Button.vue'

import AbcComp from './AbcComp.vue'
function install(app: App) {
	app.component('MyComponent', MyComponent)
}

export {
	MyComponent,
	OtherComponent,
	TestComponent,
	Button,
	NewComp,
	AbcComp,
	DefComp,
	ExtraComp,
	install,
}
