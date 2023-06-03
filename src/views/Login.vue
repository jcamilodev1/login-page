<template>
  <section class="container">
  
    <h1>Iniciar sesión</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" v-model="user.email" required />
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="user.password" required />
      </div>
      <button type="submit">Iniciar sesión</button>
      o
      <router-link to="/register">Registrate</router-link>
    </form>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../store/auth'
import {useRouter} from 'vue-router'
const router = useRouter()

const store = useAuthStore()

const user = ref({
  email: '',
  password: '',
})

const login = async () => {
  store.login(user.value)
  router.push('/')
}
</script>

<style>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
}

input {
  width: 100%;
  padding: 5px;
}
</style>
