<template>
    <v-container fluid class="pa-0">
        <toolbar></toolbar>
        <poligon></poligon>
    </v-container>
</template>

<script>

    import ToolBar from '~/components/ToolBar'
    import Poligon from '~/components/Poligon'

    export default {
        components: {
            'toolbar': ToolBar,
            'poligon': Poligon
        },
        data () {
            return {
                rooms: [
                    {key: 1},
                    {key: 2},
                    {key: 3}
                ]
            }
        }
    }

</script>

<style>

</style>
