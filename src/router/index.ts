import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/pages/auth/login/LoginPage.vue'
import AppLayout from '@/layout/AppLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    { path: '/login', name: 'login', component: LoginPage },
    {
      path: '/main',
      name: 'main',
      component: AppLayout,
      children: [
        {
          path: '/recharges',
          name: 'recharges',
          component: () => import('@/pages/main/recharges/RechargesPage.vue')
        },
        {
          path: '/payment-of-services',
          name: 'payment-of-services',
          component: () => import('@/pages/main/payment-of-services/PaymentOfServicesPage.vue')
        },
        {
          path: '/history-of-earnings-and-operations',
          name: 'history-of-earnings-and-operations',
          component: () =>
            import(
              '@/pages/main/history-of-earnings-and-operations/HistoryOfEarningsAndOperationsPage.vue'
            )
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/pages/auth/not-found/NotFoundPage.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const currentUser = localStorage.getItem('token')
  if (currentUser) {
    if (to.name !== 'login') next()
    else next({ name: 'main' })
  } else {
    localStorage.clear()
    if (to.name === 'login' || to.name === 'not-found') next()
    else next({ name: 'not-found' })
  }
})

export default router
