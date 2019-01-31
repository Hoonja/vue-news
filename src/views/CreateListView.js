import ListView from './ListView'
import Bus from '../utils/bus.js'

export default function createListView(name) {
    return {
        name,
        mounted() {
            Bus.$emit('stop:spinner')
        },
        render(createElement) {
            return createElement(ListView);
        }
    }
}