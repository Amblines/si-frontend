import { useLocalStorage } from "@vueuse/core";

export const useAccount = () => {
  const code = useLocalStorage("code", null);

  return {
    code,
    updateCode: (value) => {
      code.value = value;
    },
    logout: () => {
      code.value = null;
    },
  };
};
