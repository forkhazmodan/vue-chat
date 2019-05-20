import { mapMutations } from 'vuex'
import { mapState } from 'vuex'

export default {
    methods: {
        ...mapMutations({
            toggleSignUpDialog: 'dialogs/toggleSignUpDialog',
            toggleSignInDialog: 'dialogs/toggleSignInDialog',
        })
    },

    computed: {
        ...mapState({
            signUpDialog: 'dialogs/signUpDialog',
            signInDialog: 'dialogs/signInDialog'
        })
    }
}
