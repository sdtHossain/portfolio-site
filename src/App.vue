<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/layout/TheHeader.vue'
</script>

<template>
  <header>
    <TheHeader />
  </header>
  <RouterView />
</template>
