import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { useAppStore } from '@/store/app'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'root',
    redirect: 'dashboard',
    component: () => import('@/views/layout/index.vue'),
    children: [
      {
        path: 'dashboard',
        name: 'dashboard',
        component: () => import('../views/dashboard/index.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login/index.vue')
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory(),
  strict: true,
  scrollBehavior: () => {
    return {
      left: 0,
      top: 0
    }
  }
})

// 路由守卫
const whiteList = ['/login']
router.beforeEach((to, from, next) => {
  const appStore = useAppStore()

  if (!appStore.token) {
    if (!whiteList.includes(to.path)) {
      next({ name: 'login' })
    } else {
      next()
    }
  } else {
    if (to.path === '/login') {
      next({ name: 'dashboard' })
    } else {
      next()
    }
  }

  // next()

  // console.log(appStore.token)
})

export default router
