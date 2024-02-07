import { createApp } from 'vue'
import {
	baseTheme,
	Button,
	ComponentsPlugin,
	Sidebar,
	Menu,
} from '@linusborg/lib'
import App from './App.vue'
import './index.css'

const app = createApp(App)

app.use(ComponentsPlugin, {
	theme: baseTheme,
})

app.component('Sidebar', Sidebar)
app.component('Menu', Menu)
app.component('Button', Button)
app.mount('#app')
