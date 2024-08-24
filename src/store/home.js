import { defineStore } from 'pinia'

export const useHomeStore = defineStore('home', {
  state: () => ({
    count: 100
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})