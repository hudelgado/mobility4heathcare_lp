<template>
  <q-page class="flex flex-center">
    <div class="q-pa-md" style="width: 100%">

      <q-form
        @submit="onSubmit"
        @reset="onReset"
        class="q-gutter-md"
      >
        <q-input
          filled
          v-model="company"
          label="Empresa"
        />

        <q-input
          filled
          v-model="nipc"
          label="NIPC"
        />

        <q-input
          filled
          type="email"
          v-model="email"
          label="E-mail"
        />

        <q-input
          filled
          type="tel"
          v-model="telephone"
          label="Telefone"
          mask="(###) ## #########"
        />

        <q-input
          filled
          v-model="address"
          label="Morada"
        />

        <q-input
          filled
          v-model="city"
          label="Cidade"
        />

        <q-input
          filled
          v-model="cp"
          label="Código postal"
        />

        <div class="row q-gutter-xs">
          <q-input
            class="col-8"
            filled
            v-model="vehicle_kind"
            label="Tipo Viatura"
          />
          <q-input
            class="col"
            type="number"
            filled
            v-model="vehicle_numbers"
            label="Número viaturas"
            min="0"
          />
        </div>

        <div class="row">
          <q-btn label="Cancelar" type="reset" color="purple" flat class="q-ml-sm" />
          <q-space />
          <q-btn label="OK" type="submit" color="purple" @click="alert = true"/>
        </div>
        <q-dialog v-model="alert">
          <q-card>
            <q-card-section>
              <div class="text-h6"><q-icon name="done" style="font-size: 2em"/>Obrigado pelo seu apoio!</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <div>Assim que validarmos as informações recebidas entraremos em contacto!</div>
            </q-card-section>

            <q-card-actions align="right">
              <q-btn flat label="OK" color="secondary" to="/" />
            </q-card-actions>
          </q-card>
        </q-dialog>
      </q-form>

    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageOperadorTransportes',
  data () {
    return {
      company: null,
      nipc: null,
      email: null,
      telephone: null,
      address: null,
      city: null,
      cp: null,
      vehicle_kind: null,
      vehicle_numbers: 0,
      alert: false
    }
  },

  methods: {
    onSubmit () {},

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
      this.$router.push('/')
    }
  }
}
</script>
