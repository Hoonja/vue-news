<template>
    <div>
        <list-item></list-item>        
    </div>    
</template>

<script>
import ListItem from '../components/ListItem'
import Bus from '../utils/bus.js'

export default {
    components: {
        ListItem,
    },
    created() {
        Bus.$emit('start:spinner')
        this.$store.dispatch('FETCH_NEWS')
        setTimeout(() => Bus.$emit('stop:spinner'), 1000)
    },
}
</script>