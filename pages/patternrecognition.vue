<template>
  <div class="content container patternrecognition">
    <h1 class="content__header">Pattern Recognition</h1>
    <div class="pr">
      <div id="pr__imagebg" class="pr__imagebg">
        <div id="close" class="close" @click="close()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 105 111">
            <path d="M51.9 68.7c-8.9 9.6-18 18.2-25.4 28.1-3.2 4.3-5.7 8.7-10.6 11-5 2.3-12.6-1.4-13-6.9-.1-1.8 1.6-4 2.9-5.7 1-1.2 3.3-1.6 3.9-2.9C14.4 82 24.2 76.5 31.4 68.5l8.9-10.1c2.9-3 3.2-5.9.3-9.1L18.5 23.6a84.4 84.4 0 01-5.1-6.7c-1.9-2.8-2-5.7 1-7.9s6-1.7 8.5.9L41.2 29c3.8 4.1 7.4 8.5 11.6 13.4 2.2-2.4 4.2-4.5 6-6.8 8-10 15.8-20.2 23.9-30.1C87 .2 91.8.4 95.4 5.5c2.2 3 1.9 5.7-.4 8.6C85.2 26.5 75.7 39 65.6 51.2c-3.6 4.4-3.4 7.5-.4 12.2 7 10.7 16.9 18.2 26.3 26.4l2.2 2c4.4 4.1 5.5 7.8 3.2 10.7-2.3 2.9-7.9 3.5-11.8-.2-10.4-9.7-20.3-20-30.4-30.1-.7-.7-1.3-1.7-2.8-3.5z"/>
          </svg>
        </div>
      </div>
      <v-lazy-image
        :src="require(`~/assets/images/patternrecognition/originals/lg-${ clicked }.jpg`)"
        :src-placeholder="require(`~/assets/images/patternrecognition/lqp/${ clicked }.png`)"
        alt="Pattern Recognition Exhiibition"
        class="pr__theimage">
        <source :srcset="require(`~/assets/images/patternrecognition/originals/lg-${ clicked }.webp`)"
                type="image/webp" />
      </v-lazy-image>
      <div id="thumb-container" class="thumb-container">
        <div class="pr__wrap"
             v-for="primage in primages"
             :key="primage.id"
             @click="clicked = primage.id,
             mobileShow()">
          <v-lazy-image
            :src="require(`~/assets/images/patternrecognition/thumbs/${ primage.id }.jpg`)"
            :src-placeholder="require(`~/assets/images/patternrecognition/lqp/${ primage.id }.png`)"
            :alt="primage.alt"
            class="pr__thumb"
            use-picture>
            <source :srcset="require(`~/assets/images/patternrecognition/thumbs/${ primage.id }.webp`)"
                    type="image/webp" />
          </v-lazy-image>
        </div>
      </div>
    </div>

    <carousel :starting-image="0" :images="prexhibition" class="carousel"></carousel>

    <div class="pr__text">
      <h2 class="pr__textheader">Pattern Recognition Exhibition</h2>
      <h4 class="pr__name">Daniel Fone</h4>
      <p>I’ve been drawing on the pages of Mills and Boon novels for years now. I had a stack of them lying around. I was part of a group who did art workshops and led one of those asking people to remodel pages from one of these novels. ‘Awaken to Danger’, it was called. We had a fun afternoon. It was largely inspired by local artist Tom Phillips’ project ‘A Humument’. Look it up online, it’s brilliant.</p>
      <p>After that afternoon I carried on drawing the pages in my own time. It was nice having a space to explore visual ideas in a contained way. Sometimes I would build on the original page content, sometimes I would just use it as a page of a sketchbook. It was a portable thing and could be done in small compressed bursts, so was ideal for me bearing in mind I was smothered by work at the time. It was a good creative outlet in a period when a creative outlet was barely possible. So far so ho hum.</p>
      <p>After a while I started to think about what I was doing. I noticed that there were themes and similarities developing between pages. Some of them were series. I started burrowing in to that. I showed friends what I’d done sometimes and laid some of the pages out. On doing that the pages looked different as a group. Juxtapositions would arise between pages quite accidentally. I started to think a whole room full of these pages would be fun, so this became the goal. I started to draw block group pieces where written phrases would spread across several pages. Many of the pages remained fiercely contained and detail driven. Others are patterns in their own right, formed of separate blocks coming together to create a consistent visual rhythm within their own frame of reference.</p>
      <p>It has not been lost on me that this concern with relationships between pages is kind of fun when the base material for the work is Mills and Boon novels. They commonly offer a very particular view of relationships. What can people be when they are together? Much of that seeps out in to the drawings, both from the original text or elsewhere. You may be wondering if I hate the novels. I don’t. Some of them are better than others.  I will say that I don’t think I have the right to sneer at them and it’s clearly evolved as a genre. Saying that, before drawing on some pages I’ll spend a minute chewing my fist in horror at what I have just read.</p>
      <p>I have some transparent influences. I love Jean-Michel Basquiat because he seemed to munch up masses of information about the world he was seeing and shot it all back out in this extraordinary scattergun melee. The tension in the negative space between Franz Kline’s broad brushstrokes makes my hair stand up sometimes.</p>
      <p>But seriously, this is a pretty simple exhibition. I like drawing on the ripped out pages of cheap romance novels. I hope that somewhere in the middle of all of this I have captured a bit of the spirit of these strange times. I also hope you’ll enjoy a few of the pages. Look at them close up, step back, look at them in context. Thanks for coming.</p>
    </div>
  </div>
</template>

<script>
import Carousel from '../components/Carousel.vue';
import primages from '../data/pr.js';
import prexhibition from '../data/pr__exhibition.js';
export default {
  metaInfo() {
    return {
      title: 'Pattern Recognition',
      meta: [
        {
          name: "description",
          content: "Pattern Recognition exhibition"
        }
      ]
    }
  },
  data() {
    return {
      clicked: 'aflameover',
      primages: primages,
      prexhibition: prexhibition
    }
  },
  components: {
    'carousel': Carousel
  },
  methods: {
    close(){
      if(process.client){
        if(this.windowWidth < 769) {
          gsap.to('#pr__imagebg', {duration: 0.25, autoAlpha: 0, display: 'none', opacity: 0})
          gsap.to('.pr__theimage', {duration: 0.25, autoAlpha: 0, display: 'none', opacity: 0, y: 50});
        }
      }
    },
    mobileShow(){
      if(process.client){
        if(this.windowWidth < 769) {
          gsap.to('#pr__imagebg', {duration: 0.25, autoAlpha: 1, display: 'block', opacity:1});
          gsap.to('.pr__theimage', {duration: 0.25, autoAlpha: 1, display: 'block', opacity:1,  y:0});
        }
      }
    }
  },
  computed: {
    windowWidth() {
      let windowWidth;
      return windowWidth = window.innerWidth;
    }
  }
}
</script>

<style lang="scss" scoped>
.pr {
  display: grid;
  grid-gap: 2%;
  grid-template-columns: 100%;
  grid-template-areas: "thumbs";
  position: relative;
  @media screen and (min-width: 769px) {
    grid-template-columns: 33% 65%;
    grid-template-areas: "image thumbs";
  }
  .pr__imagebg {
    background: rgba(255,255,255,0.85);
    display: none;
    height: 100%;
    position: fixed;
    right: 0;
    top: 0;
    width: calc(100% - 30px);
    z-index: 500;
  }
  .pr__theimage {
    -webkit-box-shadow: 0px 0px 30px 20px rgba(255,255,255,1);
    -moz-box-shadow: 0px 0px 30px 20px rgba(255,255,255,1);
    box-shadow: 0px 0px 30px 20px rgba(255,255,255,1);
    display: none;
    justify-content: center;
    max-width: 90vw;
    position: fixed;
    top: 110px;
    transform: translateY(50px);
    width: auto;
    z-index: 600;
    @media screen and (min-width: 769px) {
      display: block;
      left: 0;
      margin: 0 0 0 0;
      max-height: calc(100vh - 140px);
      opacity: 1;
      position: sticky;
      top: 130px;
      transform: translateY(0);
      max-width: 100%;
      z-index: auto;
    }
  }
  .thumb-container {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    /*grid-gap: 10px;*/
    position: relative;
    @media screen and (min-width: 500px) {
      grid-template-columns: repeat(3, 33%);
    }
    @media screen and (min-width: 769px) {
      justify-content: end;
      grid-template-columns: repeat(4, 25%);
    }
    @media screen and (min-width: 1500px) {
      grid-template-columns: repeat(6, 16%);
    }
    .pr__wrap {
      cursor: pointer;
      .pr__thumb {
        height: auto;
        width: 100%;
        .v-lazy-image {
          height: auto;
        }
      }
    }
  }
  .v-lazy-image {
    opacity: 0;
    transition: 0.1s;
    &-loaded {
      opacity: 1;
      transition: 0.1s;
    }
  }
}
.pr__text {
  border: 1px solid #cdcdcd;
  margin: 80px 0;
  padding: 20px;
  text-align: left;
  @media screen and (min-width: 769px) {
    padding: 100px;
  }
  @media screen and (min-width: 1200px) {
    padding: 200px;
  }
  .pr__name {
    font-weight: bold;
  }
  p {
    margin: 30px 0 0 0;
  }
}
.scale-enter-active, .scale-leave-active {
  opacity: 1;
  transition: all 0.25s ease-out;
  transform: scale(1);
}
.scale-enter, scale-leave-to {
  opacity: 0;
  transform: scale(0);
}
</style>
