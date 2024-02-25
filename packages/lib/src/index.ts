import { LIGHT_THEME } from './theme/themes/light-theme';
import { DARK_THEME } from './theme/themes/dark-theme';
import { useTheme } from './plugins/components-plugin';
import type { MenuItem } from '@/components/menu/menu-item';
import Sidebar from './components/sidebar/Sidebar.vue';
import Checkbox from './components/checkbox/Checkbox.vue';
import Tag from './components/tag/Tag.vue';
import Code from './components/code/Code.vue';
import Menu from './components/menu/Menu.vue';
import Button from './components/button/Button.vue';
import Layout from './components/layout/Layout.vue';
import Header from './components/header/Header.vue';
import Switch from './components/switch/Switch.vue';
import Tabs from './components/tabs/Tabs.vue';
import Tab from './components/tabs/Tab.vue';
import Table from './components/table/Table.vue';
import TextField from './components/textfield/TextField.vue';
import Column from './components/table/Column.vue';
import ComponentsPlugin from './plugins/components-plugin';

export type { MenuItem };

export {
  useTheme,
  LIGHT_THEME,
  DARK_THEME,
  Checkbox,
  Tag,
  Code,
  Header,
  Layout,
  Sidebar,
  Menu,
  Button,
  Switch,
  Tabs,
  Tab,
  Table,
  TextField,
  Column,
  ComponentsPlugin
};
