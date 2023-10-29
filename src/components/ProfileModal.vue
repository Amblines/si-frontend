<template>
  <n-button strong secondary circle type="info" @click="openModal">
    <template #icon>
      <bold-icon></bold-icon>
    </template>
  </n-button>
  <n-modal
    v-model:show="isShowModal"
    preset="dialog"
    title="Аккаунты"
    :bordered="false"
    size="huge"
  >
    <n-radio-group v-model:value="selectedAccount">
      <n-space size="large">
        <n-radio
          v-for="account in accountList"
          :key="account.id"
          :value="account.id"
        >
          {{ account.hash }}
        </n-radio>
        <n-input
          v-model:value="newAccountHash"
          placeholder="Введите код аккаунта"
        ></n-input>
        <n-button type="info" @click="logoutAll">Добавить аккаунт</n-button>
      </n-space>
    </n-radio-group>
  </n-modal>
</template>

<script setup>
import { useAccount } from "@/hooks/account";
import { NButton, NModal, NRadioGroup, NSpace, NRadio, NInput } from "naive-ui";
import { ref } from "vue";
import { BoldIcon } from "vue-tabler-icons";

const isShowModal = ref(false);
const { accountList, activeAccountIdOrNull } = useAccount();
const selectedAccount = ref(activeAccountIdOrNull);
const newAccountHash = ref("");

const openModal = () => {
  isShowModal.value = true;
};
</script>
