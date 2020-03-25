<template>
  <q-page class="operadores flex flex-center">
    <q-toolbar>
      <q-toolbar-title>
        <q-avatar>
          <q-btn flat to="/"><img src="~/assets/Monograma-azul.svg" class="app-icon"></q-btn>
        </q-avatar>
      </q-toolbar-title>

      <q-btn dense flat>
        <img src="~/assets/menu-black.svg">
      </q-btn>
    </q-toolbar>
    <div class="q-pa-md" style="width: 80%">
      <div class="row flex-center"><h5>Introduza os dados<br /><b>da sua empresa</b></h5></div>
      <q-form
        ref="form"
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-xl"
      >

        <q-input
          lazy-rules
          stack-label
          v-model="company"
          label="Empresa"
          :rules="[value => value != null || 'Este campo é necessário']"
          outlined
        />

        <q-input
          lazy-rules
          stack-label
          v-model="nipc"
          label="NIPC"
          :rules="[value => value != null || 'Este campo é necessário']"
          outlined
        />

        <q-input
          lazy-rules
          stack-label
          type="email"
          v-model="email"
          label="E-mail"
          :rules="[value => value != null || 'Este campo é necessário', value => validateEmail(value) || 'Indique um email válido']"
          outlined
        />

        <q-input
          lazy-rules
          stack-label
          type="tel"
          v-model="telephone"
          label="Telefone"
          mask="#########"
          :rules="[value => value != null || 'Este campo é necessário', value => validateTelephone(value) || 'Indique um telefone válido']"
          outlined
        />

        <q-select
          stack-label
          v-model="vehicle_kind"
          :options="vehicle_kinds"
          label="Tipo Viatura"
          :rules="[value => value != null || 'Este campo é necessário']"
          outlined
        />

        <q-input
          lazy-rules
          stack-label
          v-model="vehicle_numbers"
          label="Número viaturas"
          mask="####"
          :rules="[value => value > 0 || 'Indique o número de viaturas']"
          outlined
        />

        <q-select
          multiple
          use-chips
          lazy-rules
          stack-label
          v-model="districts"
          :options="districts_kinds"
          label="Distrito"
          outlined
        />

        <div
        :hidden="districts.length == 0"
        style="display: flex; flex-direction: column; width: 100%; height: 100%;">
          <div class="q-field__label">Tem operação montada?</div>
          <q-btn-toggle
            unelevated
            v-model="operacao_montada"
            toggle-color="primary"
            label=""
            :options="[
              {label: 'Sim', value: 'one'},
              {label: 'Não', value: 'two'},
            ]"
          />
        </div>

        <div style="text-align: center;">
          <q-btn rounded flat label="Submeter dados" type="submit" class="submit" @click="onSubmit"/>
        </div>
      </q-form>

    </div>
  </q-page>
</template>

<script>
import { validateEmail } from '../common/helpers'

export default {
  name: 'PageOperadorTransportes',
  data () {
    return {
      vehicle_kinds: [
        'Ligeiro - 8 pessoas',
        'Minibus - 16 pessoas',
        'Autocarro + 16 pessoas'
      ],
      districts_kinds: [
        'Aveiro', 'Beja', 'Braga', 'Bragança', 'Castelo Branco', 'Coimbra',
        'Évora', 'Faro', 'Guarda', 'Leiria', 'Lisboa', 'Portalegre', 'Porto', 'Santarém', 'Setúbal', 'Viana do Castelo', 'Vila Real', 'Viseu', 'Ilha da Madeira',
        'Ilha de Porto Santo', 'Ilha de Santa Maria', 'Ilha de São Miguel', 'Ilha Terceira', 'Ilha da Graciosa', 'Ilha de São Jorge', 'Ilha do Pico', 'Ilha do Faial',
        'Ilha das Flores', 'Ilha do Corvo'
      ],
      company: null,
      nipc: null,
      email: null,
      telephone: null,
      address: null,
      city: null,
      cp: null,
      vehicle_kind: null,
      vehicle_numbers: 0,
      districts: [],
      operacao_montada: null,
      alert: false
    }
  },

  methods: {
    onSubmit () {
      this.$refs.form.validate().then((isValid) => {
        if (isValid) {
          this.$router.push('/success')
          this.onReset()
        }
      })
    },

    onReset () {
      this.company = null
      this.nipc = null
      this.email = null
      this.telephone = null
      this.address = null
      this.city = null
      this.cp = null
      this.vehicle_kind = null
      this.vehicle_numbers = 0
      this.alert = false
    },

    validateEmail (email) {
      return validateEmail(email)
    },

    validateTelephone (telephone) {
      const regex = /\d{9}/g
      return telephone.match(regex) != null
    }
  }
}
</script>
<style lang="scss">
  .q-page.operadores {
    background: $support-background;
    color: $dark;
  }
  .q-input {
    margin-bottom: 1em;
  }
  .submit {
    background: $primary;
    color: white;
    text-transform: capitalize;
  }
  .q-page.operadores .q-btn-group > .q-btn-item {
    border: 2px solid $support-fill;
    box-sizing: border-box;
    border-radius: 6px;
  }
  .q-page.operadores .q-btn-group > .q-btn-item:not(:first-child) {
    margin-left: 0.5rem;
  }
  [hidden] {
    display: none;
  }
</style>
