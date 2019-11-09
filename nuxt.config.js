
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
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' },

      {propery: "og:url", content:"https://hellendoornozb.nl"},
      {propery: "og:type", content:"website"},
      {propery: "og:title", content:"Nee tegen 25% OZB-verhoging!"},
      {propery: "og:description", content:"Wij als inwoners van de gemeente Hellendoorn maken een vuist tegen de gemeente door de verhoging van de OZB-belasting niet te betalen. de Automatische incasso voor de OZB-belasting zetten wij stop en wij maken een bedrag minus 25% over naar de gemeente"},
      {propery: "og:image", content:"/fb.png"},
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
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
  ],
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
