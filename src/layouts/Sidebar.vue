<template>
  <div>
    <n-menu :options="counters" />
  </div>
</template>

<script setup>
import { renderIcon } from "@/helpers/renderIcon";
import { NMenu } from "naive-ui";
import { WorldWwwIcon } from "vue-tabler-icons";
import { useQuery } from "@tanstack/vue-query";
import http from "@/helpers/http";
import { h } from "vue";
import { RouterLink } from "vue-router";

const { data: counters } = useQuery({
  queryKey: ["counters-menu"],
  queryFn: async () => {
    const response = await http.get("/counters");
    return response.data.map((counter) => ({
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
    }));
  },
});
</script>

<style lang="scss" scoped></style>
