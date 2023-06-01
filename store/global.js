import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => {
    return {
      lang: "",
    };
  },
  persist: {
    storage: persistedState.localStorage,
    paths: ["lang"],
  },
});
