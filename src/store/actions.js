import { fetchUserInfo, fetchItemInfo, fetchList } from '../api'

export default {
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