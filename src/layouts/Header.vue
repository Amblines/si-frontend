<template>
  <div class="header">
    <n-space>
      <div class="logo">
        <router-link to="/" style="text-decoration: none">
          Статистика сайтов
        </router-link>
      </div>
    </n-space>
    <div class="actions">
      <add-new-website></add-new-website>
      <n-button @click="copy">Скопировать код</n-button>
      <n-input class="account" disabled :value="code" />
      <profile-modal />
    </div>
  </div>
</template>

<script setup>
import { NButton, NInput, NSpace } from "naive-ui";
import ProfileModal from "@/components/ProfileModal.vue";
import { useAccount } from "@/hooks/account";
import AddNewWebsite from "@/components/AddNewWebsite.vue";

const { code } = useAccount();

const copy = async () => {
  try {
    await navigator.clipboard.writeText(code.value);
  } catch (e) {
    console.log(e);
  }
};
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
