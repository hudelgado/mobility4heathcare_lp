<template>
  <q-toolbar class="header" style="z-index: 100;">
    <q-toolbar-title></q-toolbar-title>

    <q-btn dense flat :to="menu ? 'sobre_nos' : '/'" class="action">
      <img src="~/assets/menu.svg" :hidden="!menu">
      <img src="~/assets/close.svg" :hidden="!close">
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
    menu: Boolean,
    close: Boolean
  }
}
</script>
