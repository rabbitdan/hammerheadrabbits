<template>
  <div class="container">
    <section id="home__development" class="development">
      <h1 class="content__header">Development</h1>
      <p class="development__intro">I'm used to changing hats and acting as a project manager and designer's developer because I've done those jobs myself. I have worked for a wide range of agencies and industries ranging from healthcare (Cherry Thinking) to building management (CBRE). While I'm more likely to use JavaScript these days I&rsquo;ve had to use a lot of different technologies along the way, including PHP (Laravel) and ASP.Net. This site is built in VueJS (Nuxt) with animations done in Greensock.</p>
      <div class="sites">
        <SiteList @update-site="updateSite"></SiteList>
        <div class="sitebox">
          <transition name="fade" mode="out-in">
            <SingleSite v-bind:currentSite="'kiloa'" @current-image="currentImage" v-if="currentSite === 'kiloa'" key="1">
              <template v-slot:imagebox>
                <v-lazy-image key="kiloa_1" v-if="currentSiteImage === 'kiloa_ourapproach'" :src="require(`~/assets/images/dev/kiloa_ourapproach.jpg`)" :src-placeholder="require(`~/assets/images/dev/lqp/kiloa_ourapproach.png`)" alt="Kiloa - Our Approach thumbnail" class="site__image" width="700" height="438"></v-lazy-image>
                <v-lazy-image key="kiloa_2" v-else-if="currentSiteImage === 'kiloa_whatweoffer'" :src="require(`~/assets/images/dev/kiloa_whatweoffer.jpg`)" :src-placeholder="require(`~/assets/images/dev/lqp/kiloa_whatweoffer.png`)" alt="Kiloa - What we offer thumbnail" class="site__image" width="700" height="438"></v-lazy-image>
                <v-lazy-image key="kiloa_3" v-else-if="currentSiteImage === 'kiloa_kingswoodbaptist'" :src="require(`~/assets/images/dev/kiloa_kingswoodbaptist.jpg`)" :src-placeholder="require(`~/assets/images/dev/lqp/kiloa_kingswoodbaptist.png`)" alt="Kiloa - Kingswood Baptist thumbnail" class="site__image" width="700" height="438"></v-lazy-image>
                <v-lazy-image key="kiloa_4" v-else-if="currentSiteImage === 'kiloa_kingsleyhall'" :src="require(`~/assets/images/dev/kiloa_kingsleyhall.jpg`)" :src-placeholder="require(`~/assets/images/dev/lqp/kiloa_kingsleyhall.png`)" alt="Kiloa - Kingsley Hall" class="site__image" width="700" height="438"></v-lazy-image>
                <video key="kiloa_5" v-else-if="currentSiteImage === 'kiloa_video'" controls width="600">
                  <source src="~/assets/video/kiloa.mp4" placeholder="~/assets/images/dev/kiloa_home.jpg" type="video/mp4">
                  Sorry, your browser doesn't support embedded videos.
                </video>
                <v-lazy-image key="kiloa_6" v-else :src="require(`~/assets/images/dev/kiloa_home.jpg`)" :src-placeholder="require(`~/assets/images/dev/lqp/kiloa_home.png`)" alt="Kiloa - Home thumbnail" class="site__image" width="700" height="438"></v-lazy-image>
              </template>
            </SingleSite>
            <SingleSite v-bind:currentSite="'troyelliottmusic'" @current-image="currentImage" v-else-if="currentSite === 'troyelliottmusic'" key="2">
              <template v-slot:imagebox>
                <v-lazy-image key="troyelliottmusic_1" v-if="currentSiteImage === 'troyelliottmusic_nav'" :src="require(`~/assets/images/dev/troyelliottmusic_nav.jpg`)" :src-placeholder="require(`~/assets/images/dev/lqp/troyelliottmusic_nav.png`)" alt="Troy Elliot Music - Nav thumbnail" class="site__image" ref="img" width="700" height="438"></v-lazy-image>
                <v-lazy-image key="troyelliottmusic_2" v-else-if="currentSiteImage === 'troyelliottmusic_hometext'" :src="require(`~/assets/images/dev/troyelliottmusic_hometext.jpg`)" :src-placeholder="require(`~/assets/images/dev/lqp/troyelliottmusic_hometext.png`)" alt="Troy Elliott Music - Intro text thumbnail" class="site__image" ref="img" width="700" height="438"></v-lazy-image>
                <v-lazy-image key="troyelliottmusic_3" v-else-if="currentSiteImage === 'troyelliottmusic_gallery'" :src="require(`~/assets/images/dev/troyelliottmusic_gallery.jpg`)" :src-placeholder="require(`~/assets/images/dev/lqp/troyelliottmusic_gallery.png`)" alt="Troy Elliott Music - Gallery thumbnail" class="site__image" ref="img" width="700" height="438"></v-lazy-image>
                <video key="troyelliottmusic_4" v-else-if="currentSiteImage === 'troyelliottmusic_video'" controls width="600">
                  <source src="~/assets/video/troyelliottmusic.mp4" placeholder="~/assets/images/dev/troyelliottmusic_home.jpg" type="video/mp4">
                  Sorry, your browser doesn't support embedded videos.
                </video>
                <v-lazy-image key="troyelliottmusic_5" v-else :src="require(`~/assets/images/dev/troyelliottmusic_home.jpg`)" :src-placeholder="require(`~/assets/images/dev/lqp/troyelliottmusic_home.png`)" alt="Troy Elliott Music - thumbnail" class="site__image" ref="img" width="700" height="438"></v-lazy-image>
              </template>
            </SingleSite>
            <SingleSite v-bind:currentSite="'jabberworks'" @current-image="currentImage" v-else-if="currentSite === 'jabberworks'" key="3">
              <template v-slot:imagebox>
                <v-lazy-image key="jabberworks_1" v-if="currentSiteImage === 'jabberworks_about'" :src="require(`~/assets/images/dev/jabberworks_about.jpg`)" :src-placeholder="require(`~/assets/images/dev/lqp/jabberworks_about.png`)" alt="Jabberworks - About thumbnail" class="site__image" width="700" height="438"></v-lazy-image>
                <v-lazy-image key="jabberworks_2" v-else-if="currentSiteImage === 'jabberworks_illustrations'" :src="require(`~/assets/images/dev/jabberworks_illustrations.jpg`)" :src-placeholder="require(`~/assets/images/dev/lqp/jabberworks_illustrations.png`)" alt="Jabberworks - Illustrations thumbnail" class="site__image" width="700" height="438"></v-lazy-image>
                <v-lazy-image key="jabberworks_3" v-else-if="currentSiteImage === 'jabberworks_sharkinthebath'" :src="require(`~/assets/images/dev/jabberworks_sharkinthebath.jpg`)" :src-placeholder="require(`~/assets/images/dev/lqp/jabberworks_sharkinthebath.png`)" alt="Jabberworks - Shark in the bath thumbnail" class="site__image" width="700" height="438"></v-lazy-image>
                <video key="jabberworks_4" v-else-if="currentSiteImage === 'jabberworks_video'" controls width="600">
                  <source src="~/assets/video/jabberworks.mp4" placeholder="~/assets/images/dev/jabberworks_home.jpg" type="video/mp4">
                  Sorry, your browser doesn't support embedded videos.
                </video>
                <v-lazy-image key="jabberworks_5" v-else :src="require(`~/assets/images/dev/jabberworks_home.jpg`)" :src-placeholder="require(`~/assets/images/dev/lqp/jabberworks_home.png`)" alt="Jabberworks - Home thumbnail" class="site__image" width="700" height="438"></v-lazy-image>
              </template>
            </SingleSite>
            <SingleSite v-bind:currentSite="'henryjacobsen'" @current-image="currentImage" v-else key="4">
              <template v-slot:imagebox>
                <v-lazy-image key="henryjacobsen_1" v-if="currentSiteImage === 'henryjacobsen_nav'" :src="require(`~/assets/images/dev/henryjacobsen_nav.jpg`)" :src-placeholder="require(`~/assets/images/dev/lqp/henryjacobsen_nav.png`)" alt="Henry Jacobsen - Nav thumbnail" class="site__image" ref="img" width="700" height="438"></v-lazy-image>
                <v-lazy-image key="henryjacobsen_2" v-else-if="currentSiteImage === 'henryjacobsen_about'" :src="require(`~/assets/images/dev/henryjacobsen_about.jpg`)" :src-placeholder="require(`~/assets/images/dev/lqp/henryjacobsen_about.png`)" alt="Henry Jacobsen - About thumbnail" class="site__image" ref="img" width="700" height="438"></v-lazy-image>
                <v-lazy-image key="henryjacobsen_3" v-else-if="currentSiteImage === 'henryjacobsen_sessions'" :src="require(`~/assets/images/dev/henryjacobsen_sessions.jpg`)" :src-placeholder="require(`~/assets/images/dev/lqp/henryjacobsen_sessions.png`)" alt="Henry Jacobsen - Sessions thumbnail" class="site__image" ref="img" width="700" height="438"></v-lazy-image>
                <v-lazy-image key="henryjacobsen_4" v-else-if="currentSiteImage === 'henryjacobsen_testimonials'" :src="require(`~/assets/images/dev/henryjacobsen_testimonials.jpg`)" :src-placeholder="require(`~/assets/images/dev/lqp/henryjacobsen_testimonials.png`)" alt="Henry Jacobsen - Testimonials thumbnail" class="site__image" ref="img" width="700" height="438"></v-lazy-image>
                <video key="henryjacobsen_5" v-else-if="currentSiteImage === 'henryjacobsen_video'" controls class="site__video">
                  <source src="~/assets/video/henryjacobsen.mp4" placeholder="~/assets/images/dev/henryjacobsen_home.jpg" type="video/mp4">
                  Sorry, your browser doesn't support embedded videos.
                </video>
                <v-lazy-image key="henryjacobsen_6" v-else :src="require(`~/assets/images/dev/henryjacobsen_home.jpg`)" :src-placeholder="require(`~/assets/images/dev/lqp/henryjacobsen_home.png`)" alt="Henry Jacobsen - Home thumbnail" class="site__image" width="700" height="438"></v-lazy-image>
              </template>
            </SingleSite>
          </transition>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import SingleSite from "@/components/SingleSite.vue";
  import SiteList from "@/components/SiteList.vue";
  export default {
    data() {
      return {
        currentSite: 'henryjacobsen',
        currentSiteImage: 'henryjacobsen_home'
      }
    },
    props: ['site'],
    components: {
      SingleSite,
      SiteList
    },
    methods: {
      currentImage(siteThumb) {
        this.currentSiteImage = `${this.currentSite}_${siteThumb}`;
      },
      updateSite(e) {
        this.currentSite = e;
      }
    }
  }
</script>

<style lang="scss" scoped>
.development {
  .development__intro {
    display: block;
    margin: 0 0 0 0;
  }
  .sites {
    display: block;
    @media screen and (min-width: 600px) {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    @media screen and (min-width: 720px) {
      flex-direction: row;
    }
  }
}
</style>
