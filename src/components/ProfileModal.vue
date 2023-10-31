<template>
  <n-button strong secondary circle type="info" @click="openModal">
    <template #icon>
      <bold-icon></bold-icon>
    </template>
  </n-button>
  <n-modal
    v-model:show="isShowModal"
    preset="dialog"
    title="Аккаунт"
    :bordered="false"
    size="huge"
  >
    <n-button type="error" @click="handleLogout">Выйти</n-button>
  </n-modal>
</template>

<script setup>
import { useAccount } from "@/hooks/account";
import { NButton, NModal, useNotification } from "naive-ui";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { BoldIcon } from "vue-tabler-icons";

const router = useRouter();
const isShowModal = ref(false);
const notification = useNotification();

const { logout } = useAccount();

const handleLogout = () => {
  logout();
  notification.warning({
    content: "Вы вышли из аккаунта!",
    duration: 5000,
  });
  router.push("/auth");
};

const openModal = () => {
  isShowModal.value = true;
};
</script>
