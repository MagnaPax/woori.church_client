import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Toolbar from '@/components/Toolbar.vue'

// 라우터 인스턴스를 생성
const router = createRouter({
  // history: 라우터 옵션
  // #(해시)라는 브라우저의 히스토리 API를 사용하지 않기 위함 -> # 없애기
  history: createWebHistory(import.meta.env.BASE_URL),
  // routes: 라우터 옵션
  // 페이지의 라우팅 정보가 배열로 들어가 있다
  // 경로를 정의하고, 각 경로를 컴포넌트와 매핑
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/worship',
      name: 'WorshipView',
      component: () => import('../views/WorshipView.vue')
    },
    {
      path: '/info',
      name: 'InfoView',
      component: () => import('../views/InfoView.vue')
    },
    {
      path: '/support',
      name: 'SupportView',
      component: () => import('../views/SupportView.vue')
    }

    // {
    //   path: '/',
    //   component: Toolbar,
    //   name: 'toolbar-parent',
    //   children: [
    //     {
    //       path: 'home',
    //       name: 'HomeView',
    //       component: HomeView
    //     },
    //     {
    //       path: 'worship',
    //       name: 'WorshipView',
    //       component: () => import('../views/WorshipView.vue')
    //     },
    //     {
    //       path: 'info',
    //       name: 'InfoView',
    //       component: () => import('../views/InfoView.vue')
    //     },
    //     {
    //       path: 'support',
    //       name: 'SupportView',
    //       component: () => import('../views/SupportView.vue')
    //     }
    //   ]
    // },
  ]
})

export default router
