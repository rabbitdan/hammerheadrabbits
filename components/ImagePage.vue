<template>
  <div class="container">
    <h1 v-if="dataReady" class="content__header">{{pageData.name}}</h1>
    <transition name="fade">
      <LightGallery
        v-if="dataReady"
        :images="pageData.images"
        :index="index"
        :disable-scroll="true"
        @close="index = null"
      />
    </transition>
    <ul v-if="dataReady" class="thumb-container">
      <li
        v-for="(image, imageIndex) in pageData.images"
        :key="imageIndex"
        @click="index = imageIndex"
        class="drawbox image__wrap">
        <v-lazy-image
          :src="require(`~/assets/images/${image.url}@0.25x.jpg`)"
          :src-placeholder="require(`~/assets/images/${image.url}@lqp.png`)"
          class="draw__image image__thumb"
          use-picture>
          <source :srcset="require(`~/assets/images/${image.url}@0.25x.webp`)"
                  type="image/webp" />
        </v-lazy-image>
        <div class="draw image__text">
          <h3 class="image__header draw__header"
              :class="`image__header--${pageData.slug}`">
            {{image.title}}
          </h3>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import LightGallery from "@/components/light-gallery";
  export default {
    name: 'ImagePage',
    components: {
      LightGallery
    },
    data() {
      return {
        clicked: false,
        isActive: true,
        sectionSlug: 'blank',
        sectionType: 'blank',
        pageData: null,
        dataReady: false,
        index: null
      }
    },
    mounted() {
      this.getPageData()
    },
    methods: {
      async getPageData() {
        this.pageData = await fetch(
          `https://rabbits.s3.eu-west-2.amazonaws.com/data/${this.$route.params.id}-nouveau.json`
        ).then(res => res.json())
        this.dataReady = true
      }
    }
  }
</script>

<style lang="scss" scoped>
  .thumb-container {
    display: block;
    margin: 0 0 0 0;
    overflow: hidden;
    padding: 0 0 0 0;
    position: relative;
    .image__wrap {
      display: inline-block;
      //height: 200px;
      margin: 0 10px 20px 10px;
      position: relative;
      overflow: hidden;
      max-width: 100%;
      width: auto;
      @media screen and (min-width: 600px) {
        height: 200px;
        margin: 0 20px 20px 0;
        width: auto;
      }
      .image__thumb {
        height: 100%;
        margin: 0;
        max-width: 100%;
        object-fit: cover;
        width: auto;
        .v-lazy-image-loaded, img {
          height: 100%;
          width: auto;
          object-fit: cover;
        }
      }
      .image__header {
        font-size: 6vw;
        line-height: 5vw;
        overflow-wrap: break-word;
        padding: 0 0 5px 5px;
        word-break: break-word;
        @media screen and (min-width: 550px) {
          font-size: 8vw;
          line-height: 6.5vw;
        }
        @media screen and (min-width: 768px) {
          font-size: 2.5vw;
          line-height: 2.3vw;
          &--goo {
            font-size: 1.4vw;
            line-height: 1.2vw;
          }
        }
      }
    }
  }
  .fade-enter-active, .fade-leave-active {
    transform: translateY(0);
    transition: opacity .2s;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }
</style>
