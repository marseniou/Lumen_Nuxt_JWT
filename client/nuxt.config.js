
export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  devModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
   
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    
    '@nuxtjs/auth',
     // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
  ],
  env: {
    siteName: process.env.SITE_NAME || 'ImageandSound'
  },
  auth:{
    redirects: {
      home: '/home',
      logout: '/'
    },
    strategies: {
      local:{
        endpoints: {
          login: { url: '/auth/login', method: 'post', propertyName: 'access_token' },
          logout: { url: '/auth/logout', method: 'post' },
          user: { url: '/auth/me', method: 'post', propertyName: 'user' },
          refresh: {url: '/auth/refresh', method:'post', propertyName: 'access_token'}
        }
      }
    }
  },
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true,
    prefix: 'http://imageandsound.test'
  },
  proxy: {
    '/api/': { target: '/api/v1/', pathRewrite: {'^/api/': ''} },
    '/api2/': { target: '/auth/', pathRewrite: {'^/api/': ''} }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    }
  }
}
