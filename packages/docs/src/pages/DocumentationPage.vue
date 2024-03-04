<template>
  <Layout style="margin-left: 250px; width: calc(100% - 250px)">
    <template #sidebar>
      <Sidebar
        ><template #top>
          <div class="content">
            <h1 id="header" @click="goTo('Home')">Aurora UI</h1>
            <Menu :items="items" /></div></template
      ></Sidebar>
    </template>
    <template #header>
      <Header>
        <template #left>
          <TextField placeholder="Search" size="xlg"
            ><template #postfix><div class="mdi mdi-search-web"></div></template
          ></TextField>
        </template>
        <template #right>
          <Button
            icon="mdi mdi-github mdi-24px"
            variant="text"
            href="https://github.com/Michael2109/component-library"
          ></Button>
          <Button
            :icon="lightModeIcon"
            @click="changeTheme"
            :color="lightModeButtonColor"
            variant="text"
          ></Button>
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
import { DARK_THEME, LIGHT_THEME, useTheme, Menu } from '@aurora-lib/vue';
import type { MenuItem } from '@aurora-lib/vue';
import { computed, ref } from 'vue';
import { TextField } from '@aurora-lib/vue';

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
        key: 'elements-tag',
        label: 'Tag',
        command: () => goTo('Tag')
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
      },
      {
        key: 'elements-icon-button',
        label: 'IconButton',
        command: () => goTo('IconButton')
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

const lightMode = ref(true);

const lightModeIcon = computed(() => {
  return lightMode.value
    ? 'mdi mdi-24px mdi-lightbulb'
    : 'mdi mdi-24px  mdi-lightbulb-off';
});

const lightModeButtonColor = computed(() => {
  return lightMode.value ? 'black' : 'white';
});

function changeTheme() {
  lightMode.value = !lightMode.value;
  theme.setTheme(lightMode.value ? LIGHT_THEME : DARK_THEME);
}

function goTo(name: string) {
  router.push({ name: name });
}
</script>

<style lang="sass" scoped>

:deep(.aurora-sidebar)
  padding-top: 12px !important

:deep(.aurora-layout-content)
  background-color: var(--colors-surface-100)

#header
  margin-left: 10px
  margin-top: 0
  cursor: pointer
.content
  padding-left: 15px
  padding-right: 15px
.app-layout
  width: calc(100% - 300px)
  height: 100%
  margin-top: 0
  margin-left: 280px
  margin-right: 20px
</style>
