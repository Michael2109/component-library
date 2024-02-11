<template>
  <SidebarMenu hide-toggle show-child width="250px" :menu="menu" />

  <!--  <Sidebar>
      <template #top>
        <SidebarMenu width="100%" :menu="menu" />

        <div>Test</div>
        <Menu v-model="items"></Menu>
      </template>
    </Sidebar>-->
  <div class="app-layout">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { SidebarMenu } from 'vue-sidebar-menu';

const router = useRouter();

const menu = [
  {
    href: '/components',
    title: 'Components',
    child: [
      {
        href: '/components/button',
        title: 'Button'
      },
      {
        href: '/components/table',
        title: 'Table'
      }
    ]
  }
];
</script>

<style lang="sass">
.app-layout
  width: calc(100% - 300px)
  height: 100%
  margin-top: 0
  margin-left: 280px
  margin-right: 20px
</style>
