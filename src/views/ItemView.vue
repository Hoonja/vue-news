<template>
    <div>
        <section>
            <user-profile :info="item">
                <div slot="username">
                    <router-link :to="`/user/${item.user}`">{{ item.user }}</router-link>
                </div>                
                <template slot="time">{{ 'Posted ' + item.time_ago }}</template>
            </user-profile>          
        </section>
        <section>
            <h2>{{ item.title }}</h2>
        </section>
        <section>
            <div v-html="item.content"></div>
        </section>
    </div>    
</template>

<script>
import { mapGetters } from 'vuex'
import UserProfile from '../components/UserProfile'

export default {
    components: {
        UserProfile
    },
    computed: {
        // item() {
        //     return this.$store.state.item
        // }
        ...mapGetters({
            item: 'fetchedItem'
        })
    },
    created() {
        const itemId = this.$route.params.id
        this.$store.dispatch('FETCH_ITEM', itemId)
    }
}
</script>

<style scoped>
.user-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
}

.fa-user {
    font-size: 2rem;
}

.user-description {
    padding-left: 8px;
}

.time {
    font-size: 0.7rem;
}
</style>
