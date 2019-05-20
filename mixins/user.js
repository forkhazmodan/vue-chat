import { mapMutations } from 'vuex'
import { mapGetters } from 'vuex';

export default {
    methods: {
        ...mapMutations({
            increment: 'user/increment'
        })
    },
    computed: {
        ...mapGetters({
            isLogged: 'user/getLogged'
        })
    },
}
