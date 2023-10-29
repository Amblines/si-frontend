<template>
  <n-h1>Общая статистика</n-h1>
  <n-alert style="margin-bottom: 20px" type="warning">
    Общая статистика обновляется 1 раз в час!
  </n-alert>
  <n-grid :cols="3" x-gap="20px" y-gap="20px">
    <n-grid-item>
      <statistic-card />
    </n-grid-item>
    <n-grid-item>
      <statistic-card />
    </n-grid-item>
    <n-grid-item>
      <statistic-card />
    </n-grid-item>
  </n-grid>
  <n-grid cols="3" style="padding-top: 20px" x-gap="20px" y-gap="20px">
    <n-grid-item>
      <traffic-source-chart />
    </n-grid-item>
    <n-grid-item span="2">
      <statistic-card />
    </n-grid-item>
  </n-grid>
</template>

<script setup>
import StatisticCard from "@/components/StatisticCard.vue";
import TrafficSourceChart from "@/components/TrafficSourceChart.vue";
import { NAlert, NGrid, NGridItem, NH1 } from "naive-ui";
</script>

<style lang="scss" scoped></style>
