import { RouteConfig } from 'vue-router'


const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/mine',
    },
    {
        path: '/mine',
        component: () => import('@/views/mine/Mine.vue')
    }
]

export default routes
