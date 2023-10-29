<template>
  <n-card>
    <Doughnut :data="chartData" />
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

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
);

const chartData = {
  labels: ["Red", "Orange", "Yellow", "Green", "Blue"],
  datasets: [
    {
      label: "Dataset 1",
      data: [1, 2, 4, 6, 5],
    },
  ],
};
</script>
