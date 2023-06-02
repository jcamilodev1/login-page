import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    email: '',
    password: ''
  }),
  actions: {
    setEmail(email) {
      this.email = email
    },
    setPassword(password) {
      this.password = password
    },
    login() {
      // Aquí puedes implementar la lógica para autenticar al usuario
      console.log('Usuario autenticado:', this.email)
    }
  }
})
