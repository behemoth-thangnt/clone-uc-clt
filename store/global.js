import { defineStore } from "pinia";

export const useGlobalStore = defineStore("global", {
  state: () => {
    return {
      lang: "",
    };
  },

  actions: {
    setToken(token) {
      this.token = token; // set token
    },
    removeToken() {
      this.token = null; // remove token
    }
  },

  persist: {
    storage: persistedState.localStorage,
    paths: ["lang", "token"],
  },
});
