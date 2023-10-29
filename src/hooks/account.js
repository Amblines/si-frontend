import { useLocalStorage } from "@vueuse/core";
import { computed } from "vue";

export const useAccount = () => {
  const accountList = useLocalStorage("accountList", []);
  const activeAccount = useLocalStorage("accountActive", null);

  const activeAccountIdOrNull = computed(() => {
    return activeAccount.value ? activeAccount.value.id : null;
  });

  return {
    accountList,
    activeAccount,
    activeAccountIdOrNull,
  };
};
