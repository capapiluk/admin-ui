import { defineStore } from "pinia";
import axios from "axios";
const urlApi = `${import.meta.env.VITE_URL_API}`;

export const useProductStore = defineStore("useProductStore", {
  state: () => ({
    data: [],
    statusServer: "",
  }),
  actions: {
    async readProducts() {
      try {
        const response = await axios.get(`${urlApi}/products`);
        const newData = response.data;
        this.statusServer = response.status;
        if (!this.dataEqual(this.data, newData)) {
          this.data = newData;
        }
      } catch (error) {
        this.statusServer = error;
      }
    },
    dataEqual(oldData, newData) {
      // เปรียบเทียบข้อมูลเก่าใหม่
      return JSON.stringify(oldData) === JSON.stringify(newData);
    },
  },
  getters: {
    computedData(state) {
      if (state.statusServer == 200) {
        return state.data;
      } else {
        return  true;
      }
    },
  },
});
