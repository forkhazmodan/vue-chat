<template>
    <div>
        <v-layout>
            <v-btn @click="increment()">
                {{ counter }}
            </v-btn>
        </v-layout>
    </div>
</template>

<script>

    import userMixin from '~/mixins/user'

    export default {
        name: "Poligon",
        mixins: [userMixin],
        mounted () {
            console.log('Logged', this.isLogged)
        },
        computed: {
            counter () { return this.$store.state.user.counter },
        }
    }
</script>

<style scoped>

</style>
