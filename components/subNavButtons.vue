<template>
  <div>
  <div id="subnavbg" class="subnavbg" @click="closeSubNav"></div>
  <div class="photography__subnav">
    <button id="subnav--places" class="photography__subnavitem photography__subnavitem--places" data-morphtarget="bubbleplaces" @click="openSubNav($event), projectsButtonDisabled = 0,  placesButtonDisabled = 1" :disabled="placesButtonDisabled == 1">
      <div class="photography__subnavtext photography__subnavtext--places">
        Places
      </div>
      <svg class="photography__subnavsvg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 1559 879.7" xml:space="preserve">
        <path id="bubbleplaces" class="subnav__bubbles st0" stroke="#000" stroke-width="16px" d="M914 255v10c0 4 2 7 7 9 4 3 7 1 10-2l7-8c14-18 32-28 55-30 18-1 32 5 45 18 6 6 14 11 15 21l2 18c0 3 0 6 2 8 7 9 12 10 19 1 15-18 34-28 56-34 6-2 12-1 18 0 11 2 15 10 17 20 1 7 2 15 0 22-1 5 1 9 5 12 3 3 7 2 10 0l24-14c16-9 33-11 50-4 11 5 19 16 23 28 2 5-1 11-3 15-5 12-6 25-11 36-3 5 1 10 5 14 4 3 9 1 12-2 11-10 23-11 37-7a40 40 0 0129 56 72 72 0 01-57 45l-8 2c-4 1-7 4-5 9l1 2c9 14 9 30 9 45 0 25-19 38-40 42-11 2-21 2-32-1l-10-5c-7-3-12 0-13 7-2 19-10 36-25 48-22 19-51 18-71-4-3-4-6-8-11-10-5-3-10-1-12 4a77 77 0 01-55 45c-22 6-42-1-59-15-4-3-6-8-9-12l-4-6c-8-8-15-6-19 4a87 87 0 01-67 57c-25 6-49 0-70-11-16-8-26-22-26-41 0-5-1-9-5-12-9-5-15-3-17 6-7 20-30 37-52 36-13-1-23-6-32-16-8-10-15-22-18-35-1-5-4-10-10-10-6-1-9 4-12 9-4 8-7 17-12 24-8 13-20 19-34 21-20 4-39 0-57-9-16-8-25-22-28-39-1-6-2-13-10-14-7 0-10 6-13 11-13 30-40 43-69 49-21 4-43 1-65-5-17-5-32-23-32-42 0-12 2-25 9-37 2-3 5-6 2-10s-7-4-12-3l-11 4c-6 2-12 2-18 1-7-1-14 1-21-1-18-5-28-16-36-32-5-11-7-22-8-33l2-12c6-20 17-37 32-50 5-4 11-5 16-7 4-2 9-4 7-10-1-5-5-7-10-7-24 0-50-28-50-49-1-10 3-20 9-28 14-21 32-36 56-43 8-3 16-3 24 2 7 3 11 1 14-7 8-19 15-40 32-54 14-11 29-17 47-16 8 1 13 7 19 12 10 9 18 20 27 31 8 9 13 8 19-3 13-22 26-45 50-56 14-6 29-4 44 2 16 7 21 21 26 35l2 6c5 6 12 5 14-2 2-16 14-24 25-33l23-21c11-8 24-11 37-13 16-3 32-2 48-1 14 1 28 5 40 11l17 10c9 5 15 14 20 24 3 7 5 14 10 20 7 11 12 10 19 0 13-19 31-31 54-30 12 0 24 6 32 15 6 6 6 13 5 19z"/>
        <path id="blast__topright" class="blast" d="M1392 304l-4 5-25 17-33 23c-8 6-15 13-24 18-3 2-6 3-9 1-7-2-8-5-3-10 4-5 9-9 15-13 9-7 17-15 25-24l19-15c5-3 9-8 15-10 6-3 17-1 22 4l2 4z"/>
        <path id="blast__bottomleft" class="blast" d="M213 703c-4 1-7-2-10-3-5-1-5-7-1-10 14-12 29-24 42-37 7-7 15-14 22-23 5-5 9-10 17-10 3 0 5 2 6 4 2 2 0 4-1 5l-21 25c-10 12-19 24-30 34-5 5-9 11-15 14l-9 1z"/>
        <path id="blast__topmiddle" class="blast" d="M832 155c1 12-1 26-1 40l-1 31c0 6-3 9-9 9-4 0-8-4-8-9v-27c0-20-4-41-3-61 0-9 4-12 13-13 6-1 9 3 9 8v22z"/>
        <path id="blast__bottommiddleright" class="blast" d="M949 717c-1-7 4-9 9-10s7 2 9 6c7 14 6 29 12 42 5 13 5 27 9 40 1 5-2 12-6 13-5 1-9-1-12-5-2-4-3-7-3-11-2-10-3-20-6-29-5-13-8-26-10-39 0-3-4-4-2-7z"/>
        <path id="blast__left" class="blast" d="M176 414h56c5 0 8 2 12 4 1 1 3 4 2 6-1 3-3 4-6 4h-12c-17-1-34 1-51 2-12 0-24-2-36 1l-7 3c-5 2-8 0-10-5-5-13 3-14 16-15h36z"/>
        <path id="blast__bottommiddleleft" class="blast" d="M614 694c0 6-3 12-5 17-4 10-4 20-7 30l-5 26-3 15c-1 5-3 9-6 12s-6 3-9 2c-4-2-7-5-8-8s2-6 3-9c5-17 11-32 15-49l11-37c2-6 7-8 12-5 2 2 3 4 2 6z"/>
        <path id="blast__topmiddleright" class="blast" d="M1082 280c-4-2-8-2-10-7-2-4 0-8 3-10 7-8 11-19 18-28 4-5 7-12 12-17 2-1 2-3 3-5 3-9 9-15 12-24 3-8 10-9 17-10 3-1 6 4 4 7l-17 25-6 10c-4 8-9 15-12 23l-15 30c-2 4-5 5-9 6z"/>
        <path id="blast__bottomright" class="blast" d="M1300 678c-3 1-5 0-7-2-6-9-14-16-21-23-10-11-20-23-33-31l-8-10c-3-3 2-4 3-6 2-4 6-5 10-2l11 10 25 23c5 3 9 8 13 13l14 13c3 3 5 6 3 9-1 4-5 7-10 6z"/>
        <path id="blast__right" class="blast" d="M450 224c-4 0-8-2-8-6 0-9-2-19-5-27-5-15-3-31-8-46-1-4 2-7 5-9 3-1 7-4 12-1 3 3 3 5 2 9-1 9 1 18 2 26l5 19c3 9 3 18 3 27 0 4-5 8-8 8z"/>
        <path id="boom" class="st0 boom" fill="#fff" stroke="#000" stroke-width="13px" d="M1045 225c-2 8 4 16 2 25 0 5 2 10-2 15-2 4 3 8 3 13-1 15 1 30 2 45 0 5 5 7 11 5 9-4 16-10 23-16l48-33 34-20c3-2 6-1 7 0 2 2 2 6 0 9-3 4-3 9-4 14-1 12-2 24-5 36l-3 13c-1 4-2 8 2 10 4 3 8 2 12-1l29-19 21-14 16-10c5-2 6 0 7 3l1 9c0 15 3 30 5 46l1 15 1 20c1 6 6 10 12 10h108c3 0 7 0 9 3 2 4-2 6-5 8-8 7-17 13-24 21-6 7-14 12-21 18-8 8-18 15-28 22l-22 14c-4 3-5 6-2 11 7 9 9 20 14 30l10 23 17 33c1 2 2 4 0 6h-5l-41-14c-24-10-49-18-74-25-3-1-7-2-12-1-4 2-6 5-6 8-1 9 1 17 3 24 1 5 0 11 2 15 5 13 5 27 8 41 1 4 1 9 4 12 1 2 1 5-1 7s-4 1-6 0l-29-17-36-23-33-21c-9-7-15-4-19 7-5 12-13 23-22 33l-3 3c-6 15-19 26-24 42-1 3-4 5-5 9-2 3-8 2-10-1-7-11-15-22-24-31-8-9-15-19-24-27l-18-16c-9-6-17-4-20 6l-14 32c-5 9-11 17-15 26-4 11-11 21-16 31s-7 20-13 29l-4 10c0 3-1 4-4 4-2 1-4-1-5-3-7-13-16-25-24-37-6-11-15-20-21-31l-14-21-16-26-12-22c-5-8-14-10-21-1-8 10-16 20-26 28l-22 23-21 20c-3 3-6 3-9 0-5-5-6-12-8-19-5-13-11-25-15-38-3-9-7-18-8-28 0-4-2-7-3-10-1-4-9-5-12-2a2034 2034 0 00-52 60l-22 22c-5 4-8 1-10-2l-15-22-21-27-16-25-10-16c-2-6-7-6-12-2l-29 29-23 23-31 30-25 23c-5 4-8 9-13 12-3 2-5 4-8 3s-4-4-4-7c0-8-2-17-4-25-4-11-5-23-8-34l-1-9-9-49c-1-6-2-11-5-17-2-5-8-7-14-7l-34-7-38-6-17-4-20-5c-3-1-3-2-4-4s1-3 3-4l45-39c9-6 17-13 24-20l17-16 14-15c9-7 8-12-2-19l-28-18c-6-5-14-7-21-12-13-8-26-16-38-26l-8-8c-2-3-2-5 2-6l46-5c21-2 43-3 64-8h7c12-1 16-10 19-19 3-11 8-21 16-30l1-1c5-10 9-19 16-28 4-6 6-13 12-19 2-2 3-5 3-8 3-9 9-16 12-24 2-3 6-3 8 1 3 8 8 16 13 23l13 28c5 9 10 19 14 30 3 7 7 13 9 21 2 5 8 4 13 4 4 0 6-3 7-7l9-27c4-14 12-27 21-39 6-9 12-19 17-30 2-3 6-4 9 0l13 19c7 14 17 27 25 40l14 22 8 12c3 3 15 3 18 0 7-8 15-14 21-23 7-9 13-20 21-28l34-38 13-15c3-5 9-9 13-13l7-8c6-4 10-5 14 1 4 8 10 15 15 23l17 19 22 29c10 14 19 28 30 41 4 5 7 12 15 12 4 0 8 0 11-4 7-12 14-23 22-33 11-13 20-26 29-39l16-21c0-1 2-2 4-1 1 1 3 0 4 3 2 14 5 27 6 41 0 7 3 14 4 21l5 37c0 5 4 8 8 9 2 1 6-1 8-4 7-10 16-18 24-25l12-12c8-8 19-13 27-20l18-17 24-18c3-2 5 1 5 4v13z"/>
      </svg>
    </button>
    <ul id="subnavlinks--places" class="photography__subnavlinks photography__subnavlinks--places">
      <li><nuxt-link to="/photography/england" title="England">England</nuxt-link></li>
      <li><nuxt-link to="/photography/germany" title="Germany">Germany</nuxt-link></li>
      <li><nuxt-link to="/photography/italy" title="Italy">Italy</nuxt-link></li>
      <li><nuxt-link to="/photography/japan" title="Japan">Japan</nuxt-link></li>
      <li><nuxt-link to="/photography/netherlands" title="The Netherlands">The Netherlands</nuxt-link></li>
      <li><nuxt-link to="/photography/romania" title="Romania">Romania</nuxt-link></li>
      <li><nuxt-link to="/photography/scotland" title="Scotland">Scotland</nuxt-link></li>
      <li><nuxt-link to="/photography/serbia" title="Serbia">Serbia</nuxt-link></li>
      <li><nuxt-link to="/photography/us" title="The United States">The United States</nuxt-link></li>
      <li><nuxt-link to="/photography/wales" title="Wales">Wales</nuxt-link></li>
    </ul>

    <button id="subnav--projects" class="photography__subnavitem photography__subnavitem--projects" data-morphtarget="bubbleprojects" @click="openSubNav($event), projectsButtonDisabled = 1,  placesButtonDisabled = 0" :disabled="projectsButtonDisabled == 1">
      <div class="photography__subnavtext photography__subnavtext--projects">
        Projects
      </div>
      <svg class="photography__subnavsvg" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0" y="0" viewBox="0 0 1559 879.7" xml:space="preserve">
        <path id="bubbleprojects" class="subnav__bubbles st0" fill="#fff" stroke="#000" stroke-width="16px" d="M914 255v10c0 4 2 7 7 9 4 3 7 1 10-2l7-8c14-18 32-28 55-30 18-1 32 5 45 18 6 6 14 11 15 21l2 18c0 3 0 6 2 8 7 9 12 10 19 1 15-18 34-28 56-34 6-2 12-1 18 0 11 2 15 10 17 20 1 7 2 15 0 22-1 5 1 9 5 12 3 3 7 2 10 0l24-14c16-9 33-11 50-4 11 5 19 16 23 28 2 5-1 11-3 15-5 12-6 25-11 36-3 5 1 10 5 14 4 3 9 1 12-2 11-10 23-11 37-7a40 40 0 0129 56 72 72 0 01-57 45l-8 2c-4 1-7 4-5 9l1 2c9 14 9 30 9 45 0 25-19 38-40 42-11 2-21 2-32-1l-10-5c-7-3-12 0-13 7-2 19-10 36-25 48-22 19-51 18-71-4-3-4-6-8-11-10-5-3-10-1-12 4a77 77 0 01-55 45c-22 6-42-1-59-15-4-3-6-8-9-12l-4-6c-8-8-15-6-19 4a87 87 0 01-67 57c-25 6-49 0-70-11-16-8-26-22-26-41 0-5-1-9-5-12-9-5-15-3-17 6-7 20-30 37-52 36-13-1-23-6-32-16-8-10-15-22-18-35-1-5-4-10-10-10-6-1-9 4-12 9-4 8-7 17-12 24-8 13-20 19-34 21-20 4-39 0-57-9-16-8-25-22-28-39-1-6-2-13-10-14-7 0-10 6-13 11-13 30-40 43-69 49-21 4-43 1-65-5-17-5-32-23-32-42 0-12 2-25 9-37 2-3 5-6 2-10s-7-4-12-3l-11 4c-6 2-12 2-18 1-7-1-14 1-21-1-18-5-28-16-36-32-5-11-7-22-8-33l2-12c6-20 17-37 32-50 5-4 11-5 16-7 4-2 9-4 7-10-1-5-5-7-10-7-24 0-50-28-50-49-1-10 3-20 9-28 14-21 32-36 56-43 8-3 16-3 24 2 7 3 11 1 14-7 8-19 15-40 32-54 14-11 29-17 47-16 8 1 13 7 19 12 10 9 18 20 27 31 8 9 13 8 19-3 13-22 26-45 50-56 14-6 29-4 44 2 16 7 21 21 26 35l2 6c5 6 12 5 14-2 2-16 14-24 25-33l23-21c11-8 24-11 37-13 16-3 32-2 48-1 14 1 28 5 40 11l17 10c9 5 15 14 20 24 3 7 5 14 10 20 7 11 12 10 19 0 13-19 31-31 54-30 12 0 24 6 32 15 6 6 6 13 5 19z"/>
        <path id="blast__topright" class="blast" d="M1392 304l-4 5-25 17-33 23c-8 6-15 13-24 18-3 2-6 3-9 1-7-2-8-5-3-10 4-5 9-9 15-13 9-7 17-15 25-24l19-15c5-3 9-8 15-10 6-3 17-1 22 4l2 4z"/>
        <path id="blast__bottomleft" class="blast" d="M213 703c-4 1-7-2-10-3-5-1-5-7-1-10 14-12 29-24 42-37 7-7 15-14 22-23 5-5 9-10 17-10 3 0 5 2 6 4 2 2 0 4-1 5l-21 25c-10 12-19 24-30 34-5 5-9 11-15 14l-9 1z"/>
        <path id="blast__topmiddle" class="blast" d="M832 155c1 12-1 26-1 40l-1 31c0 6-3 9-9 9-4 0-8-4-8-9v-27c0-20-4-41-3-61 0-9 4-12 13-13 6-1 9 3 9 8v22z"/>
        <path id="blast__bottommiddleright" class="blast" d="M949 717c-1-7 4-9 9-10s7 2 9 6c7 14 6 29 12 42 5 13 5 27 9 40 1 5-2 12-6 13-5 1-9-1-12-5-2-4-3-7-3-11-2-10-3-20-6-29-5-13-8-26-10-39 0-3-4-4-2-7z"/>
        <path id="blast__left" class="blast" d="M176 414h56c5 0 8 2 12 4 1 1 3 4 2 6-1 3-3 4-6 4h-12c-17-1-34 1-51 2-12 0-24-2-36 1l-7 3c-5 2-8 0-10-5-5-13 3-14 16-15h36z"/>
        <path id="blast__bottommiddleleft" class="blast" d="M614 694c0 6-3 12-5 17-4 10-4 20-7 30l-5 26-3 15c-1 5-3 9-6 12s-6 3-9 2c-4-2-7-5-8-8s2-6 3-9c5-17 11-32 15-49l11-37c2-6 7-8 12-5 2 2 3 4 2 6z"/>
        <path id="blast__topmiddleright" class="blast" d="M1082 280c-4-2-8-2-10-7-2-4 0-8 3-10 7-8 11-19 18-28 4-5 7-12 12-17 2-1 2-3 3-5 3-9 9-15 12-24 3-8 10-9 17-10 3-1 6 4 4 7l-17 25-6 10c-4 8-9 15-12 23l-15 30c-2 4-5 5-9 6z"/>
        <path id="blast__bottomright" class="blast" d="M1300 678c-3 1-5 0-7-2-6-9-14-16-21-23-10-11-20-23-33-31l-8-10c-3-3 2-4 3-6 2-4 6-5 10-2l11 10 25 23c5 3 9 8 13 13l14 13c3 3 5 6 3 9-1 4-5 7-10 6z"/>
        <path id="blast__right" class="blast" d="M450 224c-4 0-8-2-8-6 0-9-2-19-5-27-5-15-3-31-8-46-1-4 2-7 5-9 3-1 7-4 12-1 3 3 3 5 2 9-1 9 1 18 2 26l5 19c3 9 3 18 3 27 0 4-5 8-8 8z"/>
      </svg>
    </button>
    <ul id="subnavlinks--projects" class="photography__subnavlinks photography__subnavlinks--projects">
      <li><nuxt-link to="/photography/goo" title="Goo">Goo</nuxt-link></li>
      <li><nuxt-link to="/photography/mannequins" title="Mannequins">Mannequins</nuxt-link></li>
      <li><nuxt-link to="/photography/museums" title="Museums">Museums</nuxt-link></li>
      <li><nuxt-link to="/photography/piles" title="Piles">Piles</nuxt-link></li>
      <li><nuxt-link to="/photography/portraits" title="Portraits">Portraits</nuxt-link></li>
      <li><nuxt-link to="/photography/humansplusnature" title="Humans Plus Nature">Humans Plus Nature</nuxt-link></li>
      <li><nuxt-link to="/photography/tamagawa" title="Tamagawa">Tamagawa</nuxt-link></li>
      <li><nuxt-link to="/photography/travel" title="Travel">Travel</nuxt-link></li>
      <li><nuxt-link to="/photography/walkways" title="Walkways">Walkways</nuxt-link></li>
      <li><nuxt-link to="/photography/waterways" title="Waterways">Waterways</nuxt-link></li>
    </ul>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      placesButtonDisabled: 0,
      projectsButtonDisabled: 0
    }
  },
  methods: {
    openSubNav: function($event) {
      const targetWrapper  = $event.target.parentElement.id;
      const targetPath  = $event.target.parentElement.dataset.morphtarget;
      gsap.to("#subnavbg", {duration: 0.3, autoAlpha: 1});
      gsap.to(`.photography__subnavsvg .blast`, {scale: 0.3, autoAlpha: 0, duration: 0.5,  ease: "elastic"});
      gsap.to(`.subnav__bubbles`, {morphSVG: { shape: `#${targetPath}`, shapeIndex: 1 }, duration: 0.5,  ease: "elastic"});
      gsap.to(`#${targetPath}`, {morphSVG: { shape: `#boom`, shapeIndex: 1 }, duration: 0.5,  ease: "elastic"});
      gsap.to(`#${targetWrapper} .blast`, {scale: 0.8, autoAlpha: 1, duration: 1,  ease: "elastic" });
      gsap.to(`.photography__subnavlinks`, {maxWidth: '200px', duration: 0.1, ease: "back"});
      gsap.to(`#${targetWrapper} + .photography__subnavlinks`, {maxWidth: '600px', duration: 0.3, ease: "back"});
      gsap.to(`.photography__subnavlinks li`, {autoAlpha: 0, position: 'absolute', scale: 0.3, y:0, duration: 0.1, ease: "back"});
      gsap.to(`#${targetWrapper} + .photography__subnavlinks li`, {autoAlpha: 1, scale: 1, position: 'relative', y: 100, duration: 0.3, ease: "back"});
    },
    closeSubNav(){
      gsap.to("#subnavbg", {duration:0.15, autoAlpha:0});
      gsap.to(`.blast`, {scale: 0.3, autoAlpha: 0, duration: 0.3,  ease: "elastic" });
      gsap.to(`#bubbleplaces`, {morphSVG: { shape: `#bubbleplaces `, shapeIndex: 1 }, duration: 0.5,  ease: "elastic"});
      gsap.to(`#bubbleprojects`, {morphSVG: { shape: `#bubbleprojects `, shapeIndex: 1 }, duration: 0.5,  ease: "elastic"});
      gsap.to(`.photography__subnavlinks li`, {autoAlpha: 0, position: 'absolute', scale: 0.3, y:0, duration: 0.1});
      this.placesButtonDisabled = 0;
      this.projectsButtonDisabled = 0;
    }
  }
}
</script>

<style lang="scss" scoped>
.st0 {fill: #fff;}
.subnavbg {
  background: transparent;
  height:100vh;
  left:0;
  position:fixed;
  top:0;
  width:100%;
  visibility: hidden;
  z-index:90;
}
.photography__subnav {
  display: none;
  height: 110px;
  margin: 0 0 0 250px;
  position: fixed;
  top:0;
  z-index: 1100;
  @media screen and (min-width: 800px) {
    display: flex;
  }
  #boom {
    display: none;
  }
  .photography__subnavitem {
    background-color: transparent;
    border: none;
    cursor: pointer;
    display:block;
    height:100%;
    margin: 0 0 0 0;
    max-width: 200px;
    padding: 0 0 0 0;
    position: relative;
    &:focus {
      background: rgba(222, 222, 222, 0.7);
      outline: none;
    }
    &:disabled {
      color: #323232;
      cursor: auto;
    }
    .photography__subnavsvg {
      height: 100%;
      photography: relative;
      width: auto;
      z-index: 20;
      .blast {
        opacity: 0;
      }
    }
    .photography__subnavtext {
      font-family: WotfardBold, sans-serif;
      font-size:  20px;
      height: 100%;
      position: absolute;
      padding: 42px 0 0 0;
      text-transform:  uppercase;
      width: 100%;
      z-index: 30;
    }
  }
  .photography__subnavlinks {
    left: 0;
    margin: 0 0 0 0;
    padding: 0 0 0 0;
    position: absolute;
    text-align: center;
    top: 0;
    max-width: 200px;
    z-index: 10;
    li {
      display: inline-block;
      left: 0px;
      list-style: none;
      margin: 0 0 10px 0;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      top: 23px;
      transform:scale(0.1);
      a {
        background-color: #fff;
        border: 2px solid #000000;
        color: #000000;
        display: block;
        font-size: 12px;
        overflow: hidden;
        padding: 10px;
        text-decoration: none;
        text-transform: uppercase;
      }
    }
  }
}
</style>
