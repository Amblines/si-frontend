<template>
  <n-config-provider :hljs="hljs">
    <n-notification-provider>
      <component :is="$route.meta.layout"></component>
    </n-notification-provider>
  </n-config-provider>
</template>

<script setup>
import { NNotificationProvider, NConfigProvider } from "naive-ui";
import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";

hljs.registerLanguage("javascript", javascript);
</script>
