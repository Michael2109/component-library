import { createApp } from 'vue'
import {
	Button,
	install as MyLibPLugin,
	NewComp,
	OtherComponent,
} from '@linusborg/lib'
import App from './App.vue'
import './index.css'

const app = createApp(App)

app.use(MyLibPLugin)
app.component('OtherComponent', OtherComponent)
app.component('NewComp', NewComp)
app.component('Button', Button)
app.mount('#app')
