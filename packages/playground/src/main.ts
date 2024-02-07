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
import ButtonView from './components/views/ButtonView.vue'
import MenuView from './components/views/MenuView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
	{ path: '/button', component: ButtonView },
	{ path: '/menu', component: MenuView },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
	// 4. Provide the history implementation to use. We are using the hash history for simplicity here.
	history: createWebHashHistory(),
	routes, // short for `routes: routes`
})

const app = createApp(App)

app.use(ComponentsPlugin, {
	theme: baseTheme,
})
app.use(router)

app.component('Sidebar', Sidebar)
app.component('Menu', Menu)
app.component('Button', Button)
app.mount('#app')
