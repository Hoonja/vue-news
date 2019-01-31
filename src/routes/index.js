import Vue from 'vue'
import VueRouter from 'vue-router'
import ItemView from '../views/ItemView'
import UserView from '../views/UserView'
import createListView from '../views/CreateListView'

Vue.use(VueRouter)

export const Router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: '/news'
        },
        {
            path: '/news',
            name: 'news',
            component: createListView('NewsView')
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('AskView')
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('JobsView')
        },
        {
            path: '/item/:id',
            component: ItemView
        },
        {
            path: '/user/:id',
            component: UserView
        }
    ]
});
