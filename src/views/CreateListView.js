import ListView from './ListView'
import Bus from '../utils/bus.js'

export default function createListView(name) {
    return {
        name,
        created() {
            Bus.$emit('start:spinner')
            this.$store.dispatch('FETCH_LIST', this.$route.name)
                .then(() => {
                    Bus.$emit('stop:spinner')
                })
                .catch((err) => {
                    console.error(err)
                    Bus.$emit('stop:spinner')
                })
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}