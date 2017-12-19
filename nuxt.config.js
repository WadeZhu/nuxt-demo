module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      { src: 'http://g.tbcdn.cn/mtb/lib-flexible/0.3.4/??flexible_css.js,flexible.js', ssr: true }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  css: [
    { src: '~static/reset.css' },
    { src: 'element-ui/lib/theme-chalk/index.css' },
    { src: 'mint-ui/lib/style.css' }
  ],
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, ctx) {
      if (ctx.dev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    postcss: [
      require('postcss-px2rem')({ remUnit: 75 }),
      require('autoprefixer')({
        browsers: ['iOS >= 7', 'Android >= 4.1']
      })
    ]
  },
  // plugins: [
  //   { src: '~plugins/mint-ui', ssr: true }
  // ],
  vender: [
    'element-ui', 'axios', 'mint-ui'
  ]
}
