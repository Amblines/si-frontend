<template>
  <n-button type="info" @click="openModal">Получить код для вставки</n-button>
  <n-modal
    v-model:show="isShowModal"
    preset="dialog"
    title="Получить код для вставки"
    :bordered="false"
    size="large"
  >
    <div style="overflow: auto">
      <n-space>
        <n-button type="info" size="small" @click="copy">Скопировать</n-button>
        <n-code :code="code" language="javascript" />
      </n-space>
    </div>
  </n-modal>
</template>

<script setup>
import { NButton, NCode, NModal, NSpace } from "naive-ui";
import { ref } from "vue";

const isShowModal = ref(false);

const openModal = () => {
  isShowModal.value = true;
};

// TODO move it
const SERVER = "https://api.si-metrics-tsu.ru/";
const PAGE_VIEW_URL = "page-view";
const SCRIPT_SRC = "https://script.si-metrics-tsu.ru/script.js";

const props = defineProps({
  conterKey: String,
});

const code = `<script>
  (function (window, document) {
    try {
      window.siMetrics = {
        key: '${props.conterKey}',
        server: '${SERVER}',
        pageViewUrl: '${PAGE_VIEW_URL}',
      };
    } catch (err) {
      console.log(err);
    }

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = '${SCRIPT_SRC}';

    document.head.appendChild(script);
  })(window, document);
${"<"}/script>`;

const copy = async () => {
  try {
    await navigator.clipboard.writeText(code);
  } catch (e) {
    console.log(e);
  }
};
</script>
