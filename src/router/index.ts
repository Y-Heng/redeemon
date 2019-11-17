import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.VUE_APP_BASE_PATH,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ '@/views/home.vue')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ '@/views/about.vue')
    },
    {
      path: '/svg',
      name: 'svg',
      component: () => import(/* webpackChunkName: "svg" */ '@/views/demo/svg-icon.vue')
    },
    // 错误页
    {
      path: '/404',
      component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue')
    },
    {
      path: '*',
      component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue')
    }
  ]
})
