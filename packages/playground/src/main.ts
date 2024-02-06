import { createApp } from 'vue'
import { install as MyLibPLugin, OtherComponent } from "@linusborg/lib";
import App from './App.vue'
import './index.css'

const app = createApp(App)

app.use(MyLibPLugin)
app.component("OtherComponent", OtherComponent)
app.mount('#app')
