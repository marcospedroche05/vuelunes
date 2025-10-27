<template>
  <div>
    <h1>Tabla multiplicar</h1>
    <label>Introuce un número: </label>
    <input type="number" v-model="numero" />
    <button v-on:click="generarTabla1()">Generar tabla 1</button>
    <div>
      <table v-if="tabla.length > 0">
        <tbody>
          <tr v-for="(num, index) in tabla" :key="index">
            <td>{{ numero }} * {{ index + 1 }}</td>
            <td>{{ num }}</td>
          </tr>
        </tbody>
      </table>
      <table v-if="numero != 0">
        <tbody>
          <tr v-for="i in 10" :key="i">
            <td>{{ numero }} * {{ i }}</td>
            <td>{{ numero * i }}</td>
          </tr>
        </tbody>
      </table>
      <table v-if="numero != 0">
        <tbody>
          <tr v-for="i in 10" :key="i">
            <td>{{ $filters.getOperacion(numero, i) }}</td>
            <td>{{ $filters.getResultado(numero, i) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "TablaMultiplicar",
  data() {
    return {
      numero: 0,
      tabla: [],
    };
  },
  methods: {
    generarTabla1() {
      var aux = [];
      for (let i = 1; i <= 10; i++) {
        aux.push(this.numero * i);
      }
      this.tabla = aux;
    },
  },
};
</script>

<style>
@import "../assets/css/estilos.css";
</style>
