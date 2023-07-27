<script setup lang="ts">
import { useDesignEditStore } from '@/stores/design_edit'
import { storeToRefs } from 'pinia'

const { isEdit } = storeToRefs(useDesignEditStore())
</script>
<template>
  <div class="container">
    <header class="d-flex flex-wrap justify-content-center py-3">
      <a
        href="/"
        class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
      >
        <span class="fs-4">Heritage Express</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item">
          <RouterLink to="/" class="nav-link active" aria-current="page">Home</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="{ name: 'home' }" class="nav-link">Features</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="{ name: 'home' }" class="nav-link">Pricing</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="{ name: 'home' }" class="nav-link">FAQs</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="{ name: 'about' }" class="nav-link">About</RouterLink>
        </li>
        <li class="nav-item" @click="isEdit = true">
          <div class="nav-link">Edit</div>
        </li>
      </ul>
    </header>
  </div>
</template>
