<template>
  <div class="app">
    <h2>Vue App</h2>
    <router-link to="/">
      <button>home</button>
    </router-link>
    <router-link to="/about">
      <button>about</button>
    </router-link>
    <div class="content" style="border: 1px solid red;padding: 20px;"><router-view /></div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
const count = ref(100)

const addCounter = () => {
  count.value++
}
</script>