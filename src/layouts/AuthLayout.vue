<template>
  <n-config-provider>
    <n-layout>
      <n-layout has-sider>
        <n-layout-content class="content">
          <router-view></router-view>
        </n-layout-content>
      </n-layout>
    </n-layout>
  </n-config-provider>
</template>

<script setup>
import { NConfigProvider, NLayout, NLayoutContent } from "naive-ui";
</script>

<style scoped>
.content {
  width: 100vw;
  height: 100vh;
  padding: 15px;
}
</style>
