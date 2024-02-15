import ButtonView from '@/views/ButtonView.vue';
import MenuView from '@/views/MenuView.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import TableView from '@/views/TableView.vue';
import ChipView from '@/views/ChipView.vue';
import CodeView from '@/views/CodeView.vue';
import CheckboxView from '@/views/CheckboxView.vue';

const routes = [
  { path: '/components/button', component: ButtonView },
  { path: '/components/checkbox', component: CheckboxView },
  { path: '/components/chip', component: ChipView },
  { path: '/components/code', component: CodeView },
  { path: '/components/menu', component: MenuView },
  { path: '/components/table', component: TableView }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes // short for `routes: routes`
});

export default router;
