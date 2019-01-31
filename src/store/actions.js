import { fetchNewsList, fetchAskList, fetchJobsList, fetchUserInfo, fetchItemInfo, fetchList } from '../api'

export default {
    FETCH_NEWS({commit}) {
        return fetchNewsList()
            .then(({data}) => {
                commit('SET_NEWS', data)
                return data
            })
            .catch(console.error)
    },
    FETCH_ASK({commit}) {
        return fetchAskList()
            .then(({data}) => {
                commit('SET_ASK', data)
                return data
            })
            .catch(console.error)
    },
    FETCH_JOBS({commit}) {
        return fetchJobsList()
            .then(({data}) => {
                commit('SET_JOBS', data)
                return data
            })
            .catch(console.error)
    },
    FETCH_USER({commit}, name) {
        return fetchUserInfo(name)
            .then(({data}) => {
                commit('SET_USER', data)
                return data
            })
            .catch(console.error)
    },
    FETCH_ITEM({commit}, id) {
        return fetchItemInfo(id)
            .then(({data}) => {
                commit('SET_ITEM', data)
                return data
            })
            .catch(console.error)
    },
    FETCH_LIST({commit}, pageName) {
        return fetchList(pageName)
            .then(({data}) => {
                commit('SET_LIST', data)
                return data
            })
            .catch(console.error)
    }
}