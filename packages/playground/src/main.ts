import { createApp } from 'vue';
import {
  baseTheme,
  Button,
  ComponentsPlugin,
  Menu,
  Sidebar
} from '@linusborg/lib';
import App from './App.vue';
import './index.sass';
import { createVCodeBlock } from '@wdns/vue-code-block';
import '@fontsource/public-sans';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
import router from '@/router/router';

const app = createApp(App);

const VCodeBlock = createVCodeBlock({
  // options
});

app
  .use(ComponentsPlugin, {
    theme: baseTheme
  })
  .use(router);

app.component('VCodeBlock', VCodeBlock);
app.component('Sidebar', Sidebar);
app.component('Menu', Menu);
app.component('Button', Button);
app.mount('#app');
