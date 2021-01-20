<template>
  <div class="container">
    <section id="home__intro" class="homescreen intro">
      <div class="home__content">
        <Hello />
        <ImDanFone />
        <p class="hello__text">I love building digital experiences. I draw, take photographs and make exhibitions. I bring my knowledge of each of those in to my web projects.</p>
        <DanRabbit />
      </div>
    </section>
  </div>
</template>

<script>
  import Hello from "@/components/Hello.vue";
  import ImDanFone from "@/components/ImDanFone.vue";
  import DanRabbit from "@/components/DanRabbit.vue";
  export default {
   components: {
     Hello,
     ImDanFone,
     DanRabbit
   }
  }
</script>

<style lang="scss" scoped>
  .homescreen {
    display: block;
    position: relative;
    width: 100%;
    &.intro {
      display: block;
      .home__content {
        background: #fff;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 80px 0 0 0;
        position: relative;
        top:0;
        width:100%;
        @media screen and (min-width: 769px) {
          height: 80%;
          margin: 12% 25% 10% 25%;
          width: 50%;
        }
        .hello__text {
          text-align: left;
          @media screen and (max-height: 700px) {
            padding: 0 0 10px;
          }
        }
      }
    }
  }
</style>
