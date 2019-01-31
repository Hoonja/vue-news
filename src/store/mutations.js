export default {
    SET_NEWS(state, news) {
        state.news = news
    },
    SET_ASK(state, asks) {
        state.asks = asks
    },
    SET_JOBS(state, jobs) {
        state.jobs = jobs
    },
    SET_USER(state, user) {
        state.user = user
    },
    SET_ITEM(state, item) {
        console.log('item', item)
        state.item = item
    },
    SET_LIST(state, list) {
        console.log('list', list)
        state.list = list
    }
}