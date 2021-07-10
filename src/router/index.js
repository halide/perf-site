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
        path: '/allChanges',
        component: () => import('pages/AllChanges.vue'),
      },
      {
        path: '/detail/:id',
        component: () => import('pages/Detail.vue'),
      },
    ],
  },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('pages/NotFound.vue') },
]

const router = new createRouter({
  history: createWebHistory(),
  routes,
})

export default router
