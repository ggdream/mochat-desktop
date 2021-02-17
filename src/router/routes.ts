import { RouteConfig } from 'vue-router'


const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/sign',
    },
    {
        path: '/sign',
        component: () => import('@/views/sign/index.vue')
    },
    {
        path: '/mine',
        component: () => import('@/views/mine/Mine.vue')
    }
]

export default routes
