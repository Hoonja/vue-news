<template>
    <div>
        <p v-for="ask in asks" :key="ask.id">
            <router-link :to="`/item/${ask.id}`">{{ ask.title }}</router-link>
            <small>{{ ask.time_ago }} by {{ ask.user }}</small>
        </p>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            asks: 'fetchedAsk'
        })
        // asks() {
        //     return this.$store.state.asks
        // }
    },
    created() {
        this.$store.dispatch('FETCH_ASK')
    }
}
</script>

<style>

</style>
