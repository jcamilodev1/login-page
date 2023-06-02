<template>
  <div class="container">
    <h1>Registro</h1>
    <form @submit.prevent="register">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="email">Correo electrónico</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Registrarse</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue'
import { auth } from '../firebase'

export default {
  setup() {
    const name = ref('')
    const email = ref('')
    const password = ref('')

    const register = async () => {
      try {
        // Crear una cuenta de usuario con correo electrónico y contraseña
        const userCredential = await auth.createUserWithEmailAndPassword(email.value, password.value)
        const user = userCredential.user

        // Guardar el nombre del usuario en Firebase
        await user.updateProfile({
          displayName: name.value
        })

        // Redirigir al usuario después de registrarse exitosamente
        // ...
      } catch (error) {
        console.error(error)
      }
    }

    return {
      name,
      email,
      password,
      register
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
