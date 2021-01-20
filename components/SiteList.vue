<template>
  <ul class="sitelist">
    <li class="sitelist__site drawbox"
        v-for="theSite in theSites.sites"
        :key="theSite.name"
        :class="{'active': currentSite === theSite.name}"
        @click="currentSite = theSite.name, updateSite(theSite.name)">
      <v-lazy-image class="draw__image"
                    :src="require(`~/assets/images/dev/sitelist/${theSite.name}-screenshot.jpg`)"
                    :src-placeholder="require(`~/assets/images/dev/sitelist/lqp/${theSite.name}-screenshot.png`)"
                    :alt="theSite.header">
      </v-lazy-image>
      <div class="draw site__text">
        <h3 class="site__header draw__header">{{theSite.header}}</h3>
      </div>
    </li>
  </ul>
</template>

<script>
import development from '@/data/development'
export default {
  name: 'siteList',
  data() {
    return {
      currentSite: 'henryjacobsen',
      theSites: development
    }
  },
  methods: {
    updateSite(currentSite) {
      this.$emit('update-site', currentSite)
    }
  }
}
</script>

<style lang="scss" scoped>
.sitelist {
  display: flex;
  justify-content: space-between;
  list-style: none;
  margin: 30px 0 0 0;
  padding: 0 0 0 0;
  width: 100%;
  @media screen and (min-width: 700px) {
    display: block;
    margin: 50px 50px 0 0;
    width: 140px;
  }
  .sitelist__site {
    border: 1px solid lighten(#212121, 85%);
    display: inline-block;
    list-style: none;
    margin: 0 0 20px 0;
    width: 65px;
    transition: 0.3s;
    @media screen and (min-width: 450px) {
      width: 95px;
    }
    @media screen and (min-width: 550px) {
      width: 110px;
    }
    @media screen and (min-width: 768px) {
      width: 140px;
    }
    &.active {
      transform: scale(1.2);
      transition: 0.3s;
    }
    .site__text {
      display: none;
      @media screen and (min-width: 600px) {
        display: block;
      }
    }
    .draw__header {
      font-size: 2.7vw;
      opacity: 0;
      transition: 0.3s;
      /*text-shadow: 0px 0px 1px rgba(0, 0, 0, 1);*/
      @media screen and (min-width: 600px) {
        font-size: 1.1vw;
        line-height: 1vw;
      }
    }
    &:hover {
      transition: 0.3s;
      .draw__header {
        opacity: 1;
      }
    }
  }
}
</style>
