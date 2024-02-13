import { createApp } from 'vue';
import {
  baseTheme,
  Button,
  ComponentsPlugin,
  Menu,
  Sidebar,
  Tab,
  Table,
  Tabs,
  Column,
  Chip
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
app.component('Chip', Chip);
app.component('Sidebar', Sidebar);
app.component('Menu', Menu);
app.component('Button', Button);
app.component('Tabs', Tabs);
app.component('Tab', Tab);
app.component('Table', Table);
app.component('Column', Column);
app.mount('#app');
