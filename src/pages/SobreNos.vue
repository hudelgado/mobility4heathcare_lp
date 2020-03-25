<template>
  <q-page class="about" >
    <div class="page" style="padding: 0 2rem;">
      <q-toolbar>
        <q-toolbar-title>
        </q-toolbar-title>

        <q-btn dense flat to="/">
          <img src="~/assets/close.svg" to="/">
        </q-btn>
      </q-toolbar>

      <header class="title"><h5>Sobre nós</h5></header>
      <p style="top: -3rem;">A <b style="font-size: bold;">Mobility Healthcare</b> é uma aplicação criada pelo movimento tech4COVID19 que pretende disponibilizar aos profissionais de saúde alternativas de transporte privado.</p>
      <p>É especialmente direcionada aos profissionais de saúde que pretendem não utilizar a viatura própria e/ou o transporte público, de forma a reduzir o risco de contágio e a fatiga pessoal.</p>
      <p>Para que se desloque com segurança durante a pandemia, são disponibilizados ofertas e descontos de operadores privados.</p>
    </div>
    <div class="who-we-are page">
      <header><h5>Quem somos</h5></header>
      <ul class="grid">
        <li class="volunteer" v-for="(item, index) in volunteers" :key="index">
          <span class="avatar"><img /></span>
          <div class="details">
            <span class="name">{{ item.name }}</span>
            <span class="role">{{ item.role }}</span>
          </div>
        </li>
      </ul>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageSobreNos',
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
  .q-page.about {
    background: $secondary;
    overflow-x: hidden;
  }
  .q-page.about header {
    color: #2F80ED;
  }
  .q-page.about p {
    font-size: 1.12rem;
    line-height: 175.1%;
  }
  .q-page.about .who-we-are {
    margin-top: 5rem;
    background: $support-background;
    text-align: center;
    padding: 1rem 0;
  }
  .q-page.about .grid {
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr;
  }
  .q-page.about .volunteer {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  .q-page.about .volunteer .avatar {
    border-radius: 50%;
    display: block;
    width: 120px;
    height: 119px;
    background: $info;
    color: black;
  }
  .q-page.about .volunteer .name,
  .q-page.about .volunteer .role {
    display: block;
    color: black;
  }
</style>
