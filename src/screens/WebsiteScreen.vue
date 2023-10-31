<template>
  <div>
    <div v-if="counter" style="margin-bottom: 30px">
      <n-h1> Сайт: {{ counter.domain }}, счётчик {{ counter.key }} </n-h1>
      <n-space>
        <counter-code :conter-key="counter.key" />
        <n-button type="error" @click="handleDeleteWebsite(counterId)"
          >Удалить сайт</n-button
        >
      </n-space>
    </div>
    <n-grid :cols="3" x-gap="20px" y-gap="20px">
      <n-grid-item>
        <statistic-card
          label="За последние 24 часа"
          :statistic="dayStatistic"
        />
      </n-grid-item>
      <n-grid-item>
        <statistic-card
          label="За последнюю неделю"
          :statistic="weekStatistic"
        />
      </n-grid-item>
      <n-grid-item>
        <statistic-card
          label="За последний месяц"
          :statistic="monthStatistic"
        />
      </n-grid-item>
      <n-grid-item>
        <statistic-card label="За последний год" :statistic="yearStatistic" />
      </n-grid-item>
      <n-grid-item>
        <n-card title="Уникальных пользователей">В разработке</n-card>
      </n-grid-item>
    </n-grid>
    <n-grid cols="3" style="padding-top: 20px" x-gap="20px" y-gap="20px">
      <n-grid-item>
        <traffic-source-chart />
      </n-grid-item>
      <n-grid-item span="2">
        <n-card title="Последние посещённые страницы">
          <n-collapse v-if="lastPageViewed">
            <n-collapse-item
              v-for="page in lastPageViewed"
              :key="page.id"
              :title="
                page.counter.domain +
                (page.url === '/' ? ' - Главная' : page.url)
              "
              :name="page.id"
            >
              <div>IP: {{ page.userIp }}</div>
              <div>User-agent: {{ page.userAgent }}</div>
              <div>Referer: {{ page.referer }}</div>
            </n-collapse-item>
          </n-collapse>
        </n-card>
      </n-grid-item>
    </n-grid>
  </div>
</template>

<script setup>
import CounterCode from "@/components/CounterCode.vue";
import StatisticCard from "@/components/StatisticCard.vue";
import TrafficSourceChart from "@/components/TrafficSourceChart.vue";
import http from "@/helpers/http";
import { useMutation, useQuery } from "@tanstack/vue-query";
import {
  NGrid,
  NGridItem,
  NH1,
  NCollapse,
  NCollapseItem,
  NCard,
  NButton,
  NSpace,
  useNotification,
} from "naive-ui";
import { computed, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();
const notification = useNotification();

const { data: counter } = useQuery({
  queryKey: ["websiteCounter", route.params.id],
  queryFn: async () => {
    const response = await http.get(`/counters/${route.params.website}`);
    return response.data;
  },
});

const enabled = computed(() => !!counter.value?.id);
const counterId = computed(() => counter.value?.id);

const { data: dayStatistic } = useQuery({
  queryKey: ["statisticCardDay", counterId],
  queryFn: async () => {
    const response = await http.get(
      `/page-view/interval/day/counter/${counterId.value}`,
    );
    return response.data;
  },
  enabled,
});

const { data: weekStatistic } = useQuery({
  queryKey: ["statisticCardWeek", counterId],
  queryFn: async () => {
    const response = await http.get(
      `/page-view/interval/week/counter/${counterId.value}`,
    );
    return response.data;
  },
  enabled,
});

const { data: monthStatistic } = useQuery({
  queryKey: ["statisticCardMonth", counterId],
  queryFn: async () => {
    const response = await http.get(
      `/page-view/interval/month/counter/${counterId.value}`,
    );
    return response.data;
  },
  enabled,
});

const { data: yearStatistic } = useQuery({
  queryKey: ["statisticCardYear", counterId],
  queryFn: async () => {
    const response = await http.get(
      `/page-view/interval/year/counter/${counterId.value}`,
    );
    return response.data;
  },
  enabled,
});

const { data: lastPageViewed } = useQuery({
  queryKey: ["statisticLastPageViewed", counterId.value],
  queryFn: async () => {
    const response = await http.get(
      `/page-view/last/counter/${counterId.value}`,
      {
        params: { limit: 16 },
      },
    );
    return response.data;
  },
  enabled,
});

const { mutate: deleteWebsite } = useMutation({
  mutationFn: (counterId) => http.delete(`counters/${counterId}`),
  onError: (error) => {
    notification.error({
      content: error.response.data.message,
      duration: 5000,
    });
  },
  onSuccess: () => {
    notification.success({
      content: "Сайт успешно удалён",
      duration: 5000,
    });
    router.push("/");
  },
});

const handleDeleteWebsite = (counterId) => {
  deleteWebsite(counterId);
};

watch(
  () => route.params.website,
  () => {
    router.go(route.fullPath);
  },
);
</script>

<style scoped></style>
