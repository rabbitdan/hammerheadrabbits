<template>
  <div class="sketchbook">
    <ImagePage></ImagePage>
  </div>
</template>

<script>
  import ImagePage from "../../../components/ImagePage.vue";
  export default {
    components: {
      ImagePage
    }
  }
</script>

<style lang="scss">
  .sketchbook {
    .container {
      .thumb-container {
        .image__wrap {
          .image__header {
            text-shadow: 0px 0px 1px rgba(0, 0, 0, 1) !important;
            transition: 0.3s;
            &:hover {
              text-shadow: none !important;
              transition: 0.3s;
            }
          }
        }
        .image__big {
          box-shadow: 0px 0px 40px 40px rgba(255,255,255,1) !important;
        }
      }
    }
  }
</style>
