<template>
  <Layout style="margin-left: 250px; width: calc(100% - 250px)">
    <template #sidebar>
      <Sidebar
        ><template #top><Menu :items="items" /></template
      ></Sidebar>
    </template>
    <template #header>
      <Header>
        <template #left>Test</template>
        <template #right>
          <Switch @change="setTheme"></Switch>
        </template>
      </Header>
    </template>
    <div style="margin-left: 20px; margin-right: 20px">
      <router-view></router-view>
    </div>
  </Layout>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { SidebarMenu } from 'vue-sidebar-menu';
import { DARK_THEME, LIGHT_THEME, useTheme, Menu } from '@linusborg/lib';
import type { MenuItem } from '@linusborg/lib';

const router = useRouter();

const items: Array<MenuItem> = [
  {
    key: 'getting-started',
    label: 'Getting Started',
    command: () => goTo('GettingStarted')
  },
  {
    key: 'elements',
    label: 'Elements',
    items: [
      {
        key: 'elements-button',
        label: 'Button',
        command: () => goTo('Button')
      },
      {
        key: 'elements-checkbox',
        label: 'Checkbox',
        command: () => goTo('Checkbox')
      },
      {
        key: 'elements-chip',
        label: 'Chip',
        command: () => goTo('Chip')
      },
      {
        key: 'elements-code',
        label: 'Code',
        command: () => goTo('Code')
      },
      {
        key: 'elements-menu',
        label: 'Menu',
        command: () => goTo('Menu')
      },
      {
        key: 'elements-table',
        label: 'Table',
        command: () => goTo('Table')
      },
      {
        key: 'elements-text-field',
        label: 'TextField',
        command: () => goTo('TextField')
      }
    ]
  },
  {
    key: 'theme',
    label: 'Theming',
    command: () => goTo('Theme')
  }
];

const theme = useTheme();

function setTheme(lightMode: boolean) {
  theme.setTheme(lightMode ? LIGHT_THEME : DARK_THEME);
}

function goTo(name: string) {
  router.push({ name: name });
}
</script>

<style lang="sass">
.app-layout
  width: calc(100% - 300px)
  height: 100%
  margin-top: 0
  margin-left: 280px
  margin-right: 20px
</style>
