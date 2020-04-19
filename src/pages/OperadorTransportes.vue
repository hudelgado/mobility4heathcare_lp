<template>
  <q-page class="operadores flex column">
    <Header operators black blue></Header>
    <div class="content">
      <q-form
        ref="form"
        @submit="onSubmit"
        @reset="onReset"
        style="padding: 0 3em;"
      >

        <div class="row">
          <h5 style="margin-block-start: -1em;">Introduza os dados<br /><b>da sua empresa</b></h5>
        </div>

        <div class="wrapper">
          <q-input
            lazy-rules
            stack-label
            v-model="model.nome"
            label="Empresa"
            outlined
            placeholder="Ex: Mobility4health"
            :rules="[value => value != null || 'Por favor preencha este campo']"
            class="empresa"
          />

          <q-input
            lazy-rules
            stack-label
            v-model="model.nif"
            label="NIPC"
            :rules="[value => value != null || 'Por favor preencha este campo']"
            outlined
            mask="#########"
            placeholder="Ex. 500456789"
            class="nipc"
          />

          <q-input lazy-rules stack-label
            type="email"
            v-model="model.email"
            label="E-mail"
            :rules="[value => value != null || 'Por favor preencha este campo', value => validateEmail(value) || 'Por favor indique um email válido']"
            outlined
            placeholder="Ex. carla.silva@mobility4health.pt"
            class="email"
          />

          <q-input lazy-rules stack-label
            type="tel"
            v-model="model.contacto"
            label="Telefone"
            mask="#########"
            :rules="[value => value != null || 'Por favor preencha este campo', value => validateTelephone(value) || 'Por favor indique um telefone válido']"
            outlined
            placeholder="Ex. 961234567"
            class="telephone"
          />

          <q-select stack-label outlined
            v-model="model.tiposviaturaid"
            :options="vehicles"
            option-value="tiposviaturaid"
            option-label="designacao"
            label="Tipo Viatura"
            :rules="[value => value != null || 'Por favor preencha este campo']"
            popup-content-style="background-color: #F5F5F5"
            class="viature"
          />

          <q-input lazy-rules stack-label outlined
            v-model="model.numeroviaturas"
            label="Número viaturas"
            mask="#########"
            :rules="[value => value && value > 0 || 'Indique o número de viaturas']"
            placeholder="Ex. 3"
            class="viature_number"
          />

          <q-select stack-label outlined
            v-model="model.tipostransporteid"
            :options="transports"
            option-value="tipostransporteid"
            option-label="designacao"
            label="Tipo Transporte"
            :rules="[value => value != null || 'Por favor preencha este campo']"
            popup-content-style="background-color: #F5F5F5"
            class="transport"
          />

          <q-input lazy-rules stack-label outlined
            v-model="model.descricao"
            label="Descrição"
            type="textarea"
            class="description"
            placeholder="Ex. A nossa empresa oferece um desconto em viagens a profissionais de saúde."
            :rules="[value => (value != null && value !== '') || 'Por favor preencha este campo']"
          />

          <q-select multiple use-chips lazy-rules stack-label outlined
            v-model="model.distritos"
            :options="districts"
            option-value="distritosid"
            option-label="designacao"
            label="Distrito"
            popup-content-style="background-color: #F5F5F5"
            class="district"
            :rules="[value => (value != null && value.length > 0) || 'Por favor preencha este campo']"
          />

          <div class="operation">
            <div>
              <div class="togle_wrapper field-label">Tem operação montada?<q-btn flat icon="help" @click="help_tooltip = true" style="min-width: 6rem;"><q-tooltip anchor="top middle" self="bottom middle" :offset="[10, 10]" v-model="help_tooltip">Já tem forma de conectar os motoristas com os profissionais de saúde e fazer a validação dos mesmos?</q-tooltip></q-btn></div>
              <q-btn-toggle
                unelevated
                v-model="model.operacaomontada"
                toggle-color="primary"
                label=""
                :options="types_of_operations"
              />
            </div>
            <div :hidden="!model.operacaomontada || model.operacaomontada === 'n'" class="operation-description">
              <q-input lazy-rules stack-label outlined
                v-model="model.operacaodescricao"
                label="De que forma é feita a vossa ligação com os passageiros?"
              />
            </div>
          </div>

          <div class="service" style="margin-bottom: 1rem;">
            <div class="togle_wrapper field-label" style="margin-top: 0.4rem;">Tipo oferta</div>
            <q-btn-toggle unelevated
              v-model="model.servicogratuito"
              toggle-color="primary"
              label=""
              :options="types_of_services"
            />
          </div>

          <q-input lazy-rules stack-label
            v-model="model.site"
            label="Website (se aplicável)"
            outlined
            placeholder="Ex. www.mob4h.pt"
            class="site"
          />

          <div class="socials-wrapper">
            <div class="togle_wrapper field-label">Redes sociais <span style="font-weight: normal">(se aplicável)</span></div>
            <q-input lazy-rules stack-label outlined v-model="facebook_username" class="socials facebook" placeholder="Ex. /mobility.healthcare.10">
              <template v-slot:prepend>
                <img src="~/assets/icon-facebook-grey.svg" />
              </template>
            </q-input>

            <q-input lazy-rules stack-label outlined v-model="instagram_username" class="socials instagram" placeholder="Ex. @mobility4healthcare">
              <template v-slot:prepend>
                <img src="~/assets/icon-instagram-grey.svg" />
              </template>
            </q-input>

            <q-input lazy-rules stack-label outlined v-model="twitter_username" class="socials twitter" placeholder="Ex. Mobility4H">
              <template v-slot:prepend>
                <img src="~/assets/icon-twitter-grey.svg" />
              </template>
            </q-input>
          </div>

        </div>
        <div class="q-gutter-sm">
          <q-checkbox v-model="accepted_terms" >Declaro que li e aceito os termos e condições bem como a <span style="font-weight: bolder;" @click.stop="show_terms = true">política de privacidade</span> aplicáveis.</q-checkbox>
        </div>

        <div style="margin-bottom: 3rem; text-align: center; max-width: 20rem;">
          <q-btn rounded flat label="Submeter dados" type="submit" class="submit m4h-button" style="max-width: 20rem;" @click="onSubmit" :disabled="!valid"/>
        </div>
      </q-form>

      <q-dialog v-model="show_terms">
        <q-card>
          <q-card-section>
            <div class="text-h6">Termos e Condições</div>
          </q-card-section>

          <q-separator />

          <q-card-section style="max-height: 50vh" class="scroll">
            <p>Termos atualizados em Abril de 2020 </p>
            <p>O Utilizador deverá ler atentamente os presentes Termos e Condições (doravante designados por “Termos”) antes de aceder ou de utilizar o <a href="https://www.mob4h.pt" target="blank">website</a>. Ao aceder e utilizar o website, o Utilizador concorda, em seu nome e/ou em nome da entidade que representa, cumprir estritamente as disposições destes Termos.</p>
            <p>Estes Termos constituem um acordo vinculativo (doravante designado por “Acordo”) entre o Utilizador e a Plataforma mobility4healthcare (doravante designada por “Plataforma” ou “mob4h”) relativamente ao acesso e uso do website.</p>
            <p>A mob4h é uma plataforma online que tem por objetivo ajudar profissionais de saúde que, decorrente do surto do Covid-19, necessitam de transporte seguro nas suas diversas deslocações. </p>
            <p>No website da Plataforma é disponibilizada informação relativa a campanhas de Serviços de transporte (doravante designados por “Serviços”) disponibilizados por terceiros (doravante designados por “Parceiro” ou “Parceiros”), os quais poderão ser adquiridos por profissionais de saúde (doravante designados por “Utilizadores” ou “Utilizador”).</p>
            <p>O Utilizador obriga-se a tomar conhecimento das condições de aquisição daqueles Serviços definidas e disponibilizadas pelo Parceiro.</p>
            <p>Os Parceiros são responsáveis por identificar, compreender e cumprir com todas as leis, regras e regulamentos que se aplicam aos seus Serviços (tal como definidos acima).</p>

            <q-separator />

            <p>1. Condições gerais</p>
            <p>1.1. A mob4h não é responsável, não tem controle, nem presta qualquer garantia sobre os Serviços prestados pelos Parceiros, bem como sobre a qualidade, pontualidade ou qualquer outro aspeto relacionado com aqueles.</p>
            <p>1.2. O Parceiro será o único responsável por prestar os Serviços especificados na Plataforma, ao Utilizador, em seu nome e por sua conta, estando a oferta sujeita à descrição e condições por ele fixadas, incluindo, entre outras, preços e garantias legais, as quais foram objeto de prévio conhecimento e aceitação por parte do Utilizador.</p>
            <p>1.3. A mob4h verifica a identidade dos Parceiros através da submissão de informação aquando do seu registo. No entanto, a mob4h não é responsável por eventuais declarações ou informações falsas fornecidos pelos Parceiros, pelo que não garante a fidedignidade das informações.</p>
            <p>1.4. O Utilizador reconhece e aceita que adquirirá os Serviços por sua conta e risco, atuando com prudência e bom senso e tomar as medidas que considerar necessárias para proteger a sua segurança e bem estar.</p>

            <q-separator />

            <p>2. Acessibilidade</p>
            <p>2.1. De forma a adquirir os Serviços através da Plataforma, o Utilizador poderá ter de criar uma conta na Plataforma. O Registo encontra-se associado ao endereço de e-mail fornecido pelo Utilizador. A cada Utilizador apenas pode corresponder um registo. A mob4h poderá cancelar qualquer registo subsequente.</p>
            <p>2.2. Para criar uma conta na Plataforma, os Parceiros deverão facultar as informações requeridas na Plataforma.</p>
            <p>2.3. O Utilizador pode, a qualquer momento, solicitar o cancelamento da sua conta.</p>
            <p>2.4. A mob4h pode, a qualquer momento, cancelar ou eliminar contas caso alguma das Partes não cumpra os presentes termos, ceda a sua posição a terceiros sem a prévia autorização por escrito da mob4h e/ou atuar de forma a acarretar prejuízos para as Partes.</p>

            <q-separator />

            <p>3. Condições de aquisição</p>
            <p>3.1. Não é permitida a reprodução, edição, manipulação ou revenda dos Serviços disponibilizados. Em caso de suspeita fundamentada de ocorrência de qualquer uma dessas ações, a mob4h, reserva-se o direito de tomar todas as medidas que entenda por adequadas, nomeadamente junto do respetivo Parceiro e das autoridades competentes.</p>
            <p>3.2. A informação relativa aos Serviços será disponibilizada na mob4h após validação do registo do Parceiro.</p>
            <p>3.3. O Utilizador deverá consultar a informação apresentada pelo Parceiro e suscitar potenciais questões junto do mesmo.</p>

            <q-separator />

            <p>4. Preços, condições de pagamento e faturação</p>
            <p>4.1. A utilização da Plataforma é gratuita.</p>
            <p>4.2. O valor da prestação dos Serviços é estipulado pelo Parceiro que definirá as condições das campanhas apresentadas.</p>
            <p>4.3. Os preços dos Serviços são fixados em euros e os pagamentos deverão ser realizados nessa moeda ao Parceiro.</p>
            <p>4.4. É da inteira responsabilidade do Utilizador promover as operações bancárias e eventuais autorizações que o habilitem a realizar pagamentos.</p>
            <p>4.5. 4.5. O processo de faturação estará a cargo do Parceiro. A mob4h não tem qualquer intervenção a este propósito.</p>

            <q-separator />

            <p>5. Força maior</p>
            <p>5.1. Nenhuma das Partes será responsável perante a outra pelo não cumprimento das suas obrigações, se esse incumprimento tiver sido causado ou resultar de um evento de força maior.</p>
            <p>5.2. Um evento de força maior constitui um evento que impeça qualquer das partes de cumprir as suas obrigações, esteja fora do seu controlo e não possa ser evitado por um contraente diligente.</p>
            <p>5.3. A parte faltosa deverá, de imediato, notificar a parte não faltosa da ocorrência do evento de força maior.</p>
            <p>5.4. A parte faltosa tomará as medidas necessárias para limitar ou restringir os efeitos adversos.</p>

            <q-separator />

            <p>6. Conteúdo</p>
            <p>6.1. Todo o conteúdo da Plataforma é protegido por Direitos de Autor e Direitos Conexos, e Direitos da Propriedade Industrial, ao abrigo das leis Portuguesas da União Europeia, convenções internacionais e outras leis, não podendo ser utilizado fora das condições admitidas neste site e sem consentimento da mob4h.</p>
            <p>6.2. Os direitos de propriedade intelectual de todos os conteúdos da mob4h, que não sejam de fornecimento externo e como tal devidamente identificado, são pertença da mob4h, incluindo as informações, as ferramentas, o desenho gráfico das páginas, bem como todos os seus componentes e todas as figuras.</p>
            <p>6.3. O conteúdo presente no website não poderá ser copiado, alterado ou distribuído salvo com autorização expressa da mob4h.</p>
            <p>6.4. Todos os textos, imagens, ilustrações, fotografias, publicidade, marcas e outros elementos do conteúdo do website estão protegidos por lei, sendo expressamente interdita qualquer cópia, reprodução, difusão ou transmissão, utilização, modificação, venda, publicação, distribuição ou qualquer outro uso, total ou parcial, comercial ou não comercial, quaisquer que sejam os meios utilizados salvo com autorização expressa dos Parceiros e/ou da mob4h, conforme o caso.</p>
            <p>6.5. É proibida a utilização do site para fins ilegais ou quaisquer outros que possam ser considerados prejudiciais para a mob4h.</p>
            <p>6.6. A mob4h rejeita qualquer responsabilidade pela usurpação e uso indevido dos elementos acima citados. Excetua-se a esta interdição o uso livre autorizado por lei, nomeadamente o direito de citação, desde que claramente identificada a sua origem.</p>
            <p>6.7. A mob4h reserva-se o direito de proceder judicialmente contra os autores de qualquer cópia, reprodução ou outra utilização não autorizada.</p>

            <q-separator />

            <p>7. Exclusão de responsabilidade</p>
            <p>7.1. A mob4h não controla ou gere as informações, produtos ou Serviços dos conteúdos fornecidos por terceiros na Plataforma, bem como das hiperligações a outros websites, logo não pode ser responsabilizada por erros de qualquer natureza, ou dados incorrectos, destes websites e/ou conteúdos, incluindo as suas políticas e práticas de privacidade.</p>
            <p>7.2. A inclusão de conteúdos fornecidos por terceiros na Plataforma não implica aceitação ao conteúdo nelas existentes ou uma associação com os seus proprietários.</p>
            <p>7.3. A mob4h rejeita qualquer responsabilidade por quaisquer danos diretos, indiretos ou acidentais consequentes do uso ou da inabilidade de uso dos materiais contidos na Plataforma, bem como não controla nem é responsável por qualquer conduta ilegal, ofensiva ou difamatórias dos Utilizadores e Parceiros.</p>

            <q-separator />

            <p>8. Responsabilidade do Parceiro</p>
            <p>8.1. O Parceiro é o único responsável pelos conteúdos publicados. Qualquer informação, dados, textos, links ou outros materiais são da responsabilidade exclusiva do Parceiro.</p>
            <p>8.2. Não obstante as regras definidas e a diligência e zelo a que a mob4h se propõe, não é possível um controlo de forma exaustiva dos conteúdos disponibilizados pelos Parceiros e, por isso não é possível à mob4h garantir a correcção, qualidade, integridade, precisão ou veracidade daqueles.</p>
            <p>8.3. A mob4h reserva-se ainda o direito de retirar do website qualquer mensagem que contrarie as regras que defende para o bom funcionamento do website, nomeadamente as de carácter obsceno, maldoso, assediante, difamatório, prejudicial, ameaçador, calunioso, ofensivo, ilegal, racista, sexualmente tendencioso, publicitário e invasivo da privacidade de terceiros.</p>

            <q-separator />

            <p>9. Privacidade e Dados Pessoais</p>
            <p>9.1. Os dados pessoais fornecidos são indispensáveis ao acesso e utilização da Plataforma e processados automaticamente para este finalidade.</p>
            <p>9.2. Nos termos legais, é garantido a qualquer uma das Partes o direito de acesso, rectificação e atualização dos seus dados pessoais, bem como o direito de oposição à utilização dos mesmos. </p>
            <p>9.3. A omissão ou inexatidão dos dados pessoais ou das demais informações disponibilizados por qualquer uma das Partes, são da sua inteira responsabilidade.</p>

            <q-separator />

            <p>10. Lei aplicável e litígio</p>
            <p>Estes Termos são redigidos e interpretados de acordo com a Lei Portuguesa.</p>

            <q-separator />

            <p>11. Contato e suporte</p>
            <p>Em caso de dúvidas relacionadas com este Acordo, direitos e obrigações de qualquer uma das partes decorrentes deste documento, por favor entre em contato com info@mob4h.pt. Qualquer outro assunto relacionado com os Serviços ou campanhas disponibilizados na Plataforma, por favor contacte o Parceiro em questão.</p>

          </q-card-section>

          <q-card-actions align="right">
            <q-btn flat label="Recusar" color="primary" v-close-popup @click="accepted_terms = false"/>
            <q-btn flat label="Aceitar" color="primary" v-close-popup @click="accepted_terms = true"/>
          </q-card-actions>
        </q-card>
      </q-dialog>
    </div>
  </q-page>
</template>

<script>
import { validateEmail, filterObject } from '../common/helpers'
import { createNamespacedHelpers } from 'vuex'

import Header from '../components/Header'
import { insertOperator } from '../common/api'

const { mapState } = createNamespacedHelpers('app')

const mapToApi = (data) => {
  const newData = { ...filterObject(data) }
  newData.tipostransporteid = newData.tipostransporteid.tipostransporteid
  newData.tiposviaturaid = newData.tiposviaturaid.tiposviaturaid
  newData.distritos = newData.distritos.map(m => m.distritosid).toString()
  return newData
}

const INITIAL_MODEL = {
  nome: null,
  nif: null,
  email: null,
  contacto: null,
  tipostransporteid: null,
  tiposviaturaid: null,
  numeroviaturas: null,
  distritos: [],
  descricao: null,
  operacaomontada: 'n',
  operacaodescricao: null,
  servicogratuito: 'n',
  site: null,
  facebook: null,
  twitter: null,
  instagram: null
}

const INITIAL_SAMPLE_MODEL = {
  nome: 'OperadorTeste',
  nif: '999999990',
  email: 'operador@teste.alem',
  contacto: '123235456',
  tipostransporteid: null,
  tiposviaturaid: null,
  numeroviaturas: 2,
  distritos: [],
  descricao: 'Fique a conhecer o nosso serviço xpto',
  operacaomontada: 'n',
  operacaodescricao: null,
  servicogratuito: 'n',
  site: null,
  facebook: null,
  twitter: null,
  instagram: null
}
const SOCIALS_MAPPING = {
  facebook: 'https://www.facebook.com/',
  instagram: 'https://www.instagram.com/',
  twitter: 'https://twitter.com/'
}

export default {
  name: 'PageOperadorTransportes',
  components: {
    Header
  },
  data () {
    return {
      model: process.env.IN_DEV ? { ...INITIAL_SAMPLE_MODEL } : { ...INITIAL_MODEL },
      accepted_terms: false,
      show_terms: false,
      help_tooltip: false
    }
  },
  created () {
    this.$store.dispatch('app/storeAnalyticsOperatorRegister')
  },
  methods: {
    onSubmit () {
      this.$refs.form.validate().then((isValid) => {
        if (isValid) {
          insertOperator(mapToApi(this.model))
          this.$router.push('/success')
          this.onReset()
        }
      })
    },

    onReset () {
      this.model = { ...INITIAL_MODEL }
      this.accepted_terms = false
    },

    validateEmail (email) {
      return validateEmail(email)
    },

    validateTelephone (telephone) {
      return telephone.match(/\d{9}/g) != null
    }
  },
  computed: {
    facebook_username: {
      get: function () {
        return this.model.facebook ? this.model.facebook.replace(SOCIALS_MAPPING.facebook, '') : ''
      },
      set: function (val) {
        this.model.facebook = val ? `${SOCIALS_MAPPING.facebook}${val}` : ''
      }
    },
    instagram_username: {
      get: function () {
        return this.model.instagram ? this.model.instagram.replace(SOCIALS_MAPPING.instagram, '') : ''
      },
      set: function (val) {
        this.model.instagram = val ? `${SOCIALS_MAPPING.instagram}${val}` : ''
      }
    },
    twitter_username: {
      get: function () {
        return this.model.twitter ? this.model.twitter.replace(SOCIALS_MAPPING.twitter, '') : ''
      },
      set: function (val) {
        this.model.twitter = val ? `${SOCIALS_MAPPING.twitter}${val}` : ''
      }
    },
    valid: {
      get: function () {
        const optionalFields = ['facebook', 'twitter', 'instagram', 'site'].concat(this.model.operacaomontada === 'n' ? ['operacaodescricao'] : [])
        const validFilledFields = filterObject(this.model)
        const requiredModelFields = Object.keys(this.model).filter(k => optionalFields.find(s => s === k) ? false : k)
        const missingRequiredFields = requiredModelFields.filter(el => !Object.keys(validFilledFields).includes(el))
        const allRequiredFieldsFielled = Object.keys(validFilledFields).length >= requiredModelFields.length
        return missingRequiredFields.length === 0 && allRequiredFieldsFielled && this.accepted_terms && this.validateEmail(this.model.email) && this.validateTelephone(this.model.contacto) && this.model.distritos.length > 0
      }
    },
    ...mapState([
      'transports',
      'districts',
      'vehicles',
      'types_of_services',
      'types_of_operations',
      'lorem'
    ])
  },
  meta: {
    title: 'Registo operadores mobilidade - mob4h'
  }
}
</script>
<style lang="scss">
  .q-page.operadores {
    background: $support-background;
    color: $dark;
  }
  .q-page.operadores form > *:not(first-child) {
    margin-top: 2rem;
  }
  .q-page.operadores .content {
    width: 100%;
  }
  .q-page.operadores .q-input {
    margin: 1em 0;
  }
  .q-page.operadores form .wrapper {
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 4fr 4fr 4fr 4fr 1pr 1pr;
    // grid-template-rows: 100px 200px 100px 100px;
    grid-template-areas:
      "empresa empresa nipc nipc ."
      "email email telephone telephone ."
      "viature viature_number transport transport ."
      "description description district district ."
      "operation operation operation operation ."
      "service . . . ."
      "site . . . ."
      "socials-wrapper . . . ."
  }
  .empresa {
    grid-area: empresa;
  }
  .email {
    grid-area: email;
  }
  .telephone {
    grid-area: telephone;
  }
  .nipc {
    grid-area: nipc;
  }
  .district {
    grid-area: district;
    margin-top: 1rem;
  }
  .district .q-field__inner,
  .description .q-field__inner {
    justify-content: start;
    align-self: auto;
  }
  .transport {
    grid-area: transport;
  }
  .viature {
    grid-area: viature;
  }
  .viature .q-field__bottom,
  .transport .q-field__bottom {
    margin-bottom: 9px !important;
  }
  .viature_number {
    grid-area: viature_number;
  }
  .site {
    grid-area: site;
  }
  .description {
    grid-area: description;
    margin-top: 1rem;
  }
  .operation {
    grid-area: operation;
    display: flex;
    flex-wrap: wrap;
  }
  .operation button {
    min-width: 140px;
  }
  .operation .operation-description {
    flex: 1;
    margin-top: 1.5rem;
    min-width: 39.5rem;
  }
  .operation-description .q-field__label {
    white-space: pre-wrap;
    margin-top: -0.5rem;
  }
  .service {
    grid-area: service;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .service button {
    min-width: 140px;
  }
  .socials-wrapper {
    grid-area: socials-wrapper;
  }
  .socials-wrapper label {
    margin: 0 !important;
    padding: 0.5rem 0 !important;
  }
  .socials img {
    margin-left: -7px;
    width: 55px;
    height: 55px;
  }
  .socials .q-field__control {
    border-radius: 25px 6px 6px 25px;
  }
  .socials .social {
    width: 40px;
    height: 40px;
    margin: 0.5rem;
  }
  .q-page.operadores .q-btn-group > .q-btn-item {
    border: 2px solid $support-fill;
    box-sizing: border-box;
    border-radius: 6px;
    text-transform: none;
    padding: 0.5em 1em;
  }
  .q-page.operadores .q-btn-group > .q-btn-item:not(:first-child) {
    margin-left: 0.5rem;
  }
  .q-page.operadores .q-checkbox {
    font-weight: 200;
    font-size: 12px;
    line-height: 15px;
  }

  .togle_wrapper .q-field__label {
    font-size: 12px;
  }
  .q-page.operadores .q-checkbox .q-checkbox__bg {
    border-radius: 6px;
  }
  @media (max-width: $breakpoint-sm-max) {
    .q-page.operadores form .wrapper {
      display: flex;
      flex-direction: column;
    }
    .q-page.operadores label {
      padding: 1em 0;
      margin-top: 1rem;
    }
    .q-page.operadores  .q-field--error .q-field__bottom {
        padding: 0;
        margin-bottom: -2px !important;
    }
    .viature {
      padding-top: 10px;
    }
    .socials {
      flex-direction: row;
    }
    .operation .operation-description {
      margin-top: 1rem;
      min-width: 20rem;
    }
  }
  .q-page.operadores  .q-field--error .q-field__bottom {
      padding: 0;
      margin-bottom: -3px;
  }
</style>
