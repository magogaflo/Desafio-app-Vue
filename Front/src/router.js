import Vue from "vue";
import Router from "vue-router";
import Home from './views/Home.vue'
//import Event from './views/Event.vue'
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
       component: Home
     // component: () => import("./views/Home.vue")
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component:Event
      component: () => import("./views/About.vue")
    },

  
    {
      path: "/evento/:idEvento",
      name: "evento",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component:Event
      component: () => import("./views/Evento.vue")
    },
    {
      path: "/formulario",
      name: "formulario",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component:Event
      component: () => import("./views/Formulario.vue")
    },
    {
      path: "/contacto",
      name: "contacto",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component:Event
      component: () => import("./views/Contacto.vue")
    }
  ]
});
