<template>
  <q-page class="home flex column">
    <Header home></Header>
    <div class="content">
      <img class="logo" alt="Mobility4health logo" src="~assets/Vertical-branco.svg" >
      <p class="texto">Bem-vindo(a) à plataforma que dá a conhecer as opções de transporte exclusivas para os profissionais de saúde, durante a pandemia COVID-19. Para que consigam chegar sempre ao seu destino.</p>
      <div class="ca">
        <q-btn flat rounded class="to_campanhas m4h-button" label="Ofertas disponíveis" to="/campanhas" />
        <q-btn flat rounded class="to_operators m4h-button" label="Sou um operador de transportes" to="/registo/operador" />
      </div>
      <div class="callout-logo"><img src="~/assets/landing.svg" style="display: absolute;" alt="banner" /></div>
      <div class="footer">
        <SocialLinks :facebook="facebook_url" :twitter="twitter_url" :instagram="instagram_url"></SocialLinks>
        <a href="https://tech4covid19.org/" rel="noopener" target="_blank"><img src="~/assets/tech4covid.svg" class="logo" style="max-width:200px; height: 40px; margin-right: 25px;" alt="logo tech4covid"/></a>
        <a href="https://www.4p2p.pt" rel="noopener" target="_blank"><img src="~/assets/4p2p.svg" class="logo" style="max-width:200px; height: 40px;" alt="powered by 4p2p"/></a>
      </div>
    </div>
    <img src="~/assets/crosses.svg" style="position: absolute; width: 100vw; height: 100vh; top: 0; left: 0;" alt="fundo"/>
  </q-page>
</template>

<script>
import SocialLinks from '../components/SocialLinks'
import Header from '../components/Header'

export default {
  name: 'PageIndex',
  data: function () {
    return {
      facebook_url: 'https://www.facebook.com/mobility.healthcare.10',
      instagram_url: 'https://www.instagram.com/mobility4healthcare/',
      twitter_url: 'https://twitter.com/Mobility4H'
    }
  },
  created () {
    this.$store.dispatch('app/storeAnalyticsLanding')
  },
  methods: {},
  components: {
    SocialLinks,
    Header
  },
  meta: {
    title: 'Home',
    titleTemplate: title => `${title} - mob4h`,

    meta: {
      keywords: { name: 'keywords', content: 'Mobilidate saúde operadores transporte covid' },
      equiv: { 'http-equiv': 'Content-Type', content: 'text/html; charset=UTF-8' }
    },

    noscript: {
      default: 'Este site precisa de javascript para funcionar'
    }
  }
}
</script>
<style lang="scss">
  .q-page.home {
    background: $primary;
    overflow: hidden;
  }
  .q-page.home .content {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: minmax(5em, auto) 10fr 10fr auto;
    grid-template-areas:
      "logo . . . ."
      "texto texto callout-logo callout-logo callout-logo"
      "ca ca ca . ."
      "socials socials socials . ."
  }
  .logo { grid-area: logo ;}
  .texto {
    grid-area: texto;
    font-size: 16px;
    max-width: 30rem;
    margin: 0 !important;
  }
  .ca {
    grid-area: ca ;
    display: flex;
    flex-wrap: wrap;
  }
  .ca > * {
    max-width: 18rem;;
  }

  .home .content {
    width: 100%;
    margin: 4em 0em 1.5em 0em;
    padding: 0;
    text-align: center;
    font-size: 0.9rem;
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
  .home .content .content {
    margin-top: -2em;
    margin-left: 1em;
  }
  .to_campanhas {
    background: $secondary;
    z-index: 10;
    margin-bottom: 1em;
    grid-area: campanhas;
  }
  .to_operators {
    border: 3px solid $secondary;
    z-index: 10;
    grid-area: operadores;
    margin-left: 1rem;
  }
  .callout-logo { grid-area: callout-logo; }
  .callout-logo img {
    width: 48rem;
    position: absolute;
    top: 10rem;
  }
  .home .content .logo {
    height: 465px;
    margin: 3rem 0 1rem 0;
  }
  .m4h-button {
    width: 100%;
  }
  .footer {
    width: 100%;
    grid-area: socials;
  }
  .footer .social_medias {
    margin-right: 2rem;
  }
  @media (min-width: $breakpoint-md-max) {

    .callout-logo {
      margin-left: -2em;
    }
    .to_campanhas {
      margin-bottom: 0;
    }
    .home .q-btn__wrapper {
      padding: 0
    }
    .home .content {
      margin: 14em 0em 0 5rem;
      padding: 0 10em;
      text-align: left;
      font-size: 0.9rem;
      // flex-direction: column;
      align-items: start;
    }
    .home .content .callout {
      margin-left: 2em;
    }
    .home .footer {
      display: flex;
      align-items: center;
      flex-direction: row;
      justify-content: flex-start;
    }
    .home .content .logo {
      height: 165px;
      margin: 0;
    }
  }
  @media (max-width: $breakpoint-md-max) {
    .q-page.home .content {
      display: flex;
      flex-direction: column;
    }
    .q-page.home .ca {
      display: flex;
      flex-direction: column;
    }
    .callout-logo img {
      width: auto;
      position: relative;
      top: 0;
    }
    .home .to_operators {
      margin-left: 0;
    }
    .home .content .logo {
      height: 100px;
      margin: 3rem 0 1rem 0;
    }
    .home .texto {
      margin: 1rem !important;
    }
    .home .footer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    .home .footer .logo {
      max-width: 150px;
    }
    .footer .social_medias {
      margin-right: 0;
    }
  }
</style>
