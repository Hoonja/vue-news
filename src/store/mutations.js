export default {
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