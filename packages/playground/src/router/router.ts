import ButtonView from '@/components/views/ButtonView.vue';
import MenuView from '@/components/views/MenuView.vue';
import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  { path: '/components/button', component: ButtonView },
  { path: '/components/menu', component: MenuView }
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
