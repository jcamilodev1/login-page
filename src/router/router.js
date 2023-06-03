import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Home from '../views/Home.vue'
import { useAuthStore } from '../store/auth'

const routes = [
  { name: 'Home', path: '/', component: Home, meta: {requireAuth: true} },
  { name: 'Login', path: '/login', component: Login },
  {  name: 'Register',path: '/register', component: Register },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
router.beforeEach((to, from, next) => {
  const store = useAuthStore()
  const rutaProtegida = to.matched.some(record => record.meta.requireAuth);

    if(rutaProtegida && store.token === null){
        next({name: 'Login'})
    }else{
        // En caso contrario sigue...
        next()
    }

})
export default router
