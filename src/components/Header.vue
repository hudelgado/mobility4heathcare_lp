<template>
  <q-toolbar class="header">
    <q-toolbar-title></q-toolbar-title>

    <q-btn dense flat to="sobre_nos" class="action">
      <img src="~/assets/menu.svg">
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
  }
}
</script>
