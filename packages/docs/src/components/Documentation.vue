<template>
  <Layout style="margin-left: 250px; width: calc(100% - 250px)">
    <template #sidebar>
      <SidebarMenu hide-toggle show-child width="250px" :menu="menu" />
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
import { DARK_THEME, LIGHT_THEME, useTheme } from '@linusborg/lib';

const router = useRouter();

const menu = [
  {
    href: '/getting-started',
    title: 'Getting Started'
  },
  {
    href: '/elements',
    title: 'Elements',
    child: [
      {
        href: '/elements/checkbox',
        title: 'Checkbox'
      },
      {
        href: '/elements/chip',
        title: 'Chip'
      },
      {
        href: '/elements/code',
        title: 'Code'
      },
      {
        href: '/elements/button',
        title: 'Button'
      },
      {
        href: '/elements/table',
        title: 'Table'
      }
    ]
  }
];

const theme = useTheme();

function setTheme(lightMode: boolean) {
  theme.setTheme(lightMode ? LIGHT_THEME : DARK_THEME);
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
