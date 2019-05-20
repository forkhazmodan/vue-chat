export const state = () => ({
    signUpDialog: false,
    signInDialog: false
})

export const mutations = {
    toggleSignUpDialog (state, status) {
        console.log(status, 'test2')
        state.signUpDialog = status
    },
    toggleSignInDialog (state, status) {
        console.log(status, 'test1')
        state.signUpDialog = status
    }
}
