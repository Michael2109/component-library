import { createApp } from 'vue';
import {
  Button,
  Checkbox,
  Code,
  ComponentsPlugin,
  Layout,
  Header,
  Menu,
  Sidebar,
  Tab,
  Table,
  Tabs,
  Column,
  Chip,
  DARK_THEME
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
    theme: DARK_THEME
  })
  .use(router);

app.component('VCodeBlock', VCodeBlock);
app.component('Checkbox', Checkbox);
app.component('Chip', Chip);
app.component('Code', Code);
app.component('Layout', Layout);
app.component('Header', Header);
app.component('Sidebar', Sidebar);
app.component('Menu', Menu);
app.component('Button', Button);
app.component('Tabs', Tabs);
app.component('Tab', Tab);
app.component('Table', Table);
app.component('Column', Column);
app.mount('#app');
