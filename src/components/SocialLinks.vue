<template>
  <div class="social_medias">
    <img src="~/assets/icon-facebook.svg" class=""/>
    <img src="~/assets/icon-insta.svg" class=""/>
    <img src="~/assets/icon-twitter.svg" class="" />
  </div>
</template>

<script>
export default {
  name: 'SocialLinks'
}
</script>
<style lang="scss">
  .social_medias {
    display: flex;
    width: 100%;
    justify-content: center;
  }
  .social_medias > img {
    width: 2.8rem;
    margin: 0 0.5rem;
  }
</style>
