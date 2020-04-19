<template>
  <q-page class="campanhas flex column">
    <Header campaigns black green></Header>
    <div class="q-pa-lg" style="width: 100%">
      <q-btn color="white" text-color="black" style="display: flex; width: 100%;" @click="filtering = true" class="mobile">
        <div style="font-weight: bold;text-transform: none; font-size: 11pt;">Filtrar</div>
        <q-space />
        <q-icon right size="3em" name="keyboard_arrow_right" />
      </q-btn>
      <div class="main-content">
        <div class="desktop filters">
          <q-space />
          <q-btn-toggle
            v-model="filterPromoType"
            toggle-color="primary"
            :options="operations"
            style="margin-right: 1rem;"
          />
          <q-select
            outlined
            v-model="filterTransports"
            :options="transports"
            color="primary"
            style="min-width: 20rem;"
            popup-content-style="background-color: #F5F5F5"
            class=""
          />
        </div>
        <q-card class="district-filters desktop">
          <q-card-section>
            <div class="text-h6">Distritos</div>
          </q-card-section>
          <q-card-section>
            <q-option-group
              v-model="filterDistricts"
              :options="districts"
              color="primary"
              left-label
            />
          </q-card-section>
        </q-card>
        <div class="campaigns">
          <q-card class="campaign" v-for="(operator, index) in operators" :key="index" >
            <div class="header">
              <q-btn flat :to="`operador/${operator.operadoresid}`" style="width: 100%; position: relative; overflow: hidden;">
                <AuthImg v-if="operator.operadoresid" class="operator-logo" :authSrc="getImageUrl(operator.operadoresid, 384)" :thumb="operator.imagemsmall"></AuthImg>
              </q-btn>
              <div style="width: 100%; min-height: 4rem; position: relative;display: flex;padding: 0 0 0.5rem 1rem;align-items: flex-end;">
                <label class="operator-districts" @click="help_tooltip[operator.operadoresid] = true">{{ getDistricts(operator.distritos, true) }}</label>
                <q-tooltip anchor="center left" self="top left" v-model="help_tooltip[operator.operadoresid]" content-class="districts-tooltip">{{ getDistricts(operator.distritos) }}</q-tooltip>
                <div class="actions">
                  <div class="wrapper">
                    <a v-if="operator.facebook" :href="operator.facebook" rel="noopener" target="_blank"><img src="~/assets/icon-facebook-blue.svg" class="action" alt="link facebook" /></a>
                    <a v-if="operator.instagram" :href="operator.instagram" target="_blank"><img src="~/assets/icon-instagram-blue.svg" class="action" alt="link instagram" /></a>
                    <a v-if="operator.twitter" :href="operator.twitter" rel="noopener" target="_blank"><img src="~/assets/icon-twitter-blue.svg" class="action" alt="link twitter" /></a>
                  </div>
                </div>
              </div>
            </div>
            <div class="content">
              <q-btn :to="`operador/${operator.operadoresid}`" class="operator-card">
                <q-card-section style="position: relative;">
                  <div class="title" style="font-size: 16px; margin: 10px 0;">{{operator.nome}}</div>
                  <div class="respect-line-breaks">{{ getOperatorShortDesc(operator.descricao) }}</div>
                </q-card-section>
              </q-btn>
            </div>
          </q-card>
        </div>
      </div>
    </div>
    <q-drawer v-model="filtering" side="right" bordered style="color: black; padding: 0 2rem" :width="getScreenWidth()">
      <Header campaigns filters black></Header>
      <q-btn flat style="font-weight: 800;text-transform: none; font-size: 21px;" @click="filtering = false">
        <q-icon size="1.5em" name="keyboard_arrow_left" />Filtros
      </q-btn>
      <div style="padding: 0 2em; margin-top: 2rem;">
        <div>
          <label><h6>Tipo de oferta</h6></label>
          <q-option-group
            v-model="filterPromoType"
            color="primary"
            :options="operations"
            @input="filtering = false"
          />
        </div>
        <div style="margin-top: 2rem;">
          <label><h6>Tipo de transporte</h6></label>
          <q-option-group
            v-model="filterTransports"
            :options="transports"
            color="primary"
            class="option-group"
            emit-value
            @input="filtering = false"
          />
        </div>
        <div style="margin-top: 2rem;">
          <label><h6>Distritos</h6></label>
            <q-option-group
              v-model="filterDistricts"
              :options="districts"
              color="primary"
              @input="filtering = false"
            />
        </div>
      </div>
    </q-drawer>
  </q-page>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import Header from '../components/Header'
import AuthImg from '../components/AuthImg'
import { getImagesUrl } from '../common/api'

const { mapState } = createNamespacedHelpers('app')

export default {
  name: 'PageCampanhas',
  created () {
    this.$store.dispatch('app/storeAnalyticsCampaigns')
  },
  data () {
    return {
      filtering: false,
      filterPromoType: 'all',
      filterTransports: { label: 'Todos', value: 'all' },
      filterDistricts: 'all',
      help_tooltip: {}
    }
  },
  components: {
    Header,
    AuthImg
  },
  methods: {
    getScreenWidth: function () {
      return document.documentElement.clientWidth
    },
    getImageUrl (operator, size) {
      return getImagesUrl(operator, size)
    },
    getDistricts (ids, truncated) {
      const districts = this.districts.reduce((acc, curr, i) => {
        acc[curr.value] = curr
        return acc
      }, {})
      const operatorDistricts = (ids || '').split(',').map(id => {
        return id in districts ? districts[id].label : ''
      })
      const districtsListing = (operatorDistricts.join(', ') || '').replace(/,$/, '')
      if (!truncated) {
        return districtsListing
      }
      const MAX_DISTRICTS_SIZE = 16
      return districtsListing.length > MAX_DISTRICTS_SIZE ? districtsListing.substring(0, MAX_DISTRICTS_SIZE) + '...' : districtsListing
    },
    getOperatorShortDesc (desc) {
      return desc.slice(0, 160) + '...'
    },
    fetchFilteredOperators (value) {
      const filters = {}
      if (this.filterPromoType !== 'all') {
        filters.servicogratuito = this.filterPromoType
      }
      if (this.filterTransports.value !== 'all') {
        filters.tipostransporteid = this.filterTransports.value
      }
      if (this.filterDistricts !== 'all') {
        filters.distritos = this.filterDistricts.toString()
      }
      this.$store.dispatch('app/loadOperators', { filter: { ...filters } })
    }
  },
  computed: {
    ...mapState([
      'operators',
      'districts'
    ]),
    ...mapState({
      transports: state => [
        ...[{ label: 'Todas', value: 'all' }],
        ...(state.transports || []).map(t => {
          return { label: t.designacao, value: t.tipostransporteid }
        })
      ],
      operations: state => [
        ...[{ label: 'Todos', value: 'all' }],
        ...(state.types_of_operations || []).map(o => {
          const mapping = { y: 'Gratuito', n: 'Descontos' }
          return { label: mapping[o.value], value: o.value }
        })
      ],
      districts: state => [
        ...[{ label: 'Todos', value: 'all' }],
        ...(state.districts || []).map(t => {
          return { label: t.designacao, value: t.distritosid }
        })
      ]
    })
  },
  watch: {
    filterPromoType: function (current, previous) {
      this.fetchFilteredOperators()
    },
    filterTransports: function (current, previous) {
      this.fetchFilteredOperators()
    },
    filterDistricts: function (current, previous) {
      this.fetchFilteredOperators()
    }
  },
  meta: {
    title: 'Campanhas - mob4h'
  }
}
</script>
<style lang="scss">
.campanhas {
  width: 100%;
  color: #393839;
}
.campanhas .desktop {
  display: none !important;
}
@media (min-width: $breakpoint-sm-max) {
  .campanhas .mobile {
    display: none !important;
  }
  .campanhas .desktop {
    display: flex !important;
  }
}
.campanhas .header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  overflow: hidden;
  border-radius: 0 0 6px 6px !important;
  background: white;
  justify-content: space-between;
}
.campanhas .header .q-btn__wrapper {
  padding: 0;
}
.campanhas .filters {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  grid-area: top_filters;
}
.campanhas .filters button {
  width: 8rem;
}
.campanhas .actions {
  opacity: 0;
}
.campanhas .campaign:hover .actions {
  opacity: 1;
}
.campanhas .header .wrapper {
  position: absolute;
  right: 0.5rem;
}
.campanhas .header .wrapper {
  bottom: 0;
}
.campanhas .header .action {
  width: 36px;
  height: 36px;
  margin: 0.2rem 0.2rem;
  position: relative;
  overflow: hidden;
}
.campanhas .header .operator-districts {
  max-width: 15rem;
  min-height: 1.5rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
}
.campanhas label h6 {
  margin-block-end: 0.5rem;
  margin-block-start: 0.5rem;
}
.campanhas .main-content {
  display: grid;
    grid-gap: 2rem;
    grid-template-columns: repeat(4, 1fr);
    grid-template-areas:
      ". top_filters top_filters ."
      "sidebar_filters operators operators ."
      ". operators operators ."
      ". operators operators ."
      ". operators operators ."
}
.campanhas .district-filters {
  grid-area: sidebar_filters;
  flex-direction: column;
  min-width: 17rem;
}
.campanhas .district-filters .q-option-group {
  padding: 0 0.5rem;
}
.campanhas .district-filters .q-option-group .q-radio {
  width: 100%;
  justify-content: space-between;
  padding: 0 0.5rem;
}
.campanhas .district-filters .q-option-group > *:not(:last-child) .q-radio {
  border-bottom: 1px solid $support-fill;
}
.campanhas a:hover .q-focus-helper {
  background: none !important;
}
.campanhas .campaigns {
  width: 100%;
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 20rem));
  grid-area: operators;
  align-self: baseline;
  justify-content: center;
}
.campanhas .campaigns .campaign {
  background: $primary;
}
.campanhas .header .operator-logo {
  width: 100%;
  min-height: 8.2rem;
}
.campanhas .operator-card {
  height: 15rem;
  overflow: hidden;
  color: white;
  border-radius: 0 0 6px 6px;
  text-transform: none !important;
}
.option-group {
  font-size: 19px;
}
.districts-tooltip {
  max-width: 15rem !important;
}
@media (max-width: $breakpoint-sm-max) {
  .campanhas .actions {
    opacity: 1 !important;
  }
  .campanhas .campaigns {
    grid-template-columns: repeat(auto-fill, minmax(19rem, 21rem));
  }
  .campanhas .main-content {
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
  }
  .campanhas .header .operator-logo {
    width: 100%;
    min-height: 8.2rem;
  }
}
</style>
