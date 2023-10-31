<template>
  <n-card :title="label">
    {{ statistic }}
  </n-card>
</template>

<script setup>
import { NCard } from "naive-ui";
import { defineProps } from "vue";
defineProps({
  label: String,
  statistic: Number,
});
</script>
