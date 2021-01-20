<template>
  <div class="container">
    <section id="home__about" class="about">
      <h1 class="content__header">About</h1>
      <div class="about__box">
        <v-lazy-image
          :src="require(`~/assets/images/about/dan-lookup-med.jpg`)"
          :src-placeholder="require(`~/assets/images/about/dan-lookup-med-lqp.png`)"
          class="about__img" alt="Me"
          use-picture>
          <source :srcset="require(`~/assets/images/about/dan-lookup-med.webp`)"
                  type="image/webp" />
        </v-lazy-image>
        <ul class="about__list">
          <li>I have a Masters in Digital Arts (distinction). Yay me.</li>
          <li>I’ve cycled (very slowly) through the Alps. It would have been a lot easier without the 20kg of luggage. Maybe next time I’ll just take my toothbrush and a pair of pants.</li>
          <li>I’m hard of hearing and wear two hearing aids. It’s not really that big a deal though.</li>
          <li>I listen to a lot of music. Most of it is either drones, bleeps or sounds like things being kicked down a spiral staircase. Did I mention I’m hard of hearing?</li>
          <li>I love both high and low culture. I’m generally not that bothered about the three for two table in Waterstones though.</li>
          <li>I think the journalists are right when they say Middlemarch is the greatest novel written in English.</li>
          <li>You can email me at <a class="textlink" href="mailto:dan&#64;hammerheadrabbits.com">dan&#64;hammerheadrabbits.com</a></li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script></script>

<style lang="scss">
.about {
  .about__box {
    display: flex;
    flex-direction: column;
    margin: 0 0 80px 0;
    @media screen and (min-width: 768px) {
      flex-direction: row;
    }
  }
  .about__img {
    align-self: flex-start;
    margin: 0 0 0 0;
    object-fit: contain;
    width: 100%;
    max-width: 600px;
    @media screen and (min-width: 768px) {
      margin: 0 5% 5% 5%;
      width: 40%;
    }
    .v-lazy-image {
      height: auto;
    }
  }
  .about__list {
    margin: 50px 0 0 20px;
    padding: 0 0 0 0;
    width: 100%;
    @media screen and (min-width: 768px) {
      margin: 0 0 0 30px;
      width: 40%;
    }
  }
}
</style>
