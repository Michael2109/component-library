import { createApp } from 'vue'
import {
	baseTheme,
	Button,
	ComponentsPlugin,
	Sidebar,
	Menu,
} from '@linusborg/lib'
import App from './App.vue'
import './index.sass'
import ButtonView from './components/views/ButtonView.vue'
import MenuView from './components/views/MenuView.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { createVCodeBlock } from '@wdns/vue-code-block'

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

const VCodeBlock = createVCodeBlock({
	// options
})

app.use(ComponentsPlugin, {
	theme: baseTheme,
})
app.use(router)

app.component('VCodeBlock', VCodeBlock)
app.component('Sidebar', Sidebar)
app.component('Menu', Menu)
app.component('Button', Button)
app.mount('#app')
