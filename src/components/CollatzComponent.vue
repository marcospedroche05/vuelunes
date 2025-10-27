<template>
  <div>
    <h1>Collatz</h1>
    <label>Introduce un número: </label>
    <input type="number" v-model="numero" min="1" />
    <button v-on:click="generarCollatz()">Generar conjetura</button>
    <ul>
      <li
        v-for="num in numerosCollatz"
        :key="num"
        v-html="$filters.comprobarCollatz(num)"
      ></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "CollatzComponent",
  data() {
    return {
      numero: 1,
      numerosCollatz: [],
    };
  },
  methods: {
    generarCollatz() {
      this.numerosCollatz = [];
      var numero = this.numero;
      while (numero != 1) {
        if (numero % 2 == 0) {
          numero = numero / 2;
          this.numerosCollatz.push(numero);
        } else {
          numero = numero * 3 + 1;
          this.numerosCollatz.push(numero);
        }
      }
    },
  },
};
</script>

<style>
@import "../assets/css/estilos.css";
</style>
