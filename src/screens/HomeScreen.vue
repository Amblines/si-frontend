<template>
  <n-h1>Общая статистика (по всем сайтам)</n-h1>
  <n-alert style="margin-bottom: 20px" type="warning">
    Общая статистика обновляется 1 раз в 30 секунд!
  </n-alert>
  <n-grid :cols="3" x-gap="20px" y-gap="20px">
    <n-grid-item>
      <statistic-card
        label="Кол-во посещений 24 часа"
        :statistic="dayStatistic"
      />
    </n-grid-item>
    <n-grid-item>
      <statistic-card
        label="Кол-во посещений неделю"
        :statistic="weekStatistic"
      />
    </n-grid-item>
    <n-grid-item>
      <statistic-card
        label="Кол-во посещений месяц"
        :statistic="monthStatistic"
      />
    </n-grid-item>
    <n-grid-item>
      <statistic-card
        label="Кол-во посещений в год"
        :statistic="yearStatistic"
      />
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
      <n-card v-if="lastPageViewed" title="Последние посещённые страницы">
        <n-collapse>
          <n-collapse-item
            v-for="page in lastPageViewed"
            :key="page.id"
            :title="
              page.counter.domain + (page.url === '/' ? ' - Главная' : page.url)
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
</template>

<script setup>
import StatisticCard from "@/components/StatisticCard.vue";
import TrafficSourceChart from "@/components/TrafficSourceChart.vue";
import http from "@/helpers/http";
import { useQuery } from "@tanstack/vue-query";
import {
  NAlert,
  NCard,
  NGrid,
  NGridItem,
  NH1,
  NCollapseItem,
  NCollapse,
} from "naive-ui";

const { data: dayStatistic } = useQuery({
  queryKey: ["mainStatisticCardDay"],
  queryFn: async () => {
    const response = await http.get(`/page-view/interval/day`);
    return response.data;
  },
});

const { data: weekStatistic } = useQuery({
  queryKey: ["mainStatisticCardWeek"],
  queryFn: async () => {
    const response = await http.get(`/page-view/interval/week`);
    return response.data;
  },
});

const { data: monthStatistic } = useQuery({
  queryKey: ["mainStatisticCardMonth"],
  queryFn: async () => {
    const response = await http.get(`/page-view/interval/month`);
    return response.data;
  },
});

const { data: yearStatistic } = useQuery({
  queryKey: ["mainStatisticCardYear"],
  queryFn: async () => {
    const response = await http.get(`/page-view/interval/year`);
    return response.data;
  },
});

const { data: lastPageViewed } = useQuery({
  queryKey: ["mainStatisticLastPageViewed"],
  queryFn: async () => {
    const response = await http.get(`/page-view/last`, {
      params: { limit: 16 },
    });
    return response.data;
  },
});
</script>

<style lang="scss" scoped></style>
