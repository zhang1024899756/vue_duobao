import Vue from 'vue'
import Router from 'vue-router'

import index from '../pages/index'
import game from '../pages/game'
import topup from '../pages/top-up'

Vue.use(Router)

const routes = [
    {
        path: '/index',
        name: 'index',
        component: index,
        meta: {title: '首页'},
    },
    {
        path: '/game',
        name: 'game',
        component: game,
        meta: {title: '游戏'},
    },
    {
        path: '/topup',
        name: 'topup',
        component: topup,
        meta: {title: '充值'},
    },
]

const router = new Router({
    routes
})

export default router