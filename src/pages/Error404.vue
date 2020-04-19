<template>
  <div class="fixed-center text-center">
    <p>
      <img
        src="~assets/Vertical-branco.svg"
        style="width:30vw;max-width:150px;"
        alt="página não encontrada"
      >
    </p>
    <p class="text-faded">
      Desculpe, não encontramos a página pedida...<strong>(404)</strong>
    </p>
    <q-btn
      color="secondary"
      style="width:200px;"
      to="/"
      label="Voltar"
    />
  </div>
</template>

<script>
export default {
  name: 'Error404'
}
</script>
