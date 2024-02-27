export default {
    // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
    // mode: "universal",
    // Global page headers: https://go.nuxtjs.dev/config-head
    server: { port: 4009 },

    publicRuntimeConfig: {
        PROJECT_TITLE: 'Garena',
    },

    head: {
        title: 'Garena',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            {
                hid: 'description',
                name: 'description',
                content:
                    'Garena',
            },
            {
                hid: 'og:site_name',
                name: 'og:site_name',
                property: 'og:site_name',
                content: 'Garena',
            },
            {
                hid: 'og:title',
                name: 'og:title',
                property: 'og:title',
                content: 'Garena',
            },
            {
                hid: 'og:description',
                name: 'og:description',
                property: 'og:description',
                content:
                    'Garena',
            },
            {
                hid: 'apple-mobile-web-app-title',
                name: 'apple-mobile-web-app-title',
                content: 'Garena',
            },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                hid: 'shortcut-icon',
                type: 'shortcut icon',
                href: '/favicon.ico',
            },
        ],
    },
    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['~/assets/css/style.scss', '~/node_modules/bootstrap-icons/font/bootstrap-icons.min.css'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '~/plugins/global_func.js',
        '~/plugins/call.js',
        // "~/plugins/vue2Editor.js",
        { src: '~/plugins/vue2Editor', mode: 'client' },
        { src: '~/plugins/slider', mode: 'client' },
        { src: '~/plugins/carousel3d', mode: 'client' },
        '~/plugins/indexedDB.js',
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        // "@nuxtjs/pwa",
        '@nuxtjs/i18n',
        'vue2-editor/nuxt',
        'vue-scrollto/nuxt',
        '@nuxtjs/eslint-module',
    ],

    bootstrapVue: {
        icons: true,
    },

    i18n: {
        defaultLocale: 'cn',
        locales: [
            { code: 'en', iso: 'en', file: 'en.json', display: 'English' },
            { code: 'cn', iso: 'cn', file: 'cn.json', display: '中文' },
            // { code: "mg", iso: "mg", file: "mg.json", display: "Mongolia" },
        ],
        langDir: '@/assets/lang',
        strategy: 'no_prefix',
        lazy: true,
        detectBrowserLanguage: false,
        onLanguageSwitched: (previous, current) => {
            if (process.client) {
                const DATE = new Date()
                DATE.setTime(DATE.getTime() + 365 * 24 * 3600 * 1000)
                document.cookie = 'i18n_redirected=' + current + '; path=/; expires=' + DATE.toUTCString()
            }
        },
        /* module options */
    },

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        workbox: false,

        manifest: {
            lang: 'en',
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        loaders: {
            scss: {
                implementation: require('sass'),
            },
        },
        extend(config, ctx) {
            config.node = {
                fs: 'empty',
            }
        },
    },
    router: {
        mode: 'history',
    },
    serverMiddleware: [
        // require('cookie-session'),
        '~/api/index.js',
    ],
}
