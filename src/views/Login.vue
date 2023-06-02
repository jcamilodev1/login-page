<template>
  <div class="container">
    <h1>Iniciar sesión</h1>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Iniciar sesión</button>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from '../store/auth'

export default {
  setup() {
    const authStore = useAuthStore()

    const email = authStore.email
    const password = authStore.password
    const login = authStore.login

    return {
      email,
      password,
      login
    }
  }
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
