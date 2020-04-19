<template>
  <q-layout view="hHh lpR fFf">

    <q-drawer v-model="right" side="right" overlay behavior="mobile" elevated>
      <!-- drawer content -->
    </q-drawer>

    <q-page-container>
      <router-view style="align-items: baseline;"/>
    </q-page-container>

  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  data () {
    return {
      right: false
    }
  }
}
</script>
<style lang="scss">
  .q-header .q-avatar .app-icon {
    width: 2.2rem;
    border-radius: 0;
  }
  .btn .q-btn__content {
    text-transform: capitalize;
  }
</style>
