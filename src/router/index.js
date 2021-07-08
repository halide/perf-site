import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { path: '/', redirect: '/dashboard' },
  {
    path: '/dashboard',
    component: () => import('pages/Dashboard.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/Overview.vue'),
      },
      {
        path: '/allCommits',
        component: () => import('pages/AllCommits.vue'),
      },
    ],
  },
]

const router = new createRouter({
  history: createWebHistory(),
  routes,
})

export default router
