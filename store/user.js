export const state = () => ({
    isLogged: false,
    counter: 0
})

export const actions = {

    signUp (context, type) {
        return true
    },

    signIn (commit, dispatch) {
        return false
    }
}

export const getters = {

    getLogged (state) {
        return state.isLogged
    }
}

export const mutations = {

    increment (state) {
        state.counter++
    }

}
