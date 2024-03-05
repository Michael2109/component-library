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
  TextField,
  Column,
  Tag,
  DARK_THEME,
  LIGHT_THEME,
  Switch,
  IconButton,
  Panel,
} from '@aurora-lib/vue';
import App from '@/App.vue';
import '@/index.sass';
import { createVCodeBlock } from '@wdns/vue-code-block';
import '@fontsource/public-sans';
import 'vue-sidebar-menu/dist/vue-sidebar-menu.css';
import router from '@/router/router';
import '@aurora-lib/vue/dist/style.css';
import '@mdi/font/css/materialdesignicons.min.css';

const app = createApp(App);

const VCodeBlock = createVCodeBlock({
  // options
});

app
  .use(ComponentsPlugin, {
    theme: LIGHT_THEME
  })
  .use(router);

app.component('VCodeBlock', VCodeBlock);
app.component('Checkbox', Checkbox);
app.component('Tag', Tag);
app.component('Code', Code);
app.component('Layout', Layout);
app.component('Header', Header);
app.component('Sidebar', Sidebar);
app.component('Menu', Menu);
app.component('Button', Button);
app.component('Switch', Switch);
app.component('Tabs', Tabs);
app.component('Tab', Tab);
app.component('Table', Table);
app.component('TextField', TextField);
app.component('Column', Column);
app.component('IconButton', IconButton);
app.component('Panel', Panel);
app.mount('#app');
