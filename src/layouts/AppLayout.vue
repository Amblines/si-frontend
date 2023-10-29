<template>
  <n-config-provider>
    <n-layout>
      <n-layout-header bordered>
        <Header class="header" />
      </n-layout-header>
      <n-layout has-sider>
        <n-layout-sider bordered :native-scrollbar="false">
          <Sidebar />
        </n-layout-sider>
        <n-layout-content class="content">
          <router-view></router-view>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<script setup>
import {
  NConfigProvider,
  NLayout,
  NLayoutContent,
  NLayoutHeader,
  NLayoutSider,
} from "naive-ui";
import Sidebar from "@/layouts/Sidebar.vue";
import Header from "@/layouts/Header.vue";
</script>

<style scoped>
.header {
  height: 65px;
}

.content {
  padding: 24px;
}
</style>
