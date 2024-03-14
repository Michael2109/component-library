<template>
  <Layout>
    <template #header>
      <Header>
        <template #left>
          <AuroraLogo></AuroraLogo>
        </template>
        <template #right>
          <div
            style="
              display: flex;
              margin-left: 10px;
              align-items: center;
              margin-right: 15px;
            "
          >
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
          </div>
        </template>
      </Header>
    </template>
    <Layout>
      <template #sidebar>
        <Sidebar
          ><template #top>
            <Menu v-model="selectedKey" :items="items" />
          </template>
        </Sidebar>
      </template>

      <router-view></router-view> </Layout
  ></Layout>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { SidebarMenu } from 'vue-sidebar-menu';
import { DARK_THEME, LIGHT_THEME, useTheme, Menu } from '@aurora_ui/vue';
import type { MenuItem } from '@aurora_ui/vue';
import { computed, ref, watch } from 'vue';
import { TextField } from '@aurora_ui/vue';
import { Layout } from '@aurora_ui/vue';
import { Header } from '@aurora_ui/vue';
import AuroraLogo from '@/components/logo/AuroraLogo.vue';

const router = useRouter();

const route = useRoute();

const selectedKey = ref<string | undefined>(undefined);

setSelectedKey();

watch(route, (to) => {
  setSelectedKey();
});

function setSelectedKey() {
  selectedKey.value = '' + route.name;
}

const items: Array<MenuItem> = [
  {
    key: 'GettingStarted',
    label: 'Getting Started',
    command: () => goTo('GettingStarted')
  },
  {
    key: 'elements',
    label: 'Elements',
    items: [
      {
        key: 'Button',
        label: 'Button',
        command: () => goTo('Button')
      },
      {
        key: 'Checkbox',
        label: 'Checkbox',
        command: () => goTo('Checkbox')
      },
      {
        key: 'Tag',
        label: 'Tag',
        command: () => goTo('Tag')
      },
      {
        key: 'Code',
        label: 'Code',
        command: () => goTo('Code')
      },
      {
        key: 'Menu',
        label: 'Menu',
        command: () => goTo('Menu')
      },
      {
        key: 'Table',
        label: 'Table',
        command: () => goTo('Table')
      },
      {
        key: 'TextField',
        label: 'TextField',
        command: () => goTo('TextField')
      }
    ]
  },
  {
    key: 'Theme',
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

.content
  padding-left: 15px
  padding-right: 15px
</style>
