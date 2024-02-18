<template>
  <SidebarMenu hide-toggle show-child width="250px" :menu="menu" />
  <div class="app-layout">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { SidebarMenu } from 'vue-sidebar-menu';
import Documentation from '@/components/Documentation.vue';

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
</script>

<style lang="sass">
.app-layout
  width: calc(100% - 300px)
  height: 100%
  margin-top: 0
  margin-left: 280px
  margin-right: 20px
</style>
