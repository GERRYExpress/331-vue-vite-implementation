import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '@/views/EventListView.vue'
import StudentListView from '@/views/StudentListView.vue'
import EventDetailView from '@/views/event/DetailView.vue'
import RegisterView from '@/views/event/RegisterView.vue'
import EditView from '@/views/event/EditView.vue'
import LayoutView from '@/views/event/LayoutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NetworkErrorView from '@/views/NetworkErrorView.vue'
import nProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list-view',
      component: EventListView,
      props: (route) => ({
        page: parseInt(route.query.page ? route.query.page.toString() : '1'),
        totalPage: parseInt(route.query._limit ? route.query._limit.toString() : '2'),
      }),
    },
    {
      path: '/students',
      name: 'student-list-view',
      component: StudentListView,
    },
    {
      path: '/404/:resource',
      name: '404-resource-view',
      component: NotFoundView,
      props: true,
    },
    {
      path: '/network-error',
      name: 'network-error-view',
      component: NetworkErrorView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
    {
      path: '/event/:id',
      name: 'event-layout-view',
      component: LayoutView,
      props: true,
      children: [
        {
          path: '',
          name: 'event-detail-view',
          component: EventDetailView,
          props: true,
        },
        {
          path: 'register',
          name: 'event-register-view',
          component: RegisterView,
          props: true,
        },
        {
          path: 'edit',
          name: 'event-edit-view',
          component: EditView,
          props: true,
        },
      ],
    },
  ],
})

router.beforeEach(() => {
  nProgress.start()
})

router.afterEach(() => {
  nProgress.done()
})

export default router
