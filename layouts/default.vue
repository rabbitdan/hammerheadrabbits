<template>
  <div class="everything">
    <a class="skip-link" href="#main">Skip to main</a>
    <TheNavigation />
    <main id="main" class="main" tabindex="-1">
      <nuxt />
    </main>
    <footer class="footer">
      <a href="mailto:dan&#64;hammerheadrabbits.com" name="mail to link for my email" class="textlink">dan&#64;hammerheadrabbits.com</a>
      <strong class="date">©{{ new Date().getFullYear() }}</strong>
    </footer>
  </div>
</template>

<script>
  import TheNavigation from '~/components/TheNavigation.vue';
  export default {
    head () {
      return {
        meta: [
          { hid: 'og:site_name', property: 'og:site_name', content: 'Hammerhead Rabbits' },
          { hid: 'og:type', property: 'og:type', content: 'website' },
          { hid: 'og:locale', property: 'og:locale', content: 'en_GB' },
          { hid: 'og:title', property: 'og:title', content: 'Hammerhead Rabbits' },
          { hid: 'og:description', property: 'og:description', content: 'Web development, art, photography, occasional moving parts' },
          { hid: 'og:url', property: 'og:url', content: 'http://www.hammerheadrabbits.com' },
          { hid: 'og:image', property: 'og:image', content: 'https://rabbits.s3.eu-west-2.amazonaws.com/general/crosseye-rabbit.png' },
          { hid: 'og:image:type', property: 'og:image:type', content: 'png' },
          { hid: 'twitter:card', name: 'twitter:card', content: 'Hammerhead Rabbits' },
          { hid: 'twitter:creator', name: 'twitter:creator', content: '@rabbitdan' },
          { hid: 'twitter:image:alt', name: 'twitter:image:alt', content: 'hammerheadrabbits.com' },
          { hid: 'twitter:domain', name: 'twitter:domain', content: 'Hammerhead Rabbit - drawing of a crosseyed rabbit' },
          { hid: 'twitter:url', name: 'twitter:url', content: 'http://www.hammerheadrabbits.com' },
          { hid: 'twitter:title', name: 'twitter:title', content: 'Hammerhead Rabbits' },
          { hid: 'twitter:description', property: 'twitter:description', content: 'Web development, art, photography, occasional moving parts' },
          { hid: 'twitter:image', name: 'twitter:image', content: 'https://rabbits.s3.eu-west-2.amazonaws.com/general/crosseye-rabbit.png' }
        ]
      }
    },
    data() {
      return {
      }
    },
    components: {
      TheNavigation
    },
    methods: {

    }
  }
</script>

<style lang="scss">
  .main {
    &:focus {
      //background: rgba(222,222,222,0.8);
      outline: hotpink;
    }
  }
  .skip-link {
    position: absolute;
    top: -40px;
    left: 0;
    background: #000000;
    color: white;
    padding: 8px;
    z-index: 100;
  }
  .skip-link:focus {
    top: 0;
  }
  .everything {
    display: flex;
    flex-direction: column;
  }
  .footer {
    border-top: 1px solid #000000;
    flex-shrink: 0;
    flex-direction: column;
    display: flex;
    justify-content: space-between;
    margin: 20px 30px 0 30px;
    padding: 10px 0;
    @media screen and (min-width: 500px) {
      flex-direction: row;
      margin: 20px 50px 0 50px;
    }
  }
</style>

