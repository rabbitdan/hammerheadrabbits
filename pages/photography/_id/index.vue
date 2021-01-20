<template>
  <div class="photography">
    <subNavButtons></subNavButtons>
    <ImagePage></ImagePage>
  </div>
</template>

<script>
  import ImagePage from "@/components/ImagePage.vue";
  import subNavButtons from "@/components/subNavButtons";
  export default {
    components: {
      subNavButtons,
      ImagePage
    }
  }
</script>

<style lang="scss" scoped>
  //.st0 {fill: #fff;}
  .thumb-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0 auto;
    max-width: 100%;
    position: relative;
    @media screen and (min-width: 768px) {
      margin: 0 auto;
    }
    //.image__wrap {
    //  margin: 0 20px 20px 0;
    //  overflow: hidden;
    //  .image__thumb {
    //    display: block;
    //    margin: 0;
    //    max-width: 100%;
    //    width: 100%;
    //    height: auto;
    //    @media screen and (min-width: 768px) {
    //      height: 200px;
    //      width: auto;
    //    }
    //  }
    //  .image__header {
    //    font-size: 8vw;
    //    line-height: 6.5vw;
    //    overflow-wrap: break-word;
    //    word-break: break-word;
    //    @media screen and (min-width: 550px) {
    //      font-size: 2.5vw;
    //      line-height: 2vw;
    //    }
    //    @media screen and (min-width: 768px) {
    //      font-size: 1.9vw;
    //      line-height: 1.7vw;
    //    }
    //  }
    //}
    .image__big {
      align-items: center;
      background-color: rgba(255, 255, 255, 0.7);
      display: flex;
      height: 100vh;
      justify-content: center;
      margin: 0 0 0 0;
      position: fixed;
      right: 30px;
      top: 0;
      visibility: hidden;
      width: calc(100% - 60px);
      @media screen and (min-width: 768px) {
        right:0;
        width: calc(100% - 30px);
      }
      //.close {
      //  background-image: url('~assets/images/close.svg');
      //  display: block;
      //  height: 30px;
      //  position: absolute;
      //  right: 20px;
      //  top: 20px;
      //  width: 30px;
      //}
      //.image__theimage {
      //  display: block;
      //  margin: 0 0 0 0;
      //  max-height: 75vh;
      //  max-width: 90vw;
      //  position: relative;
      //  transform: translateY(50px);
      //  @media screen and (min-width: 768px) {
      //    align-self: center;
      //    margin: 0 auto;
      //    width: auto;
      //  }
      //  img {
      //    max-width: 90vw;
      //  }
      //}
    }
  }

</style>
