<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="text-primary">
      <q-toolbar >
        <q-btn
          flat
          to="/"
        >
          <img
            alt="Quasar logo"
            src="~assets/tech4COVID19-Logo-Transparent.png"
            width=150
          >

        </q-btn>
        <q-toolbar-title>
          <div class="text-dark">Mobilidade Urbana para profissionais de Saúde</div>
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
