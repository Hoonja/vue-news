<template>
    <div>
        <p v-for="user in news" :key="user.id">
            <a v-bind:href="user.url">{{ user.title }}</a>
            <small>
                {{ user.time_ago }} by                 
                <router-link :to="`/user/${user.user}`">{{ user.user }}</router-link>
            </small>
        </p>
    </div>    
</template>

<script>
import { mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            news: 'fetchedNews'
        })
    },
    created() {
        this.$store.dispatch('FETCH_NEWS')
    },
}
</script>

<style>

</style>
