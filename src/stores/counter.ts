import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  function increment() {
    count.value++
  }
  function reduce() {
    count.value--
  }
  return { count, increment, reduce }
})
