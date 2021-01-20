<template>
  <div class="container">
    <section id="home__photography" class="photography">

      <h1 class="content__header">Photography</h1>
      <div class="groups">
        <ul class="groups__labels" :class="{'active': groupactive === true}">
          <li class="groups__label groups__label--places" @click="groupactive = false"><strong>Places</strong></li>
          <li class="groups__label groups__label--projects" @click="groupactive = true"><strong>Projects</strong></li>
        </ul>
        <div class="groups__container" :class="{'active': groupactive === true}">
          <div class="groups__subcontainer">
            <div id="groups-places" class="groups__thumbs groups__thumbs--places">
              <nuxt-link v-for="place in places"
                         :key="place.name"
                         :to="`/photography/${place.name}`"
                         :title="`A page with photographs of ${place.niceName}`"
                         class="group drawbox">
                <v-lazy-image
                  :src="require(`~/assets/images/photography/${place.name}/${place.name}-group.jpg`)"
                  :src-placeholder="require(`~/assets/images/photography/${place.name}/${place.name}-group-lqp.png`)"
                  :alt="place.niceName"
                  class="group__thumb draw__image"
                  use-picture>
                  <source :srcset="require(`~/assets/images/photography/${place.name}/${place.name}-group.webp`)"
                          type="image/webp" />
                </v-lazy-image>
                <div class="draw group__text">
                  <div class="group__header">{{place.niceName}}</div>
                </div>
              </nuxt-link>
            </div>
            <div id="groups-projects" class="groups__thumbs groups__thumbs--projects">
              <nuxt-link v-for="project in projects" :key="project.name"
                         :to="`photography/${project.name}`"
                         :title="`A page with a photographs I made for the project: ${project.niceName}`"
                         class="drawbox group">
                <v-lazy-image
                  :src="require(`~/assets/images/photography/${project.name}/${project.name}-group.jpg`)"
                  :alt="project.niceName"
                  height="600"
                  width="600"
                  class="group__thumb draw__image"
                  use-picture>
                </v-lazy-image>
                <div class="draw group__text">
                  <div class="group__header">{{project.niceName}}</div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      places: [
        {name: 'england', niceName: 'England'},
        {name: 'germany', niceName: 'Germany'},
        {name: 'italy', niceName: 'Italy'},
        {name: 'japan', niceName: 'Japan'},
        {name: 'netherlands', niceName: 'The Netherlands'},
        {name: 'romania', niceName: 'Romania'},
        {name: 'scotland', niceName: 'Scotland'},
        {name: 'serbia', niceName: 'Serbia'},
        {name: 'us', niceName: 'The United States'},
        {name: 'wales', niceName: 'Wales'}
      ],
      projects: [
        {name: 'goo', niceName: 'goo'},
        {name: 'mannequins', niceName: 'Mannequins'},
        {name: 'museums', niceName: 'Museums'},
        {name: 'piles', niceName: 'Piles'},
        {name: 'portraits', niceName: 'Portraits'},
        {name: 'humansplusnature', niceName: 'Humans Plus Nature'},
        {name: 'tamagawa', niceName: 'Tamagawa'},
        {name: 'travel', niceName: 'Travel'},
        {name: 'walkways', niceName: 'Walkways'},
        {name: 'waterways', niceName: 'Waterways'},
      ],
      groupactive: false
    }
  }
}
</script>

<style lang="scss">
.photography {
  position: relative;
  .groups {
    position: relative;
    .groups__labels {
      display: flex;
      justify-content: space-between;
      margin: 0 0 0 0;
      padding: 0 0 0 0;
      .groups__label {
        cursor: pointer;
        display: inline-block;
        font-size: 20px;
        height: 50px;
        list-style: none;
        margin: 0 0 10px 0;
        padding: 0 0 0 5px;
        text-align: left;
        text-transform: uppercase;
        width: 49%;
        &--places { border-top: 4px solid hotpink; background-color: lighten(hotpink, 25%); color: #000; }
        &--projects { border-top: 4px solid mediumseagreen; background-color: #ffffff; color: #000; }
        }
        &.active {
          .groups__label--places {
            background-color: #ffffff; color: #000;
          }
          .groups__label--projects {
            background-color: lighten(mediumseagreen, 40%); color: #000;
          }
        }
      }
      .groups__container {
        min-height: calc(100vh - 130px);
        overflow: hidden;
        position: relative;
        width: 100%;
        .groups__subcontainer {
          height: 100%;
          width: 200%;
        }
        .groups__thumbs {
          display: grid;
          float: left;
          grid-gap: 15px;
          grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
          min-height: 100%;
          position: relative;
          width: 50%;
          transition: 0.3s;
          transition-timing-function: ease-out;
          @media screen and (min-width: 768px) {
            grid-gap: 20px;
            grid-template-columns: repeat(auto-fill, minmax(170px, 1fr));
          }
          @media screen and (min-width: 1023px) {
            grid-gap: 25px;
            grid-template-columns: repeat(auto-fill, minmax(210px, 1fr));
          }
          .group {
            overflow: hidden;
            padding: 0 0 0 0;
            position: relative;
            .group__thumb {
              max-width: 100%;
              transition: 0.3s;
              .v-lazy-image {
                height: auto;
              }
            }
            &:hover {
              .group__thumb {
                transform: scale(1.15);
                opacity: 0.2;
                transition: 0.3s;
              }
              .group__text {
                background: none;
              }
              .group__header {
                background: none;
                color: #000000;
                opacity: 1;
                transition: 0.7s;
              }
            }
            .group__header {
              bottom: 0;
              text-shadow: 0px 0px 10px rgba(150, 150, 150, 0.3);
              color: #ffffff;
              display: inline;
              font-family: WotfardBold, sans-serif;
              font-size: 5.5vw;
              height: auto;
              left: 0;
              line-height: 5vw;
              opacity: 0.85;
              overflow-wrap: break-word;
              padding: 0 0 8px 5px;
              word-break: break-word;
              position: absolute;
              text-transform: uppercase;
              top: auto;
              transition: 0.7s;
              width: 100%;
              white-space: pre-wrap;
              @media screen and (min-width: 768px) {
                font-size: 4.5vw;
                line-height: 3.6vw;
              }
              @media screen and (min-width: 1025px) {
                font-size: 4vw;
                line-height: 3.7vw;
              }
              @media screen and (min-width: 1400px) {
                font-size: 2.8vw;
                line-height: 2.5vw;
              }
            }
          }
        }
        &.active {
          .groups__thumbs--projects {
            transform: translateX(-100%);
            transition: 0.3s;
            transition-timing-function: ease-out;
          }
          .groups__thumbs--places {
            transform: translateX(-100%);
            transition: 0.3s;
            transition-timing-function: ease-out;
          }
        }
      }
    }
  }
</style>
