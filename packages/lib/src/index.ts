import type { App } from 'vue'
import MyComponent from './Component.vue'
import OtherComponent from './OtherComponent.vue'
import TestComponent from './TestComponent.vue'

function install(app: App) {
	app.component('MyComponent', MyComponent)
}

export { MyComponent, OtherComponent, TestComponent, install }
