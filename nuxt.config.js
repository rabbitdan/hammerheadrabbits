export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Hammerhead Rabbits',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Hammerhead Rabbits - Web development, art, photography, occasional moving parts' }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    script: [
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/gsap.min.js',
        integrity: 'sha384-aeOf8PUQ30Impyyio8FDxFHefK/3nHBJWjuT1u1FnJHZU+ro9q9E9cXUzfWBk0kT',
        crossorigin: 'anonymous',
        defer: true
      }
      // {
      //   src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollToPlugin.min.js',
      //   integrity: 'sha384-sEM5g9GXGkLDax3gEbZeFpE7MrdX065K5lKbueFlZ9eUTSIQaLs9Be4NGq/gQ54w',
      //   crossorigin: 'anonymous',
      //   defer: true
      // },
      // {
      //   src: 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.5.1/ScrollTrigger.min.js',
      //   integrity: 'sha384-IqFDa6K9SJzsScnaQ67Y8rd0qD38ZdhpMnvvHT8HyIIo4zwrxa/YDL5edt/MmN8W',
      //   crossorigin: 'anonymous',
      //   defer: true
      // }
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/sass/_globals.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {src: '~/plugins/globals.js'}
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [],
  /*
  ** Nuxt.js modules
  */
  modules: [
    '@nuxtjs/sitemap'
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    transpile: ['gsap']
  },
  sitemap: {
    hostname: 'https://www.hammerheadrabbits.com',
    gzip: true,
    exclude: [],
    routes: [
      '/development',
      '/art',
      '/art/patternrecognition',
      '/art/sketchbook',
      '/art/sketchbook/duplicate',
      '/art/sketchbook/leuchtturm',
      '/art/sketchbook/handmade',
      '/art/sketchbook/a6',
      '/photography',
      '/photography/england',
      '/photography/germany',
      '/photography/italy',
      '/photography/japan',
      '/photography/netherlands',
      '/photography/romania',
      '/photography/scotland',
      '/photography/serbia',
      '/photography/us',
      '/photography/wales',
      '/photography/goo',
      '/photography/mannequins',
      '/photography/museums',
      '/photography/piles',
      '/photography/portraits',
      '/photography/humansplusnature',
      '/photography/tamagawa',
      '/photography/travel',
      '/photography/walkways',
      '/photography/waterways',
      '/about'
    ]
  }
}
