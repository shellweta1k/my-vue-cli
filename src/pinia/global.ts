import { defineStore } from 'pinia';

export const globalEdit = defineStore('globalEdit', {
  state: () => {
    return {
      unfold: false,
    };
  },
  actions: {
    setFold() {
      console.log('click unfold');
      this.unfold = !this.unfold;
    },
  },
});
