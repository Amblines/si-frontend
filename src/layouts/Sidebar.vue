<template>
  <div>
    <n-menu
      :collapsed="collapsed"
      :collapsed-width="64"
      :collapsed-icon-size="22"
      :options="menuOptions"
      key-field="whateverKey"
      label-field="whateverLabel"
      children-field="whateverChildren"
    />
  </div>
</template>

<script setup>
import { renderIcon } from "@/helpers/renderIcon";
import { NMenu } from "naive-ui";
import { WorldWwwIcon } from "vue-tabler-icons";
import { useQuery } from "@tanstack/vue-query";
import http from "@/helpers/http";

const { data } = useQuery({
  queryKey: ["counters"],
  queryFn: async () => {
    http.get("counters");
  },
});

console.log(data);

const menuOptions = [
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
  {
    whateverLabel: "orelstroy.ru",
    whateverKey: "orelstroy.ru",
    icon: renderIcon(WorldWwwIcon),
  },
];
</script>

<style lang="scss" scoped></style>
