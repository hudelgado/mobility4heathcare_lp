<template>
  <q-page class="home flex column">
    <div class="content flex column">
      <img alt="Mobility4health" src="~assets/Vertical-branco.svg" class="callout">
      <p class="callout-text">Bem-vindo à aplicação que apoia o transporte dos profissionais de saúde durante a pandemia CODIV-19. Para que consiga chegar em segurança ao seu destino.</p>
      <div>
        <h3 class="tittle" style="font-size: 1.5rem;">Brevemente disponível</h3>
      </div>
      <img src="~/assets/landing.svg" class="callout-logo"/>
      <div class="footer">
        <SocialLinks></SocialLinks>
        <img src="~/assets/tech4covid.svg" class="logo"/>
      </div>
    </div>
    <img src="~/assets/crosses.svg" style="position: absolute; width: 100vw; height: 100vh; top: 0; left: 0;"/>
  </q-page>
</template>

<script>
import SocialLinks from '../components/SocialLinks'

export default {
  name: 'PageIndex',
  methods: {},
  components: {
    SocialLinks
  }
}
</script>
<style lang="scss">
  .q-page.home {
    background: $primary;
    overflow: hidden;
  }
  .home .content {
    width: 100%;
    margin: 4em 0em 1.5em 0em;
    padding: 0;
    text-align: center;
    font-size: 0.9rem;
    flex-direction: column;
    align-items: center;
    z-index: 1;
  }
  .home .content .callout {
    width: 13em;
  }
  .home .content .callout-text {
    margin-top: 1em;
    margin-bottom: 3em;
    max-width: 85%;
  }
  .home .content .callout-logo {
    margin-top: -2em;
  }
  .to_campanhas {
    background: $secondary;
    z-index: 10;
  }
  .to_operators {
    border: 3px solid $secondary;
    z-index: 10;
    margin: 1rem 0;
  }
  .home .content .logo {
    height: 25px;
    margin: 3rem 0 1rem 0;
  }
  .m4h-button {
    width: 100%;
  }
  @media (min-width: 724px) {
    .home .content {
      max-width: 724px;
    }
    .home .content .callout {
      width: 70%
    }

    .callout-logo {
      margin-left: -2em;
    }

    .home .content {
      margin: 4em 0em 1.5em 0em;
      padding: 0 10em;
      text-align: left;
      font-size: 0.9rem;
      flex-direction: column;
      align-items: start;
    }
    .footer {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      margin-left: -4rem;
    }
    .home .content .logo {
      height: 60px;
      margin: 0;
    }
  }
</style>
