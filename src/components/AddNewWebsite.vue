<template>
  <n-button type="info" @click="openModal">Добавить сайт</n-button>
  <n-modal
    v-model:show="isShowModal"
    preset="dialog"
    title="Добавить новый сайт"
    :bordered="false"
    size="huge"
  >
    <n-space vertical>
      <n-input v-model:value="domain" type="text" placeholder="Введите домен">
        Введите домен
      </n-input>
      <n-button type="info" @click="handleAddNewSite">Добавить</n-button>
    </n-space>
  </n-modal>
</template>

<script setup>
import http from "@/helpers/http";
import { renderIcon } from "@/helpers/renderIcon";
import { useMutation, useQueryClient } from "@tanstack/vue-query";
import { NButton, NInput, NModal, NSpace, useNotification } from "naive-ui";
import { h, ref } from "vue";
import { RouterLink, useRouter } from "vue-router";
import { WorldWwwIcon } from "vue-tabler-icons";

const isShowModal = ref(false);
const domain = ref("");
const notification = useNotification();
const queryClient = useQueryClient();
const router = useRouter();

const openModal = () => {
  isShowModal.value = true;
};

const { mutate: addNewSite } = useMutation({
  mutationFn: (domain) => http.post("counters", { domain: domain.value }),
  onError: (error) => {
    notification.error({
      content: error.response.data.message,
      duration: 5000,
    });
  },
  onSuccess: (data) => {
    const response = data;
    const counter = response.data;

    isShowModal.value = false;
    notification.success({
      content: "Сайт успешно добавлен",
      duration: 5000,
    });

    queryClient.setQueryData(["counters-menu"], (oldData) => {
      return [
        ...oldData,
        {
          label: () =>
            h(
              RouterLink,
              {
                to: {
                  path: `/website/${counter.id}`,
                },
              },
              { default: () => counter.domain },
            ),
          key: counter.key,
          icon: renderIcon(WorldWwwIcon),
        },
      ];
    });

    router.push(`/website/${counter.id}`);
  },
});

const handleAddNewSite = () => {
  addNewSite(domain);
};
</script>
