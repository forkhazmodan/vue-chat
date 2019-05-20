<template>
    <v-toolbar dark color="primary">
        <v-toolbar-side-icon></v-toolbar-side-icon>

        <v-toolbar-title class="white--text">Vue-chat</v-toolbar-title>

        <v-spacer></v-spacer>

        <v-btn @click="toggleSignUpDialog(true)">
            Sign-up
        </v-btn>

        <v-btn @click="toggleSignInDialog(true)">
            Sign-in
        </v-btn>

        <sign-up-dialog></sign-up-dialog>
        <sign-in-dialog></sign-in-dialog>
    </v-toolbar>
</template>

<script>
    import dialogsMixin from '~/mixins/dialogs'
    import SignUpDialog from '~/components/dialogs/SignUp'
    import SignInDialog from '~/components/dialogs/SignIn'

    export default {
        name: "ToolBar",
        mixins: [dialogsMixin],
        components: {SignUpDialog, SignInDialog},
        methods: {

        }
    }
</script>

<style scoped>

</style>
