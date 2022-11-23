<script setup lang="ts">
import { h, type Component } from "vue";
import { NIcon, NMenu } from "naive-ui";
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { NConfigProvider } from "naive-ui";
import { darkTheme } from "naive-ui";
import type { MenuOption } from "naive-ui";
import {
  LaptopOutline as WorkIcon,
  HomeOutline as HomeIcon,
} from "@vicons/ionicons5";
function renderIcon(icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const menuOptions: MenuOption[] = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "home",
            params: {
              lang: "zh-CN",
            },
          },
        },
        { default: () => "Home" }
      ),
    key: "home",
    icon: renderIcon(HomeIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            path: "/about",
          },
        },
        { default: () => "About" }
      ),
    key: "work",
    icon: renderIcon(WorkIcon),
  },
];
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
      <n-config-provider :theme="darkTheme">
        <n-menu :options="menuOptions" mode="horizontal" />
      </n-config-provider>
    </div>
  </header>
  <n-config-provider :theme="darkTheme">
    <RouterView />
  </n-config-provider>
</template>

<style scoped lang="scss">
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
