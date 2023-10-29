<template>
  <div class="header">
    <div class="logo">Статистика сайтов</div>
    <div class="actions">
      <n-input class="account" disabled value="1234kasdfasnvzxc" />
      <profile-modal />
    </div>
  </div>
</template>

<script setup>
import { NInput } from "naive-ui";
import ProfileModal from "@/components/ProfileModal.vue";
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: 100%;
  padding-right: 24px;
  padding-left: 24px;
}

.account {
  max-width: 320px;
}

.logo {
  font-weight: 500;
}

.actions {
  display: flex;
  gap: 10px;
}
</style>
