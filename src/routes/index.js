import Vue from 'vue'
import VueRouter from 'vue-router'
import ItemView from '../views/ItemView'
import UserView from '../views/UserView'
import createListView from '../views/CreateListView'
import Bus from '../utils/bus.js'
import { Store } from '../store'

Vue.use(VueRouter)

const moveToNext = (to, from, next) => {
    Bus.$emit('start:spinner')
    Store.dispatch('FETCH_LIST', to.name)
        .then(() => next())
        .catch((err) => {
            console.error(err)
            next()
        })
}

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
            component: createListView('NewsView'),
            beforeEnter: moveToNext
        },
        {
            path: '/ask',
            name: 'ask',
            component: createListView('AskView'),
            beforeEnter: moveToNext
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: createListView('JobsView'),
            beforeEnter: moveToNext
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
