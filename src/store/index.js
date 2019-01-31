import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex)

export const Store = new Vuex.Store({
    state: {
        news: [],
        asks: [],
        jobs: [],
        user: {},
        item: {},
        list: [],
    },
    getters: {
        fetchedNews(state) {
            return state.news
        },
        fetchedAsk(state) {
            return state.asks
        },
        fetchedJobs(state) {
            return state.jobs
        },
        fetchedUser(state) {
            return state.user
        },
        fetchedItem(state) {
            return state.item
        }
    },
    mutations,
    actions
})
