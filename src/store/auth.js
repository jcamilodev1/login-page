import { defineStore } from 'pinia'
import Swal from 'sweetalert2/dist/sweetalert2.js'
import axios from 'axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: null
  }),
  actions: {
    async register(user) {
      try {
        const res = await axios(
          {
            method: 'post',
            url: 'https://node-auth-96qz.onrender.com/api/user/register',
            headers: {},
            data: {
              ...user // This is the body part
            },
          },
        )
        const resDB = await res
        this.token = resDB.data.data.token
        this.user = resDB.data.data
        localStorage.setItem('token', resDB.data.data.token)
        
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
        })
      }
    },
    async login(user) {
      try {
        const res = await axios(
          {
            method: 'post',
            url: 'https://node-auth-96qz.onrender.com/api/user/login',
            headers: {},
            data: {
              ...user
            },
          },
        )
        const resDB = await res
        this.token = resDB.data.data.token
        this.user = resDB.data.data
        localStorage.setItem('token', resDB.data.data.token)
      } catch (error) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error,
        })
      }
    },
    getToken(){
      if(localStorage.getItem('token')){
        this.token = localStorage.getItem('token')
      }
      else{
        this.token = null
      }
    }
  },
  persist: true,
})
