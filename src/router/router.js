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
    redirect: '/home/motto',
    children: [
      {
        path: 'motto',
        name: 'motto',
        title: '格言',
        component: () => import('@/views/Motto'),
      },
      {
        path: 'blog',
        name: 'blog',
        title: '个人博客',
        redirect: '/home/blog/articles',
        component: () => import('@/views/Blog'),
        children: [
          {
            path: 'articles',
            name: 'articles',
            title: '文章列表',
            component: () => import('@/views/Articles'),
          },
        ],
      },
      {
        path: 'articles/:uuid',
        name: 'articleDetail',
        title: '文章详情',
        component: () => import('@/views/ArticleDetail'),
      },
      {
        path: 'about',
        name: 'about',
        title: '关于',
        component: () => import('@/views/About'),
      },
      {
        path: 'time-line',
        name: 'time-line',
        title: '时间轴',
        component: () => import('@/views/TimeLines'),
      },
    ],
  },
  {
    path: '*',
    name: 'not_found_404',
    title: 'not_found_404',
    redirect: '/',
  },
]

const router = new VueRouter({
  routes,
})

export default router
