module.exports = {
    head: {
        title: 'Vue-chat',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Nuxt + Vuetify' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
        ]
    },
    debug: true,
    //serverMiddleware: ['~/api/index.js'],
    plugins: ['~/plugins/vuetify.js'],
    css: ['~/assets/style/main.styl'],
    configureWebpack: {
        devtool: 'source-map'
    }
}
