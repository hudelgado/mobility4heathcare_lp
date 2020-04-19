<template>
  <q-toolbar class="app_header" >
    <q-btn v-if="campaigns || operators" flat to="/" class="app-icon">
      <img src="~/assets/Horizontal.svg" style="width: 212px;" class="desktop" alt="home">
      <img src="~/assets/Monograma-azul.svg" class="mobile" alt="home">
    </q-btn>
    <q-btn v-if="operator || about" flat @click="$router.go(-1)" class="back desktop"><q-icon name="keyboard_arrow_left"/>Voltar</q-btn>
    <q-btn v-if="operator" flat @click="$router.go(-1)" class="back mobile"><q-icon name="keyboard_arrow_left"/>Voltar</q-btn>

    <q-toolbar-title></q-toolbar-title>

    <q-btn dense flat v-if="home || campaigns || operators || operator || filters" to="/sobre_nos" class="action">
      <img v-if="!black" src="~/assets/menu.svg" class="mobile" alt="sobre nós">
      <img v-if="black" src="~/assets/menu-black.svg" class="mobile" alt="sobre nós">
      <label :class="`desktop ${this.green ? 'green' : this.blue ? 'blue' : ''}`" style="text-transform: none; font-weight: bold;cursor: pointer;">Sobre nós</label>
    </q-btn>
    <q-btn dense flat v-if="about" @click="$router.go(-1)" class="close">
      <img src="~/assets/close.svg" alt="fechar">
    </q-btn>
  </q-toolbar>
</template>

<script>
export default {
  name: 'Header',
  data: function () {
    return {
      title: null,
      secondary: false
    }
  },
  props: {
    home: Boolean,
    about: Boolean,
    operators: Boolean,
    operator: Boolean,
    campaigns: Boolean,
    filters: Boolean,
    black: Boolean,
    green: Boolean,
    blue: Boolean
  }
}
</script>
<style lang="scss">
  .app_header {
    z-index: 100;
  }
  .app_header .green {
    color: $secondary;
  }
  .app_header .blue {
    color: $primary;
  }
  .app_header .desktop {
    display: none !important;
  }
  .app_header .back {
    text-transform: None;
  }
  @media (min-width: $breakpoint-sm-max) {
    .app_header .mobile {
      display: none;
    }
    .app_header .desktop {
      display: block !important;
    }
    .app_header .close {
      display: none;
    }
  }
</style>
