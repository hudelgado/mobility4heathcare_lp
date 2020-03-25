<template>
  <q-page class="campanhas flex flex-center">
    <div class="q-pa-md" style="width: 100%">

      <div class="row flex-center"><h4>Solicite o seu Voucher!</h4></div>
      <q-form
        ref="form"
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >

        <div class="row">
          <h5>Introduza as suas informações pessoais</h5>
        </div>

        <q-input
          required
          border
          v-model="name"
          label="Nome próprio"
          :rules="[value => value != null || 'Este campo é necessário']"
          lazy-rules
        />

        <q-input
          required
          filled
          v-model="surname"
          label="Sobrenome"
          :rules="[value => value != null || 'Este campo é necessário']"
          lazy-rules
        />

        <q-input
          required
          filled
          type="email"
          v-model="email"
          label="E-mail"
          :rules="[value => value != null || 'Este campo é necessário', value => validateEmail(value) || 'Indique um email válido']"
          lazy-rules
        />

        <q-input required
          filled
          v-model="telephone"
          type="tel"
          label="Telefone"
          mask="(###) #########"
          :rules="[value => value != null || 'Este campo é necessário', value => validateTelephone(value) || 'Indique um telefone válido']"
          lazy-rules
        />

        <q-input required
          filled
          v-model="address"
          label="Morada"
          :rules="[value => value != null || 'Este campo é necessário']"
          lazy-rules
        />

        <q-input required
          filled
          v-model="city"
          label="Cidade"
          :rules="[value => value != null || 'Este campo é necessário']"
          lazy-rules
        />

        <q-input required
          filled
          v-model="cp"
          label="Código postal"
          :rules="[value => value != null || 'Este campo é necessário']"
          lazy-rules
        />

        <q-input required
          filled
          v-model="profisional_number"
          label="Número Cédula profissional"
          :rules="[value => value != null || 'Este campo é necessário']"
          lazy-rules
        />

        <div class="row">
          <q-btn label="Cancelar" type="reset" color="purple" flat class="q-ml-sm" />
          <q-space />
          <q-btn label="OK" type="submit" color="purple" @click="onSubmit"/>
        </div>
        <q-dialog v-model="alert">
          <q-card>
            <q-card-section>
              <div class="text-h6"><q-icon name="done" style="font-size: 2em"/> Obrigado pelo que tem feito por nós!</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div>Assim que validarmos os seus dados receberá o seu Voucher no email!</div>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="OK" color="secondary" to="/"/>
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-form>

    </div>
  </q-page>
</template>

<script>
import { validateEmail } from '../common/helpers'

export default {
  name: 'PageCampanhas',
  data () {
    return {
      name: null,
      surname: null,
      email: null,
      telephone: null,
      address: null,
      city: null,
      cp: null,
      ncp: null,
      profisional_number: null,
      alert: false
    }
  },

  methods: {
    onSubmit () {
      this.$refs.form.validate().then((isValid) => {
        if (isValid) {
          this.alert = true
        }
      })
    },

    onReset () {
      this.name = null
      this.surname = null
      this.email = null
      this.telephone = null
      this.address = null
      this.city = null
      this.cp = null
      this.cp = null
      this.profisional_number = null
      this.alert = false
      this.$router.push('/')
    },

    validateEmail (email) {
      return validateEmail(email)
    },

    validateTelephone (telephone) {
      const regex = /\(\d{3}\) \d{9}/g
      return telephone.match(regex) != null
    }
  },

  computed: {
    isFormValid: {
      get: function () {
        const nonEmptyKeys = Object.keys(Object.entries(this.$data).reduce((a, [k, v]) => (v ? { ...a, [k]: v } : a), {}))
        const allValuesFilled = nonEmptyKeys.length === Object.keys(this.$data).length
        return allValuesFilled
      }
    }
  }
}
</script>
<style lang="scss">
  .campanhas {
    color: red !important;
  }
</style>
