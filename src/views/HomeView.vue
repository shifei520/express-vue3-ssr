<template>
  <div class="app">
    <h2>Home</h2>
    <div>{{ count }}</div>
    <button @click="addCounter">+1</button>
  </div>
</template>
<script setup>
import { storeToRefs } from 'pinia'
import { useHomeStore } from '../store/home'
const homeStore = useHomeStore()
const { count } = storeToRefs(homeStore)

const addCounter = () => {
  count.value++
}
</script>