import { createApp } from 'vue'
import {
	baseTheme,
	Button,
	ComponentsPlugin,
	NewComp,
	ExtraComp,
	AbcComp,
	DefComp,
	OtherComponent,
} from '@linusborg/lib'
import App from './App.vue'
import './index.css'

const app = createApp(App)

app.use(ComponentsPlugin, {
	theme: baseTheme,
})

app.component('OtherComponent', OtherComponent)
app.component('NewComp', NewComp)
app.component('Button', Button)
app.component('AbcComp', AbcComp)
app.component('DefComp', DefComp)
app.component('ExtraComp', ExtraComp)
app.mount('#app')
