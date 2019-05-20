<template>
    <div>
<!--        <v-dialog v-model="signUpDialog" max-width="500px">-->
<!--            <v-card>-->
<!--                <v-card-title>-->
<!--                    Dialog 2-->
<!--                </v-card-title>-->
<!--                <v-card-actions>-->
<!--                    <v-btn color="primary" flat @click="toggleSignUpDialog(false)">Close</v-btn>-->
<!--                </v-card-actions>-->
<!--            </v-card>-->
<!--        </v-dialog>-->
    </div>
</template>

<script>
    import dialogsMixin from '~/mixins/dialogs'

    export default {
        name: "SignUp",
        mixins: [dialogsMixin],
        created() {
            console.log(this.signUpDialog)
        }
    }
</script>

<style scoped>

</style>
