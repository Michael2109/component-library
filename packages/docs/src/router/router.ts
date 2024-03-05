import ButtonView from '@/components/views/ButtonView.vue';
import MenuView from '@/components/views/MenuView.vue';
import { createRouter, createWebHistory } from 'vue-router';
import TableView from '@/components/views/TableView.vue';
import TagView from '@/components/views/TagView.vue';
import CodeView from '@/components/views/CodeView.vue';
import CheckboxView from '@/components/views/CheckboxView.vue';
import HomePage from '@/pages/HomePage.vue';
import Documentation from '@/pages/DocumentationPage.vue';
import GettingStartedView from '@/components/views/GettingStartedView.vue';
import TextFieldView from '@/components/views/TextFieldView.vue';
import IconButtonView from '@/components/views/IconButtonView.vue';
import ThemeView from '@/components/views/ThemeView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  {
    path: '/',
    name: 'DocumentationParent',
    component: Documentation,
    children: [
      {
        path: 'getting-started',
        name: 'GettingStarted',
        component: GettingStartedView
      },
      {
        path: 'elements',
        name: 'Elements',
        children: [
          { path: 'button', name: 'Button', component: ButtonView },
          { path: 'checkbox', name: 'Checkbox', component: CheckboxView },
          { path: 'tag', name: 'Tag', component: TagView },
          { path: 'code', name: 'Code', component: CodeView },
          { path: 'menu', name: 'Menu', component: MenuView },
          { path: 'table', name: 'Table', component: TableView },
          { path: 'text-field', name: 'TextField', component: TextFieldView },
          { path: 'icon-button', name: 'IconButton', component: IconButtonView }
        ]
      },
      {
        path: 'theme',
        name: 'Theme',
        component: ThemeView
      }
    ]
  }
];

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(),
  routes // short for `routes: routes`
});

export default router;
