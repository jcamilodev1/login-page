<template>
  <router-view></router-view>
</template>
<script setup>
  import { useAuthStore } from './store/auth'
  const store = useAuthStore()
  store.getToken()
</script>
<style scoped>
</style>
