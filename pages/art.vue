<template>
  <div class="container">
    <section id="home__art" class="art">
      <h1 class="content__header">Art</h1>
      <div class="artworks">
        <nuxt-link to="/patternrecognition" id="artwork__patternrecognition" class="artwork drawbox">
          <v-lazy-image :src="require('~/assets/images/art/patternrecognitionsq-thumb.jpg')" :src-placeholder="require('~/assets/images/art/lqp/patternrecognitionsq-thumb.png')" height="615" width="615" class="draw__image" alt="Pattern Recognition"></v-lazy-image>
          <div class="draw artwork__text">
            <h3 class="artwork__header">Pattern Recognition</h3>
          </div>
        </nuxt-link>
        <nuxt-link to="/sketchbook" id="artwork__sketchbook" class="artwork drawbox">
          <v-lazy-image :src="require('~/assets/images/art/sketchbooksq-thumb.jpg')" :src-placeholder="require('~/assets/images/art/lqp/sketchbooksq-thumb.png')" class="draw__image" alt="Sketchbook"></v-lazy-image>
          <div class="draw artwork__text">
            <h3 class="artwork__header">Sketchbook</h3>
          </div>
        </nuxt-link>
      </div>
    </section>
  </div>
</template>

<script></script>

<style lang="scss">
.art {
  .artworks {
    display: grid;
    grid-gap:25px;
    grid-template-columns: 100%;
    justify-content: space-evenly;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    @media screen and (min-width: 768px) {
      grid-gap:10%;
      grid-template-columns: 45% 45%;
      margin: 3% 10%;
    }
    .artwork {
      border:1px solid lighten(#212121, 85%);
      list-style: none;
      margin: 0 0 15px 0;
      position: relative;
      @media screen and (min-width: 768px) {
        max-height: 100vh;
      }
      .artwork__image {
        display:block;
        max-width:100%;
      }
      .artwork__text {
        background-color: rgba(255,255,255,0);
        height: 100%;
        left:0;
        position:absolute;
        top:0;
        transition:0.3s;
        width: 100%;
      }
      .artwork__header {
        bottom:0;
        color: #ffffff;
        font-size:7vw;
        line-height: 5.5vw;
        padding:0 10px;
        position:absolute;
        right:0;
        text-shadow: 0px 0px 1px black !important;
        transition:0.4s;
        @media screen and (min-width: 768px) {
          font-size: 3.5vw;
          line-height: 3vw;
        }
      }
      .artwork__list {
        bottom:40px;
        color: #212121;
        opacity:0;
        padding:10px;
        position:absolute;
        right:0;
        text-align:right;
        transform:translateX(-30px);
        transition:0.5s;
        li {
          list-style-position: inside;
        }
      }
      &:hover {
        .artwork__image {
        }
        .artwork__text {
          background-color: rgba(255,255,255,0.8);
          opacity:1;
          transition:0.5s;
        }
        .artwork__header {
          color:#212121;
          opacity:1;
          transition:0.5s;
          transform:translateX(0px);
        }
        .artwork__list {
          opacity:1;
          transition:0.5s;
          transform:translateX(0px);
        }
      }
    }
  }
}
</style>
