<template>
  <div class="container content">
    <h1 class="content__header">Sketchbook</h1>
    <nuxt-link to="/sketchbook/leuchtturm" id="sketchbook__leuchtturm" class="sketchbook__link drawbox">
      <v-lazy-image :src="require('~/assets/images/sketchbook/leuchtturm/leuchtturm-faces-colour@0.25x.jpg')" :src-placeholder="require('~/assets/images/sketchbook/leuchtturm/leuchtturm-faces-colour@lqp.png')" class="sketchbook__image draw__image" alt="leuchtturm"></v-lazy-image>
      <div class="draw sketchbook__text">
        <h3 class="draw__header sketchbook__header">Leuchtturm</h3>
      </div>
    </nuxt-link>

    <nuxt-link to="/sketchbook/handmade" id="sketchbook__handmade" class="sketchbook__link drawbox">
      <v-lazy-image :src="require('~/assets/images/sketchbook/handmade/handmade-onthis@0.25x.jpg')" :src-placeholder="require('~/assets/images/sketchbook/handmade/handmade-onthis@lqp.png')" class="sketchbook__image draw__image" alt="handmade"></v-lazy-image>
      <div class="draw sketchbook__text">
        <h3 class="draw__header sketchbook__header">Handmade</h3>
      </div>
    </nuxt-link>

    <nuxt-link to="/sketchbook/duplicate" id="sketchbook__duplicate" class="sketchbook__link drawbox">
      <v-lazy-image :src="require('~/assets/images/sketchbook/duplicate/duplicate-badspam@0.25x.jpg')" :src-placeholder="require('~/assets/images/sketchbook/duplicate/duplicate-badspam@lqp.png')" class="sketchbook__image draw__image" alt="duplicate"></v-lazy-image>
      <div class="draw sketchbook__text">
        <h3 class="draw__header sketchbook__header">Duplicate</h3>
      </div>
    </nuxt-link>

    <nuxt-link to="/sketchbook/a6" id="sketchbook__a6" class="sketchbook__link drawbox">
      <v-lazy-image :src="require('~/assets/images/sketchbook/a6/a6-tmouths@0.25x.jpg')" :src-placeholder="require('~/assets/images/sketchbook/a6/a6-tmouths@lqp.png')" class="sketchbook__image draw__image" alt="a6"></v-lazy-image>
      <div class="draw sketchbook__text">
        <h3 class="draw__header sketchbook__header">a6</h3>
      </div>
    </nuxt-link>
  </div>
</template>

<script>

</script>

<style lang="scss">
  .container {
    .sketchbook__link {
      display: inline-block;
      margin: 0 0 20px 0;
      @media screen and (min-width: 500px) {
        margin: 0 20px 20px 0;
      }
      .sketchbook__image {
        height: auto;
        width: 100%;
        @media screen and (min-width: 500px) {
          height: 350px;
          width: auto;
        }
      }
    }
    .image__header {
      text-shadow: 0px 0px 1px rgba(0, 0, 0, 1) !important;
      transition: 0.3s;
      font-size: 15vw;
      line-height: 13vw;
      overflow-wrap: break-word;
      word-break: break-word;
      @media screen and (min-width: 550px) {
        font-size: 2.5vw;
        line-height: 2vw;
      }
      @media screen and (min-width: 768px) {
        font-size: 1.9vw;
        line-height: 1.7vw;
      }
      &:hover {
        text-shadow: none !important;
        transition: 0.3s;
      }
    }
  }
</style>
