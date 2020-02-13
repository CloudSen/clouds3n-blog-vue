import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '@/views/Welcome'
import Home from '@/views/Home'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'welcome',
    title: 'welcome',
    component: Welcome,
  },
  {
    path: '/home',
    name: 'home',
    title: 'home',
    component: Home,
    children: [
      {
        path: 'blog',
        name: 'blog',
        title: '个人博客',
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
