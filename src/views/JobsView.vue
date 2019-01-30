<template>
    <div>
        <p v-for="job in jobs" :key="job.id">
            <a :href="job.url">{{ job.title }}</a>
            <small>{{ job.time_ago }} by {{ job.domain }}</small>
        </p>
    </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
    computed: {
        ...mapGetters({
            jobs: 'fetchedJobs'
        })
        // ...mapState({
        //     jobs: state => state.jobs
        // })
        // jobs() {
        //     return this.$store.state.jobs
        // }
    },
    created() {
        this.$store.dispatch('FETCH_JOBS')
    }
}
</script>

<style>

</style>
