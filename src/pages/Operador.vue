<template>
  <q-page class="operador" style="color: black;">
    <div ref="operatorLogo" class="wrapper" style="position: relative;">
        <Header operator class="page-header"></Header>
        <AuthImg class="operator-logo mobile" :authSrc="getImageUrl(this.$route.params.id, 'mobile')" :thumb="operator.imagem"></AuthImg>
        <AuthImg class="operator-logo desktop" :authSrc="getImageUrl(this.$route.params.id, 'desktop')" :thumb="operator.imagemlarge" ></AuthImg>
    </div>
    <div class="content">
      <div style="flex: 3;">
        <div><h5>Sobre a {{ operator.nome }}</h5></div>
        <div class="description">
            <div class="respect-line-breaks">{{ operator.descricao }}</div>
        </div>
      </div>
      <div class="sidebar">
        <div>
          <div><h5>Distritos</h5></div>
          <div style="text-align: left">
            {{ getDistricts() }}
          </div>
        </div>
        <div v-if="operator.contacto || operator.email">
          <div><h5>Contacta-nos</h5></div>
          <div class="contacts" v-if="operator.contacto">
            <a :href="`tel:${operator.contacto}`" target="_blank"><img src="~/assets/tel.svg" alt="telefone" /></a>
            <span>{{operator.contacto}}</span>
          </div>
          <div class="contacts" style="margin-top: 0.5rem;">
            <a :href="`mailto:${operator.email}`" target="_blank"><img src="~/assets/mail.svg" alt="mail" /></a>
            <span style="display: inline-block;">{{operator.email}}</span>
          </div>
        </div>
        <div v-if="operator.facebook || operator.instagram || operator.twitter">
          <div><h5>Redes Sociais</h5></div>
          <div style="text-align: left">
            <SocialLinks blue
              :facebook="operator.facebook"
              :instagram="operator.instagram"
              :twitter="operator.twitter"
              style="justify-content: flex-start;">
            </SocialLinks>
          </div>
        </div>
        <div v-if="operator.site">
          <div><h5>Website</h5></div>
          <div style="text-align: left; font-size: 16px;"><a :href="operator.site" rel="noopener" target="_blank" style="text-decoration: none; color:rgb(0, 0, 0);">{{operator.site}}</a></div>
        </div>
      </div>
      <div style="height: 5em; width: 1px" />
    </div>
  </q-page>
</template>

<script>
import Header from '../components/Header'
import { validateEmail } from '../common/helpers'
import AuthImg from '../components/AuthImg'
import SocialLinks from '../components/SocialLinks'
import { createNamespacedHelpers } from 'vuex'
import { getImagesUrl } from '../common/api'

const { mapState } = createNamespacedHelpers('app')

export default {
  name: 'Operador',
  components: {
    Header,
    AuthImg,
    SocialLinks
  },
  data: function () {
    return {}
  },
  computed: {
    valid: {
      get: function () {
        return this.client && this.email && this.message
      }
    },
    operator: {
      get: function () {
        const operator = (this.operators || []).find(x => x.operadoresid.toString() === this.$route.params.id)
        return operator || {}
      }
    },
    ...mapState({
      operators: function (state) {
        return state.operators
      },
      allDistricts: function (state) {
        return state.districts
      }
    })
  },
  methods: {
    validateEmail (email) {
      return validateEmail(email)
    },
    getScreenWidth: function () {
      return document.documentElement.clientWidth
    },
    getImageUrl (operator, size) {
      return getImagesUrl(operator, null, size)
    },
    getDistricts () {
      const districts = this.allDistricts.reduce((acc, curr, i) => {
        acc[curr.distritosid] = curr
        return acc
      }, {})
      const operatorDistricts = this.operator.distritos || ''
      const operatorDistrictsLabels = operatorDistricts.split(',').map(id => {
        return id in districts ? districts[id].designacao : ''
      })
      const districtsListing = operatorDistrictsLabels.join(', ').replace(/,$/, '')
      return districtsListing
    }
  },
  meta () {
    return {
      title: `${this.operator.nome} - mob4h`
    }
  }
}
</script>
<style lang="scss">
.operador .desktop {
  display: none !important;
}
.operador h5 {
  margin-block-end: 1rem;
  font-weight: bolder;
}
@media (min-width: $breakpoint-sm-max) {
  .operador .mobile {
    display: none !important;
  }
  .operador .desktop {
    display: flex !important;
  }
}
.operador .wrapper {
  width: 100%;
  color: $secondary;
  position: relative;
}
.operator .page-header {
  position: absolute;
  top: 0;
  left: 0;
}
.operador .wrapper .operator-logo {
  width: 100%;
  height: auto;
  width: auto\9; /* only for ie8 */
  min-height: 13.5rem;
}
.operador .content {
  display: flex;
  flex-direction: column;
  padding: 0 3em;
}
.q-page.operador form > *:not(first-child) {
  margin-top: 2rem;
}
.operador .contacts {
  display: flex;
  align-items: center;
  font-size: 16px;
}
.operador .contacts > *:first-child {
  margin-right: 0.5em;
}

.operador .contacts img {
  width: 34px;
  height: 34px;
}

.operador .content .description {
  font-size: 16px;
  color: #393839;
}
.operador .content .sidebar {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  flex: 1;
  margin-bottom: 3rem;
}

@media (min-width: $breakpoint-sm-max) {
  .operador h5 {
    font-size: 25px;
  }
  .operador h6 {
    font-size: 35px;
    margin-left: 2rem;
  }
  .operador .content {
    flex-direction: row;
  }
  .operador .content .sidebar {
    display: flex;
    flex-wrap: wrap;
    padding: 1rem;
    flex: 1;
    flex-direction: column;
  }
  .operador .content .description {
    font-size: 18px;
    color: #393839;
    padding: 2em;
  }
  .operador .wrapper .operator-logo {
    min-height: 20rem;
  }
}
</style>
