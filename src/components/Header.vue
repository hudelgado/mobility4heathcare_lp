<template>
  <q-toolbar class="header" style="z-index: 100;">
    <q-toolbar-title>
      <q-avatar :hidden="home || about">
        <q-btn flat to="/"><img src="~/assets/Monograma-azul.svg" class="app-icon"></q-btn>
      </q-avatar>
    </q-toolbar-title>

    <q-btn dense flat :to="home ? 'sobre_nos' : '/'" class="action">
      <img src="~/assets/menu.svg" :hidden="!home || black">
      <img src="~/assets/menu-black.svg" :hidden="!black || !home">
      <img src="~/assets/close.svg" :hidden="!about">
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
    operators: Boolean
  }
}
</script>
