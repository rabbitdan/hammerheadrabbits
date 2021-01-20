<template>
  <div class="site">
    <div class="site__text">
      <h3>{{site.header}}</h3>
      <p>{{site.text}}</p>
      <p>{{site.simpleName}}'s requirements were:</p>
      <ul>
        <li v-for="requirement in site.requirements">{{requirement}}</li>
      </ul>
      <p><a :href="site.link.url" class="textlink">{{site.link.linkText}}</a></p>
    </div>
    <div class="site__preview">
      <div class="site__imagebox">
        <slot name="imagebox">There is no image here right now and that is a shame.</slot>
      </div>
      <ul class="site__thumbs">
        <li v-for="siteThumb in site.siteThumbs" :key="siteThumb" @click="clickedThumb(siteThumb)">
          <v-lazy-image :src="require(`~/assets/images/dev/${site.name}_${siteThumb}.jpg`)" :src-placeholder="require(`~/assets/images/dev/lqp/${site.name}_${siteThumb}.png`)" alt="image" class="site__thumb"></v-lazy-image>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import development from "../data/development";
  export default {
    data() {
      return {
        siteImage: 'henryjacobsen_home'
      }
    },
    props: {
      currentSite: String,
      currentSiteImage: String
    },
    methods: {
      clickedThumb(siteThumb) {
        this.$emit('current-image', siteThumb);
      }
    },
    computed: {
      site() {
        return development.sites.find(
          site => site.name === this.currentSite
        );
      }
    }
  }
</script>

<style lang="scss" scoped>
  .site {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 10px 0 0 0;
    @media screen and (min-width: 700px) {
      margin: 50px 0 0 0;
    }
    @media screen and (min-width: 1023px) {
      flex-direction: row;
    }
    .site__text {
      flex-basis: 100%;
      @media screen and (min-width: 768px) {
        flex-basis: 35%;
      }
      h3 {
        line-height: 16px;
        margin: 0 0 20px 0;
      }
      p {
        margin: 0 0 20px 0;
        padding: 0 30px 0 0;
      }
      ul {
        margin: 0 0 20px 0;
        padding: 0 0 0 20px;
        li {
          margin: 0 0 20px 0;
        }
      }
    }
    .site__preview {
      flex-basis:100%;
      @media screen and (min-width: 768px) {
        flex-basis: 60%;
      }
      flex-direction: row;
      position:relative;
      @media screen and (min-width: 768px) {
        flex-direction: column;
      }
      .site__imagebox {
        height: auto;
        position: relative;
        .site__image {
          border: 1px solid #cdcdcd;
          height: auto;
          left: 0;
          max-width: 100%;
          top: 0;
          width: 100%;
        }
        .site__video {
          width: 100%;
        }
      }
      .site__thumbs {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        list-style: none;
        margin: 0 0 0 0;
        padding: 0 0 0 0;
        position: relative;
        width: 100%;
        li {
          border: 1px solid #cdcdcd;
          cursor: pointer;
          flex-basis: 31%;
          margin: 0 0 10px 0;
          @media screen and (min-width: 768px) {
            flex-basis: 16%;
          }
          img {
            display: block;
            max-width: 100%;
          }
        }
      }
    }
  }
</style>
