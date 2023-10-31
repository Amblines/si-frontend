<template>
  <n-card title="Статистика (последние 1000 запросов)">
    <Doughnut :data="chartDataArray" />
  </n-card>
</template>

<script setup>
import { Doughnut } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
} from "chart.js";
import { NCard } from "naive-ui";
import http from "@/helpers/http";
import { useQuery } from "@tanstack/vue-query";
import { ref } from "vue";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
);

// eslint-disable-next-line no-unused-vars
const { data: _ } = useQuery({
  queryKey: ["trafficSourceChart"],
  queryFn: async () => {
    const response = await http.get(`/page-view/last`, {
      params: { limit: 1000 },
    });

    const searchEngines = response.data.filter((page) => {
      return page.referer.includes(page.counter.domain);
    }).length;

    const notSearchEngines = response.data.filter((page) => {
      return !page.referer.includes(page.counter.domain);
    }).length;

    chartDataArray.value = {
      labels: ["Прямые заходы", "Поисковые системы / внешние ресурсы"],
      datasets: [
        {
          label: "Анализ трафика",
          data: [searchEngines, notSearchEngines],
        },
      ],
    };

    return response.data;
  },
});

const chartDataArray = ref({
  labels: ["Прямые заходы", "Поисковые системы / внешние ресурсы"],
  datasets: [
    {
      label: "Анализ трафика",
      data: [0, 0],
      backgroundColor: ["#2080f0", "#18a058"],
    },
  ],
});
</script>
