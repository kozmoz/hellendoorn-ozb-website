
process.env.VUE_APP_BUILD_DATE = new Date().toISOString().substr(0, 16);

export default {
  env: {
    // baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Nee tegen 25% OZB-verhoging! - gemeente Hellendoorn',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },

      {property: "og:url", content:"https://hellendoornozb.nl"},
      {property: "og:type", content:"website"},
      {property: "og:title", content:"Nee tegen 25% OZB-verhoging!"},
      {property: "og:description", content:"Wij als inwoners van de gemeente Hellendoorn maken een vuist tegen de gemeente door de verhoging van de OZB-belasting niet te betalen. de Automatische incasso voor de OZB-belasting zetten wij stop en wij maken een bedrag minus 25% over naar de gemeente"},
      {property: "og:image", content:"https://hellendoornozb.nl/fb3.png"},
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel:"manifest", href:"/site.webmanifest"}
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
