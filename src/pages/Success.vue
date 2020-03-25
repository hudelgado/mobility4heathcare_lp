<template>
  <q-page class="succeess" >
      <q-toolbar>
        <q-toolbar-title>
        </q-toolbar-title>

        <q-btn dense flat>
          <img src="~/assets/menu.svg">
        </q-btn>
      </q-toolbar>

      <div class="content column flex">
        <p class="message">Obrigado por submeter os seus dados. Irá receber um email de confirmação em breve</p>
        <div class="flex-centered" style="width: 100%;">
          <img src="~/assets/success.svg" to="/">
        </div>
        <q-btn flat rounded class="to_home" label="Voltar à homepage" to="/" />
        <SocialLinks style="margin-top: 3rem"></SocialLinks>
      </div>
  </q-page>
</template>

<script>
import SocialLinks from '../components/SocialLinks'

export default {
  name: 'PageSuccess',
  components: {
    SocialLinks
  },
  data () {
    return {
      volunteers: [
        { avatar: null, name: 'António Costa', role: 'Product Owner' },
        { avatar: null, name: 'António Costa', role: 'Product Owner' },
        { avatar: null, name: 'António Costa', role: 'Product Owner' },
        { avatar: null, name: 'António Costa', role: 'Product Owner' },
        { avatar: null, name: 'António Costa', role: 'Product Owner' },
        { avatar: null, name: 'António Costa', role: 'Product Owner' }
      ]
    }
  }
}
</script>
<style lang="scss">
  .q-page.succeess {
    background: $primary;
    overflow-x: hidden;
    padding: 0 2rem;
    text-align: center;
  }
  .q-page.succeess p {
    font-size: 1.12rem;
    line-height: 175.1%;
  }
  .q-page.succeess .message {
    padding-top: 3rem;
    margin-left: 2rem;
    margin-right: 1rem;
  }
.q-page.succeess .to_home {
  margin: 0 1rem;
  background: $secondary;
  padding: 1rem 0;
  text-transform: none;
  font-weight: bold;
  font-size: 13px;
}
</style>
