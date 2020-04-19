<template>
  <div class="lazy-image" ref="thumb" :style="`background-image: url('${thumb}');`">
  </div>
</template>

<script>
export default {
  name: 'LazyImg',
  data () {
    return {
      loaded: false
    }
  },
  props: {
    thumb: String,
    src: String,
    width: Number
  },
  watch: {
    src: {
      immediate: true,
      handler (newValue, oldValue) {
        if (newValue !== oldValue) {
          const img = document.createElement('img')
          img.src = this.src
          img.onload = _ => {
            this.loaded = true
            this.$refs.thumb.appendChild(img)
          }
        }
      }
    }
  }
}
</script>
<style lang="scss">
.lazy-image {
    display: block;
    position: relative;
    background-size: 100% 100%;
    /* image-rendering: pixelated; */
    width: 100%;
    height: 100%;
}
.lazy-image img {
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
