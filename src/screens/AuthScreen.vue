<template>
  <div class="auth-container">
    <n-card class="auth" title="Авторизуйтесь">
      <n-space vertical size="large">
        <n-input
          v-model:value="code"
          type="text"
          placeholder="Ваш секретный код"
        />
        <n-space>
          <n-button type="info" @click="login">Войти</n-button>
          <n-button type="error" @click="generateNewAccount"
            >Сгенерировать новый аккаунт</n-button
          >
        </n-space>
      </n-space>
    </n-card>
  </div>
</template>

<script setup>
import http from "@/helpers/http";
import { useMutation } from "@tanstack/vue-query";
import { NSpace, NInput, NCard, NButton, useNotification } from "naive-ui";
import { ref } from "vue";
import { useAccount } from "@/hooks/account";
import { useRouter } from "vue-router";

const code = ref("");

const { updateCode } = useAccount();
const notification = useNotification();
const router = useRouter();

const { mutate: createNewHash } = useMutation({
  mutationFn: () => http.post("/users"),
  onError: (error) => {
    notification.error({
      content: error.response.data.message,
    });
  },
  onSuccess: (data) => {
    const response = data;
    updateCode(response.data.code);
    notification.success({
      content: "Вы успешно авторизовались!",
    });
    router.push("/");
  },
});

const { mutate: checkExistUser } = useMutation({
  mutationFn: (code) => http.post("users/check", { code: code.value }),
  onError: (error) => {
    notification.error({
      content: error.response.data.message,
      duration: 5000,
    });
  },
  onSuccess: (data) => {
    const response = data;
    updateCode(response.data.code);
    notification.success({
      content: "Вы успешно авторизовались!",
      duration: 5000,
    });
    router.go("/");
  },
});

const generateNewAccount = () => createNewHash();
const login = () => checkExistUser(code);
</script>

<style scoped>
.auth {
  max-width: 480px;
}

.auth-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  transform: translateY(-100px);
}
</style>
