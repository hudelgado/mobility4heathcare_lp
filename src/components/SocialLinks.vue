<template>
  <div class="social_medias">
    <a v-if="facebook && !blue" :href="facebook" rel="noopener" target="_blank"><img src="~/assets/icon-facebook.svg" alt="link facebook"/></a>
    <a v-if="facebook && blue" :href="facebook" rel="noopener" target="_blank"><img src="~/assets/icon-facebook-blue.svg" alt="link facebook" /></a>
    <a v-if="instagram && !blue" :href="instagram" rel="noopener" target="_blank"><img src="~/assets/icon-instagram.svg" alt="link instagram" /></a>
    <a v-if="instagram && blue" :href="instagram" rel="noopener" target="_blank"><img src="~/assets/icon-instagram-blue.svg" alt="link instagram" /></a>
    <a v-if="twitter && !blue" :href="twitter" rel="noopener" target="_blank"><img src="~/assets/icon-twitter.svg" alt="link twitter" /></a>
    <a v-if="twitter && blue" :href="twitter" rel="noopener" target="_blank"><img src="~/assets/icon-twitter-blue.svg" alt="link twitter" /></a>
  </div>
</template>

<script>
export default {
  name: 'SocialLinks',
  props: {
    blue: Boolean,
    facebook: String,
    instagram: String,
    twitter: String
  }
}
</script>
<style lang="scss">
  .social_medias {
    display: flex;
  }
  .social_medias > * {
    width: 2.8rem;
    margin: 0 0.5rem;
  }
</style>
