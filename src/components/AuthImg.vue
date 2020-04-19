<template>
  <div class="auth-image" ref="thumb" :style="`background-image: url('${thumb}');`"></div>
</template>

<script>
import { requestImage } from '../common/api'

export default {
  name: 'AuthImg',
  props: {
    thumb: String,
    authSrc: String,
    width: Number
  },
  mounted: function () {
    if (this.authSrc) {
      requestImage(this.authSrc, this.updateImageFromRequest)
    }
  },
  methods: {
    updateImageFromRequest: function (request) {
      const img = document.createElement('img')
      img.src = URL.createObjectURL(request.response)
      img.onload = () => {
        URL.revokeObjectURL(img.src)
        this.$refs.thumb.appendChild(img)
      }
    }
  },
  watch: {
    authSrc: {
      immediate: true,
      handler (newValue, oldValue) {
        if (this.$refs.img && newValue !== oldValue) {
          requestImage(newValue, this.updateImageFromRequest)
        }
      }
    }
  }
}
</script>
<style lang="scss">
.auth-image {
    display: block;
    position: relative;
    background-size: 100% 100%;
    /* image-rendering: pixelated; */
    width: 100%;
    height: 100%;
}
.auth-image img {
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  animation-name: fade-in;
  animation-duration: 2s;
}
@keyframes fade-in {
  from {opacity: 0}
}
</style>
