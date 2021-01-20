<template>
    <div
      v-if="typeof index === 'number'"
      class="light-gallery"
      @touchstart="touchstartHandler"
      @touchmove="touchmoveHandler"
      @touchend="touchendHandler">
      <div class="light-gallery__modal" :style="`background: ${background}`">
        <div :class="['light-gallery__spinner', !isImageLoaded || 'hide']">
          <div
            class="light-gallery__dot"
            :style="`border-color: ${interfaceColor}`"
          />
          <div
            class="light-gallery__dot"
            :style="`border-color: ${interfaceColor}`"
          />
          <div
            class="light-gallery__dot"
            :style="`border-color: ${interfaceColor}`"
          />
        </div>
        <div class="light-gallery__container">
          <ul class="light-gallery__content">
            <li
              v-for="(image, imageIndex) in formattedImages"
              :key="imageIndex"
              class="light-gallery__image-container"
              :class="[currentIndex === imageIndex ? activeClass : '', inactiveClass]">
              <div class="light-gallery__image">
                <picture>
                  <source :srcset="shouldPreload(imageIndex) ? `https://rabbits.s3.eu-west-2.amazonaws.com/${image.url}.webp` : false"
                          type="image/webp" />
                  <source :srcset="shouldPreload(imageIndex) ? `https://rabbits.s3.eu-west-2.amazonaws.com/${image.url}.jpg` : false"
                          type="image/jpeg" />
                  <img :src="shouldPreload(imageIndex) ? `https://rabbits.s3.eu-west-2.amazonaws.com/${image.url}.jpg` : false"
                       :alt="image.alt"
                       :ref="`lg-img-${imageIndex}`"
                       @load="imageLoaded($event, imageIndex)">
                </picture>
                <div
                  v-show="image.title && isImageLoaded"
                  class="light-gallery__text">
                  {{ image.title }}
                </div>
              </div>
            </li>
          </ul>
        </div>
        <button
          v-if="currentIndex > 0"
          class="light-gallery__prev"
          @click="prev()">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" viewBox="0 0 588.4 657.9">
            <path fill="#000000" d="M329 419.8c-6.5.2-11.7-3-16.7-6.6-4.6-3.3-8.7-7.3-12.8-11.2-9.3-8.8-18.4-17.8-27.8-26.4-5.4-5-11.3-9.4-17-14a177.2 177.2 0 01-20.1-19c-6-6.7-12-13.4-18.8-19.5l-17.3-15c-5-4.5-10-8.8-14.3-14-4-4.8-7.3-9.9-6.9-16.5.3-4.9 2.7-9 5.5-12.7a137.6 137.6 0 0118.2-19.1l7.9-7.5q20-18.2 39.5-37.1c7-6.8 13.9-13.6 21-20.3 7.1-6.9 14.4-13.6 22-20.1 5.8-5.1 11.3-10.5 18-14.7a28.8 28.8 0 0113.9-4.9 22.6 22.6 0 0113 3.6 44.9 44.9 0 0114.3 13.7c5 7.7 4.1 12.9-1 19.8-5 6.6-11.7 11.1-18.4 15.7-5.2 3.7-10 7.8-15 11.8a473 473 0 00-16.5 14.1l-10.4 9.5-17.5 15.5c-6.9 6.1-14 12-19.3 19.7a20 20 0 00-4 10.8c-.2 5.3 2 9.6 5 13.7 5.7 7.5 12.7 13.7 19.6 20l11 10c5.8 5.6 12 11 18 16.2 4.9 4 9.5 8.3 14.3 12.5 5 4.4 10.3 8.3 15.5 12.4 7.8 6 15.3 12.5 20.7 20.9a25.3 25.3 0 014.2 12 19.8 19.8 0 01-5.3 14.7 32.7 32.7 0 01-16.3 11.2 22.9 22.9 0 01-6.1.8z"/>
          </svg>
        </button>
        <button
          v-if="currentIndex + 1 < images.length"
          class="light-gallery__next"
          @click="next()">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 575 569" xml:space="preserve">
              <path fill="#000000" d="M397.8 289.8c0 5.3-2.4 9.7-5.5 13.8-5.3 6.8-11.8 12.6-18 18.6-6.3 6.1-12.9 11.9-19.3 17.9a1729.6 1729.6 0 00-39.1 37.4c-6 6-12.2 11.8-18.4 17.5-5 4.8-10.1 9.5-15.5 13.9-4.7 3.7-9 7.8-13.9 11.2-4.9 3.3-10 6-16 6.5a21 21 0 01-12-2.7c-7-3.8-12.6-9-16.6-15.8-4.4-7.2-3.2-12 1.8-18.6 4.9-6.6 11.6-11.2 18.3-15.7 6.2-4.1 11.9-9 17.7-13.6 9.3-7.6 17.9-16 27-23.8 5.5-4.8 10.8-10 16.4-14.7 4.5-3.8 8.8-7.9 12.9-12.2 3.1-3.2 5.9-6.9 7.6-11 2.7-6.6 1-12.6-2.8-18-4-5.7-8.7-10.8-13.9-15.4-4.3-3.8-8.4-7.7-12.6-11.6l-17-15.6-14.2-12.7c-6.3-5.7-12.9-11-19.6-16a90.5 90.5 0 01-22.5-22.4 25.5 25.5 0 01-4.2-12 19.7 19.7 0 015.1-14.6c4.1-4.8 8.8-9 15-11a23 23 0 0118.5 2c5.3 2.8 9.9 6.8 14.2 10.9 10.8 10.2 21.4 20.6 32.4 30.6 6.1 5.6 12.7 10.8 19 16 6.4 5.2 12.3 11 17.7 17 7.4 8.2 14.9 16.3 23.2 23.5 8.4 7.1 17 14 24.6 22 4.2 4.5 8 9.2 9.4 15.5.3 1 .1 2 .3 3.1z"/>
          </svg>
        </button>
        <button
          class="light-gallery__close"
          @click="close()">
          <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 575 569" xml:space="preserve">
            <path fill="#000000" d="M395.4 215c.4 2.6-2.6 6.3-6.6 8.7-8.1 5-15.6 10.9-23.5 16-4.8 3-8.8 7.2-13.4 10.6a163 163 0 00-23.1 20.8c-1.5 1.7-3 3.4-4.2 5.3a6 6 0 00.3 7.3c1.3 1.7 2.8 3.3 4.6 4.5a307 307 0 0121.6 16.6c3.2 2.6 7.2 4.5 10 7.5 6 6.4 13.2 11.3 20.3 16.4 2.7 2 5 4.3 7.1 6.9 2.4 3 3 6.3 1.8 9.9-1 2.8-1.9 5.8-3.1 8.5-1.8 3.8-2.3 8-4 11.8-2.2 4.2-5 7.9-8.6 11-4.3 3.7-8.7 3.7-13.5 1.3-1.8-.9-3.6-2-5.4-2.8a32.6 32.6 0 01-11.5-9.7c-3.6-4.6-7.9-8.4-12-12.4-6.7-6.3-13-13-19.8-19-7.3-6.5-14.5-13-22-19.3-5.5-4.6-9.3-5.2-14.9 0l-1.9 1.7c-10.6 10.2-22 19.6-32.6 29.8-2.9 2.7-6 5.2-9 7.8-4.7 4-8 9.3-11.9 14a54.7 54.7 0 01-15.2 13.3c-3.8 2.2-8 3.7-12.4 2.8-6.5-1.2-10.3-5.7-12.2-11.6-4-12.2-.7-23 8-32.2 3.8-4 8.5-6.8 12.6-10.4 8.7-7.5 17.5-14.9 25.3-23.3a236 236 0 0119.3-17.9c4.1-3.6 4.2-8.2.4-12.1-6.7-7-13.3-14.3-19.9-21.4-6.2-6.8-12.8-13.2-19.4-19.6l-11.2-10.9c-3-3-6.5-5.3-10-7.6a19.5 19.5 0 01-9-16c-.4-6 .2-11.8 2.2-17.4 2-5.4 5.1-10.2 9.8-13.8 2.2-1.7 4.6-2.7 7.5-2.3 4.6.8 9.2 1.1 13.6 2.5 6 1.9 9.7 6.5 12.8 11.6 3.6 6 7.5 11.6 12.8 16.2a71 71 0 0112.2 13.3c3.2 4.7 7.3 8.7 11.2 12.7 5.4 5.5 10.3 11.4 15.9 16.6 2.3 2.2 4.7 4.2 7.3 6.2 3.4 2.6 7.3 2.6 11 .1 2.8-1.8 5.1-4.2 7.5-6.5a546.9 546.9 0 0132.6-28c6.1-5 10.8-11.2 14.6-18 4-7 10.1-9.8 18-9.5 6 .2 11.8 1.1 17.7 2.2 4.4.9 7.5 4 9 8a71 71 0 013.3 19.7z" class="st1"/>
          </svg>
        </button>
      </div>
    </div>
</template>

<script>
const keyMap = {
  LEFT: 37,
  RIGHT: 39,
  ESC: 27,
};

export default {
  props: {
    images: {
      type: Array,
      default: () => [],
    },
    index: {
      type: Number,
      default: 1,
    },
    disableScroll: {
      type: Boolean,
      default: false,
    },
    background: {
      type: String,
      default: 'rgba(255, 255, 255, 0.6)',
    },
    interfaceColor: {
      type: String,
      default: 'rgba(0, 0, 0, 0.8)',
    },
  },
  data() {
    return {
      currentIndex: this.index,
      activeClass: 'light-gallery__active',
      inactiveClass: 'light-gallery__inactive',
      isImageLoaded: false,
      bodyOverflowStyle: '',
      touch: {
        count: 0,
        x: 0,
        y: 0,
        multitouch: false,
        flag: false,
      },
    };
  },
  computed: {
    formattedImages() {
      return this.images.map(image => (typeof image === 'string'
        ? { url: image } : image
      ));
    },
  },
  watch: {
    index(val) {
      if (!document) return;
      this.currentIndex = val;
      if (this.disableScroll && typeof val === 'number') {
        document.body.style.overflow = 'hidden';
      } else if (this.disableScroll && !val) {
        document.body.style.overflow = this.bodyOverflowStyle;
      }
    },
    currentIndex(val) {
      this.setImageLoaded(val);
    },
  },
  mounted() {
    if (!document) return;
    this.bodyOverflowStyle = document.body.style.overflow;
    this.bindEvents();
  },
  beforeDestroy() {
    if (!document) return;
    if (this.disableScroll) {
      document.body.style.overflow = this.bodyOverflowStyle;
    }
    this.unbindEvents();
  },
  methods: {
    close() {
      this.$emit('close');
    },
    prev() {
      if (this.currentIndex === 0) return;
      this.currentIndex -= 1;
      this.$emit('slide', { index: this.currentIndex });
    },
    next() {
      if (this.currentIndex === this.images.length - 1) return;
      this.currentIndex += 1;
      this.$emit('slide', { index: this.currentIndex });
    },
    imageLoaded($event, imageIndex) {
      const { target } = $event;
      target.classList.add('loaded');

      if (imageIndex === this.currentIndex) {
        this.setImageLoaded(imageIndex);
      }
    },
    getImageElByIndex(index) {
      const elements = this.$refs[`lg-img-${index}`] || [];
      return elements[0];
    },
    setImageLoaded(index) {
      const el = this.getImageElByIndex(index);
      this.isImageLoaded = !el ? false : el.classList.contains('loaded');
    },
    shouldPreload(index) {
      const el = this.getImageElByIndex(index) || {};
      const { src } = el;

      return !!src
       || index === this.currentIndex
       || index === this.currentIndex - 1
       || index === this.currentIndex + 1;
    },
    bindEvents() {
      document.addEventListener('keydown', this.keyDownHandler, false);
    },
    unbindEvents() {
      document.removeEventListener('keydown', this.keyDownHandler, false);
    },
    touchstartHandler(event) {
      this.touch.count += 1;
      if (this.touch.count > 1) {
        this.touch.multitouch = true;
      }
      this.touch.x = event.changedTouches[0].pageX;
      this.touch.y = event.changedTouches[0].pageY;
    },
    touchmoveHandler(event) {
      if (this.touch.flag || this.touch.multitouch) return;

      const touchEvent = event.touches[0] || event.changedTouches[0];

      if (touchEvent.pageX - this.touch.x > 40) {
        this.touch.flag = true;
        this.prev();
      } else if (touchEvent.pageX - this.touch.x < -40) {
        this.touch.flag = true;
        this.next();
      }
    },
    touchendHandler() {
      this.touch.count -= 1;
      if (this.touch.count <= 0) {
        this.touch.multitouch = false;
      }
      this.touch.flag = false;
    },
    keyDownHandler(event) {
      switch (event.keyCode) {
        case keyMap.LEFT:
          this.prev();
          break;
        case keyMap.RIGHT:
          this.next();
          break;
        case keyMap.ESC:
          this.close();
          break;
        default:
          break;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.light-gallery {
  &__modal {
    position: fixed;
    display: block;
    z-index: 2001;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__content {
    height: 100%;
    width: 100%;
    white-space: nowrap;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  &__container {
    align-content: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    position: absolute;
    z-index: 1002;
    width: 100%;
    top: 0;
    text-align: center;
  }

  &__image-container {
    display: grid;
    grid-area: 1 / 1 / 2 / 2;
    vertical-align: middle;
    align-content: center;
    justify-content: center;
    top: 10px;
    width: 100%;
    height: 100%;
    text-align: center;
  }
  &__inactive {
    opacity: 0;
    transform: scale(0.9);
    transition: all 0.3s ease-out;
  }
  &__active {
    opacity: 1;
    transform: scale(1);
    transition: all 0.3s ease-out;
  }

  &__image {
    & {
      display: flex;
      flex-direction: column;
      align-self: center;
      position: relative;
      margin: 0 auto;
      max-width: 90vw;
      max-height: 95vh;
    }

    & img {
      & {
        align-self: center;
        border: 3px solid #000;
        display: flex;
        max-width: 100%;
        max-height: 94vh;
        vertical-align: middle;
      }
    }

    &:hover {
      &__text {
        opacity: 0;
        transition: 0.3s;
      }
    }
  }

  &__text {
    position: relative;
    z-index: 1000;
    display: block;
    font-family: "WotfardBold", sans-serif;
    margin: 0 auto;
    padding: 0 0 0 0;
    width: 100%;
    box-sizing: border-box;
    font-weight: 900;
  }

  &__next,
  &__prev,
  &__close {
    position: absolute;
    z-index: 1002;
    display: block;
    height: 60px;
    width: 50px;
    background: transparent;
    border: 0;
    line-height: 0;
    outline: none;
    cursor: pointer;
  }

  &__next {
    top: 50%;
    transform: translate(0, -50%);
    right: -15px;
    vertical-align: middle;
    @media screen and (min-width: 768px) {
      right: 0;
    }
  }

  &__prev {
    top: 50%;
    transform: translate(0, -50%);
    left: -15px;
    @media screen and (min-width: 768px) {
      left: 0;
    }
  }

  &__close {
    right: -15px;
    top: -15px;
    @media screen and (min-width: 768px) {
      right: 0;
      top: 0;
    }
  }

  .whitebg {
    opacity: 0.7;
  }

  &__spinner {
    & {
      position: absolute;
      z-index: 1003;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      margin: 0 auto;
      display: block;
      height: 15px;
      width: auto;
      box-sizing: border-box;
      text-align: center;
    }

    &.hide {
      display: none;
    }
  }

  &__dot {
    & {
      float: left;
      margin: 0 calc(15px / 2);
      width: 15px;
      height: 15px;
      border: calc(15px / 5) solid rgba(255, 255, 255, 0.8);
      border-radius: 50%;
      transform: scale(0);
      box-sizing: border-box;
      animation: spinner-animation 1000ms ease infinite 0ms;
    }

    &:nth-child(1) {
      animation-delay: calc(300ms * 1);
    }

    &:nth-child(2) {
      animation-delay: calc(300ms * 2);
    }

    &:nth-child(3) {
      animation-delay: calc(300ms * 3);
    }
  }
}

//.fade-enter-active, .fade-leave-active {
//  position: fixed;
//  z-index: 1000;
//  transform: translateY(0);
//  transition: opacity .2s;
//}
//
//.fade-enter, .fade-leave-to {
//  position: fixed;
//  opacity: 0;
//  transform: translateY(30px);
//  z-index: 1000;
//}

@keyframes spinner-animation {
  50% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
