<template>
  <q-page class="campanhas flex column">
    <Header campaigns></Header>
    <div class="q-pa-md" style="width: 100%">
      <q-btn color="white" text-color="black" style="display: flex; width: 100%;" >
        <div style="font-weight: bold;text-transform: none; font-size: 14pt;">Filtrar</div>
        <q-space />
        <q-icon right size="3em" name="keyboard_arrow_right" />
      </q-btn>
      <div v-for="(item, index) in [1,2,3]" :key="index">
        <q-card class="my-card">
          <div class="actions">
            <img src="~/assets/icon-facebook.svg" class="action"/>
            <img src="~/assets/icon-insta.svg" class="action"/>
            <img src="~/assets/icon-twitter.svg" class="action"/>
          </div>
          <q-card-section>
            <div class="title" style="font-size: 16px; margin: 10px 0;">Lorem Ipsum</div>
            {{ lorem }}
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import Header from '../components/Header'

export default {
  name: 'PageCampanhas',
  data () {
    return {
      filtering: false,
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }
  },
  components: {
    Header
  }
}
</script>
<style lang="scss">
.my-card {
  margin-top: 1em;
  width: 100%;
  color: #393839;
  font-size: 13px;
}
.actions {
  background: #ADD3F6;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.actions .action {
  width: 36px;
  height: 36px;
  margin: 5px 10px;
}
</style>
