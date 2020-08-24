import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
import Grid from '../views/Grid.vue'
import NotFound from '../views/NotFound.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/contact',
    name: 'Contact',
    component: Contact
  },

  {
    path: '/grid',
    name: 'Grid',
    component: Grid
  },

  {
    path: '/cards',
    name: 'Cards',
    // VOY HACER CON FUNCION FLECHA AHORA EL IMPORT
    component: () => import(/* webpackChunkName: "cards" */ '../views/Cards.vue')
  },

  {
    path: '/form',
    name: 'Form',
    // VOY HACER CON FUNCION FLECHA AHORA EL IMPORT
    component: () => import(/* webpackChunkName: "form" */ '../views/Form.vue')
  },

  {
    path: '/formulario',
    name: 'Formulario',
    // VOY HACER CON FUNCION FLECHA AHORA EL IMPORT
    component: () => import(/* webpackChunkName: "formulario" */ '../views/Formulario.vue')
  },

  // SIEMPRE PERO SIEMPRE LA PAGINA QUE DEJAMOS COMO NOTFOUND O NO ENCONTRADA TODO ESTO VA AL FINAL SIEMPREEEE PORQUE SI NO VA A ACARGAR ESTA PAGINA ANTES QUE LAS DEMAS
  {
    path: '/*',
    name: 'NotFound',
    component: NotFound
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
