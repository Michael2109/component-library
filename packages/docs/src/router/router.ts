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
        component: GettingStartedView,
        meta: { title: 'Getting Started' }
      },
      {
        path: 'elements',
        name: 'Elements',
        children: [
          {
            path: 'button',
            name: 'Button',
            component: ButtonView,
            meta: { title: 'Button' }
          },
          {
            path: 'checkbox',
            name: 'Checkbox',
            component: CheckboxView,
            meta: { title: 'Checkbox' }
          },
          {
            path: 'tag',
            name: 'Tag',
            component: TagView,
            meta: { title: 'Tag' }
          },
          {
            path: 'code',
            name: 'Code',
            component: CodeView,
            meta: { title: 'Code' }
          },
          {
            path: 'menu',
            name: 'Menu',
            component: MenuView,
            meta: { title: 'Menu' }
          },
          {
            path: 'table',
            name: 'Table',
            component: TableView,
            meta: { title: 'Table' }
          },
          {
            path: 'text-field',
            name: 'TextField',
            component: TextFieldView,
            meta: { title: 'TextField' }
          },
          {
            path: 'icon-button',
            name: 'IconButton',
            component: IconButtonView,
            meta: { title: 'IconButton' }
          }
        ]
      },
      {
        path: 'theme',
        name: 'Theme',
        component: ThemeView,
        meta: { title: 'Theme' }
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

const DEFAULT_TITLE = 'Some Default Title';
router.beforeEach((to, from, next) => {
  document.title = to.meta.title + ' - Aurora UI';
  next();
});

export default router;
